const { Sequelize } = require("sequelize");
const factoryDogs = require("./model_dogs");
const factoryTemperaments = require("./model_temperaments");
const { DB_USER, DB_HOST, DB_PASSWORD } = require("../utils/config");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const Dog = factoryDogs(sequelize);
const Temperament = factoryTemperaments(sequelize);

Dog.belongsToMany(Temperament, { through: "dog_temperament" });
Temperament.belongsToMany(Dog, { through: "dog_temperament" });

module.exports = {
  db: sequelize,
  Dog,
  Temperament,
};
