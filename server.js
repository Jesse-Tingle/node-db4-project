const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
	res.send(`<h2>DB 4 Project!</h2>`);
});

module.exports = server;
