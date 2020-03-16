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

function getInstructions(recipes_id) {
	return db("instructions")
		.where("recipes_id", recipes_id)
		.select("step_number", "name", "description")
		.orderBy("step_number");
}

module.exports = {
	getShoppingList,
	getInstructions
};
