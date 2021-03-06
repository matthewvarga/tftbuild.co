tftbuild.co

# Server Dependencies

The only `Go` dependency is `Gin`. To install, use the following:
1) `go get -u github.com/gin-gonic/gin`
2) `go get -u github.com/gin-gonic/contrib/static`

# Development

To build the application for development, you will need to have Go installed for backend work, and npm/node.js installed for front-end.

The only go dependencies are listed above under the server dependencies.

## Font-End

To begin development on the front-end, cd into the client directory, and run `npm install` to install any required dependencies. Next simply run `npm start` to have the application up and running on localhost:3000. Note: if you require communication with the server, first follow the steps under back-end development to get the server running, but still work on port 3000.

## Back-End

To begin development on the back-end, simply use `go run main.go` and navigate to localhost:5000 to have the application up and running.

# Deployment

1) stop server for update: `sudo systemctl stop tftbuild`
2) pull from master on server: `git pull`
3) build client-side of project: `npm run-script build` from `client` directory
4) build project binary: `GOOS=linux GOARCH=amd64 go build` from project root
5) move binary to propery directory: `mv tftbuild.co /var/www/tftbuild.co/tftbuild.co`
6) bring server up: `sudo systemctl start tftbuild`, `sudo systemctl enable tftbuild`

Unfortunately, the above has stopped working as the static files cannot be found in the binary build for some reason. So the temporary fix is to use the following steps:

1) pull from master: `git pull`
2) attach to the running tmux session that is hosting the server: `tmux attach`
3) kill the server: `ctrl + c`
4) build client-side of project: `npm run-script build` from `client` directory
5) build server-side of project (binary): `go build -o prod` from root directory
6) start new tmux session to run the application: `tmux`
7) start the application: `./prod`
8) detach from the tmux session: `ctrl + b THEN d` 

### Systemd application

We are able to run simple scripts to start, enable, stop, and restart our server because of a simple systemd application. 

This is done by adding the following service file located at: `/etc/systemd/system/tftbuild.service`.

```
[Unit]
Description=instance to serve tftbuild
After=network.target

[Service]
User=root
Group=www-data

ExecStart=/var/www/tftbuild.co/tftbuild.co

[Install]
WantedBy=multi-user.target
```

### Ports

The application redirects from port `80` to port `5000` in production. this is due to errors that were preventing the application from running natively on port `80`. 

This redirection is done with the following command:

`sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 5000`

This command (minus the sudo) was also added to `/etc/rc.local` to add the redirect on machine restart.

In development, the front-end can be run simultaneously on port `3000` by simply running `npm start` in the `client` directory.

For more information, view [this link](https://stackoverflow.com/questions/16573668/best-practices-when-running-node-js-with-port-80-ubuntu-linode).

# Troubleshooting Issue
Problem: Crash (ENOMEM) during `npm install`

Solution: [Enable swap space](https://stackoverflow.com/questions/26193654/node-js-catch-enomem-error-thrown-after-spawn)

1) `sudo fallocate -l 4G /swapfile` Create a 4G swapfile
2) `sudo chmod 600 /swapfile` Secure the swapfile by restricting access to root
3) `sudo mkswap /swapfile` Mark the swapfile as a swap space 
4) `sudo swapon /swapfile` Enable the swap
5) `echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab` Persist swapfile over reboots

# Endpoints

Champions: https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json

Items: https://solomid-resources.s3.amazonaws.com/blitz/tft/data/items.json