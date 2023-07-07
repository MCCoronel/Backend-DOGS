const { APIKey } = process.env;
const axios = require('axios');
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${APIKey}`;
const getAllDogs = require ('./getAllDogs')

const getDogsByID = async (req, res) => {
  const { id } = req.params;
  try {
    const dogs = await getAllDogs();

    const dogsByIDRaza = dogs.filter((dog) => dog.id == id);

    if (dogsByIDRaza.length !== 0) {
      res.status(200).json(dogsByIDRaza);
    } else {

      throw new Error(`ID dog not found, ID = ${id}`);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getDogsByID;