const { Router } = require('express');
const dogsRoutes = Router();
const getDogsAPI = require('../controllers/getDogsAPI');
const getDogsByName = require('../controllers/getDogsByName');
const getDogsByID = require('../controllers/getDogsByID');
const postDog = require('../controllers/PostDogs');
const getTemperaments = require('../controllers/getTemperaments')
const {Temperament} = require('../db');
// const { APIKey } = process.env;
// const axios = require ('axios');
// const URL = `https://api.thedogapi.com/v1/breeds?api_key=${APIKey}`;


//dogs.use(express.json())

dogsRoutes.get('/', async (req, res) => {
    const name = req.query.name;
    try {
      if (name) {
        const dogsName = await getDogsByName(req, res);
        res.status(200).json(dogsName);
      } else {
        const allDogs = await getDogsAPI(req, res);
        res.status(200).json(allDogs);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  dogsRoutes.get("/:id" , getDogsByID);

  dogsRoutes.post("/" , async(req,res)=>{
    try {
      const { name, image, minHeight, maxHeight, minWeight, maxWeight, minLifeSpan, maxLifeSpan, temperaments} = req.body;

      //getTemperaments();
      
      if(!temperaments.length) {
        throw new Error("The dog must have at least one temperament");
      }

      console.log("skdjfnekj", temperaments);

      const newDog = await postDog(name,image, parseInt(minHeight), parseInt(maxHeight), parseInt(minWeight), parseInt(maxWeight), parseInt(minLifeSpan), parseInt(maxLifeSpan))

      const temperament = await Temperament.findAll({
        where:{
          name: temperaments
        }
      })

      //console.log(temperament);

      await newDog.addTemperament(temperament);

      //console.log(newDog);

      res.status(200).json({message:`${newDog.name} dog with id: ${newDog.id} was created successfully` })

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = dogsRoutes;