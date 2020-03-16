exports.seed = async function(knex) {
	await knex("instructions").insert([
		{
			name: "turn on crock pot",
			description: "turn crock pot on high",
			step_number: 1,
			recipes_id: 1
		},
		{
			name: "pour in all ingredients",
			description:
				"pour in beans, cream of chicken, chicken, chicken broth, chili powder, and cummin",
			step_number: 2,
			recipes_id: 1
		},
		{
			name: "cook",
			description: "cook in crock pot for 2 hours and stir often",
			step_number: 3,
			recipes_id: 1
		},
		{
			name: "chop veggies",
			description: "cut onions and sweet potatoes",
			step_number: 1,
			recipes_id: 2
		},
		{
			name: "simmer onions",
			description: "simmer onions in a dutch oven until soft",
			step_number: 2,
			recipes_id: 2
		},
		{
			name: "add sweet potatoes",
			description: "add sweet potatoes and stir for 30 secs",
			step_number: 3,
			recipes_id: 2
		},
		{
			name: "add spices",
			description: "add cummin, chili powder, garlic",
			step_number: 4,
			recipes_id: 2
		},
		{
			name: "stir",
			description: "make sure spices are coated evenly",
			step_number: 5,
			recipes_id: 2
		},
		{
			name: "add water",
			description: "add enough water to cover veggies",
			step_number: 6,
			recipes_id: 2
		},
		{
			name: "simmer",
			description: "simmer covered until sweet potatoes are soft",
			step_number: 7,
			recipes_id: 2
		},
		{
			name: "black beans and tomatoes",
			description: "add two cans of black beans and two cans of diced tomatoes",
			step_number: 8,
			recipes_id: 2
		},
		{
			name: "garnish",
			description: "garnish with cilantro if desired and serve",
			step_number: 9,
			recipes_id: 2
		}
	]);
};
