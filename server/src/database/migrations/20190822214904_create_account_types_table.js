
exports.up = (knex) => {
  return knex.schema.createTable('account_types', (table) => {
    table.increments();
    table.string('name');
    table.string('normal');
    table.string('root_type');
    table.boolean('balance_sheet');
    table.boolean('income_sheet');
  }).then(() => {
    return knex.seed.run({
      specific: 'seed_account_types.js',
    });
  });
};

exports.down = (knex) => knex.schema.dropTableIfExists('account_types');
