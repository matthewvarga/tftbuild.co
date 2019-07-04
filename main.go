package main

import (
	"fmt"
	"net/http"

	server "github.com/matthewvarga/tftbuild.co/server"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	// Set the router as the default one shipped with Gin
	// set to releasemode from debugMode
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./client/build", true)))

	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
	}

	// load mongo client
	server.LoadMongoClient()

	fmt.Println("tester")

	// Start and run the server
	router.Run(":5000")
}
