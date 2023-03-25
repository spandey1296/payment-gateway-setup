"use strict";
const Sequelize = require("sequelize");

let cardplayDb = {
  host: "********************",
  user: "********************",
  password: "*******************",
  database: "*******************",
};

const cardPlayPool = new Sequelize(
  cardplayDb.database,
  cardplayDb.user,
  cardplayDb.password,
  {
    host: cardplayDb.host,
    dialect: "mariadb",
    logging: true,
    dialect: "mariadb",
  }
);

cardPlayPool
  .authenticate()
  .then(() => {
    console.log("Mysql Connection has been established successfully");
  })
  .catch((err) => {
    console.log("Unable to connect to the cardPlayPool database: ", err);
    throw new Error("mysql error: Connection Failure");
  });

module.exports = {
  cardPlayPool,
};
