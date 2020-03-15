const db = require("../data/config.js");

function getRecipes() {
	return db("recipes");
}

module.exports = {
	getRecipes
};
