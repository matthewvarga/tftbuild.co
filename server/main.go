package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	// Set the router as the default one shipped with Gin
	// set to releasemode from debugMode
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	// Serve frontend static files
	// for local development, set build files location to ../static/build
	router.Use(static.Serve("/", static.LocalFile("/go/bin/dist", true)))

	// Start and run the server
	router.Run(":8080")
}
