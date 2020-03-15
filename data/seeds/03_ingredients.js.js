exports.seed = async function(knex) {
	await knex("ingredients").insert([
		{ name: "chicken" },
		{ name: "beans" },
		{ name: "cream of chicken" },
		{ name: "chili powder" },
		{ name: "cummin" },
		{ name: "onions" },
		{ name: "sweet potatoes" },
		{ name: "garlic" },
		{ name: "water" },
		{ name: "canned black beans" },
		{ name: "canned diced tomatoes" },
		{ name: "fresh cilantro" }
	]);
};
