const db = require("../data/config.js");

function getShoppingList(recipes_id) {
	return db("recipes_ingredients")
		.join("ingredients", "ingredients.id", "recipes_ingredients.ingredients_id")
		.where("recipes_ingredients.recipes_id", recipes_id)
		.select(
			"ingredients.name",
			"recipes_ingredients.quantity",
			"recipes_ingredients.unit_of_measure"
		);
}

module.exports = {
	getShoppingList
};
