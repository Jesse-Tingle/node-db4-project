exports.up = async function(knex) {
	await knex.schema.createTable("recipe", tbl => {
		tbl.increments("id");
		tbl
			.text("name")
			.notNull()
			.unique();
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("recipe");
};
