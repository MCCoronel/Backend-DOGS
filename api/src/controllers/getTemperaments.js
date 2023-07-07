const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const { Temperament } = require("../db");

const getTemperaments = async (req, res) => {
  try {
    const temperamentsList = await Temperament.findAll();

    if (temperamentsList.length === 0) {
      const API = await axios(URL);

      if (!API || !API.data) {
        throw new Error("Can't get dog information");
      }

      const allTemperaments = new Set();

      API.data.forEach((dog) => {
        if (dog.temperament) {
          const temps = dog.temperament.split(", ");
          temps.forEach((temp) => allTemperaments.add(temp));
        }
      });

      const AllFields = Array.from(allTemperaments).map((tempName) => {
        return {
          name: tempName,
        };
      });

      const registers = await Temperament.bulkCreate(AllFields);

      return res.status(200).json(registers);
    }

    return res.status(200).json(temperamentsList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTemperaments;
