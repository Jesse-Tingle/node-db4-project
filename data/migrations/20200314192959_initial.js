exports.up = async function(knex) {
	await knex.schema.createTable("recipes", tbl => {
		tbl.increments("id");
		tbl
			.text("name")
			.notNull()
			.unique();
	});

	await knex.schema.createTable("ingredients", tbl => {
		tbl.increments("id");
		tbl
			.text("name")
			.notNull()
			.unique();
	});

	await knex.schema.createTable("recipes_ingredients", tbl => {
		tbl
			.integer("recipes_id")
			.references("id")
			.inTable("recipes")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		tbl
			.integer("ingredients_id")
			.references("id")
			.inTable("ingredients")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		tbl.real("quantity").notNull();
		tbl.text("unit_of_measure").notNull();
		tbl.primary(["recipes_id", "ingredients_id"]);
	});

	await knex.schema.createTable("instructions", tbl => {
		tbl.increments("id");
		tbl.text("name").notNull();
		tbl.text("description").notNull();
		tbl.integer("step_number").notNull();
		tbl
			.integer("recipes_id")
			.references("id")
			.inTable("recipes");
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("recipes_ingredients");
	await knex.schema.dropTableIfExists("ingredients");
	await knex.schema.dropTableIfExists("instructions");
	await knex.schema.dropTableIfExists("recipes");
};
