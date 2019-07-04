tftbuild.co

# Server Dependencies

The only `Go` dependency is `Gin`. To install, use the following:
1) `go get -u github.com/gin-gonic/gin`
2) `go get -u github.com/gin-gonic/contrib/static`

# Deployment

1) stop server for update: `sudo systemctl stop tftbuild`
2) pull from master on server: `git pull`
3) build client-side of project: `npm run-script build` from `client` directory
4) build project binary: `GOOS=linux GOARCH=amd64 go build` from project root
5) move binary to propery directory: `mv tftbuild.co /var/www/tftbuild.co/tftbuild.co`
6) bring server up: `sudo systemctl start tftbuild`, `sudo systemctl enable tftbuild`

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

# Troubleshooting Issue
Problem: Crash (ENOMEM) during `npm install`

Solution: [Enable swap space](https://stackoverflow.com/questions/26193654/node-js-catch-enomem-error-thrown-after-spawn)

1) `sudo fallocate -l 4G /swapfile` Create a 4G swapfile
2) `sudo chmod 600 /swapfile` Secure the swapfile by restricting access to root
3) `sudo mkswap /swapfile` Mark the swapfile as a swap space 
4) `sudo swapon /swapfile` Enable the swap
5) `echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab` Persist swapfile over reboots


