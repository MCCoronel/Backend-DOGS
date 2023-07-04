const { Router } = require('express');
const dogsRoutes = Router();
const getDogsAPI = require('../controllers/getDogsAPI');
const getDogsName = require('../controllers/getDogsByName');
const getDogsByID = require('../controllers/getDogsByID');
// const { APIKey } = process.env;
// const axios = require ('axios');
// const URL = `https://api.thedogapi.com/v1/breeds?api_key=${APIKey}`;


//dogs.use(express.json())

dogsRoutes.get('/', async (req, res) => {
    const name = req.query.name;
    try {
      if (name) {
        const dogsName = await getDogsName(req, res);
      } else {
        const allDogs = await getDogsAPI(req, res);
        res.status(200).json(allDogs);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  dogsRoutes.get("/:id" , getDogsByID)

module.exports = dogsRoutes;