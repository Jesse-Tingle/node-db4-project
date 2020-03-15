const express = require("express");

const RecipesRouter = require("./recipes/recipes-router.js");

const server = express();

server.use(express.json());
server.use("/api/recipes", RecipesRouter);

server.get("/", (req, res) => {
	res.send(`<h2>DB 4 Project!</h2>`);
});

module.exports = server;
