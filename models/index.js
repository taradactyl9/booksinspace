const dbConfig = require("../config/config.json");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "postgres", //dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: 5, //dbConfig.pool.max,
    min: 0, //dbConfig.pool.min,
    acquire: 30000, //dbConfig.pool.acquire,
    idle: 10000 //dbConfig.pool.idle
  }
});


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.booksdb = require("../models")(sequelize, Sequelize);
console.log(sequelize.authenticate());

db.books = require("../models/books.js")(sequelize, Sequelize);
db.reviews = require("../models/reviews.js")(sequelize, Sequelize);
db.shelves = require("../models/shelves.js")(sequelize, Sequelize);
db.users = require("../models/users.js")(sequelize, Sequelize);
db.wanttoread = require("../models/wanttoread.js")(sequelize, Sequelize);

module.exports = db;