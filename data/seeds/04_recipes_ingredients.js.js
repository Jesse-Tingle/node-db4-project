exports.seed = async function(knex) {
	await knex("recipes_ingredients").insert([
		{ recipes_id: 1, ingredients_id: 1, quantity: 2, unit_of_measure: "cans" },
		{ recipes_id: 1, ingredients_id: 2, quantity: 2, unit_of_measure: "cans" },
		{ recipes_id: 1, ingredients_id: 3, quantity: 2, unit_of_measure: "cans" },
		{
			recipes_id: 1,
			ingredients_id: 4,
			quantity: 1,
			unit_of_measure: "teaspoon"
		},
		{
			recipes_id: 1,
			ingredients_id: 5,
			quantity: 1,
			unit_of_measure: "teaspoon"
		},
		{
			recipes_id: 2,
			ingredients_id: 6,
			quantity: 1,
			unit_of_measure: "diced onion"
		},
		{
			recipes_id: 2,
			ingredients_id: 7,
			quantity: 4,
			unit_of_measure: "chopped sweet potatoes"
		},
		{
			recipes_id: 2,
			ingredients_id: 8,
			quantity: 3,
			unit_of_measure: "cloves"
		},
		{
			recipes_id: 2,
			ingredients_id: 9,
			quantity: 1,
			unit_of_measure: "until veggies covered"
		},
		{
			recipes_id: 2,
			ingredients_id: 10,
			quantity: 2,
			unit_of_measure: "cans"
		},
		{
			recipes_id: 2,
			ingredients_id: 11,
			quantity: 2,
			unit_of_measure: "cans"
		},
		{
			recipes_id: 2,
			ingredients_id: 12,
			quantity: 1,
			unit_of_measure: "fresh bunch"
		},
		{
			recipes_id: 2,
			ingredients_id: 5,
			quantity: 1,
			unit_of_measure: "tablespoon"
		},
		{
			recipes_id: 2,
			ingredients_id: 4,
			quantity: 1,
			unit_of_measure: "tablespoon"
		}
	]);
};
