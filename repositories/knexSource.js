const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'lab1',
      insecureAuth : true
    }
  });

  module.exports = knex;