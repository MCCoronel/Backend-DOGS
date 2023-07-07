const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minHeight: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 100 },
        allowNull: false,
      },
      maxHeight: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 100 },
        allowNull: false,
      },
      minWeight: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 100 },
        allowNull: false,
      },
      maxWeight: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 100 },
        allowNull: false,
      },
      minLifeSpan: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 20 },
        allowNull: false,
      },
      maxLifeSpan: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 20 },
        allowNull: false,
      },
      breed_group: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bred_for: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      api_db: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
