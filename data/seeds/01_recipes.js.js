exports.seed = async function(knex) {
	await knex("recipes").insert([
		{ name: "white chicken chili" },
		{ name: "black bean and sweet potato chili" },
		{ name: "stir fry" }
	]);
};
