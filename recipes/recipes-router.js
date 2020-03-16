const express = require("express");

const Recipes = require("./recipes-model.js");
const Ingredients = require("../ingredients/ingredients-model.js");
// const IngredientsRouter = require("../ingredients/ingredients-router.js");

const router = express.Router();

// router.use("/:id/i");
router.get("/", (req, res) => {
	Recipes.getRecipes()
		.then(recipes => {
			res.json(recipes);
		})
		.catch(err => {
			err, res.status(500).json({ message: "Failed to get recipes" });
		});
});

router.get("/:id/shoppingList", (req, res) => {
	const { id } = req.params;
	console.log("I'm here", id);
	Ingredients.getShoppingList(id)
		.then(list => {
			if (list) {
				res.json(list);
			} else {
				res.json(404).json({ message: "Failed to get ingredients list" });
			}
		})
		.catch(err => {
			err, res.status(500).json({ message: "Failed to get list" });
		});
});

module.exports = router;
