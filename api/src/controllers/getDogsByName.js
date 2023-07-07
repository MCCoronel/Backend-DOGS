const { APIKey } = process.env;
const axios = require ('axios');
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${APIKey}`;
const getAllDogs = require('./getAllDogs')
//const getDogsAPI = require('./getDogsAPI')


const getDogsName = async (req,res) => {
    const name = req.query.name;
    try {
        const allDogs = await getAllDogs();

        let dogsName = await allDogs.filter( dog => {
          return dog.name.toLowerCase().includes(name.toLowerCase())
        })

        if(dogsName.length) res.status(200).json(dogsName)
        else {
          throw new Error(`There is no dog of the ${name} breed `)
      }      

    } catch (error) {
      //throw new Error(error);
      res.status(400).send(error.message)
    }
}



module.exports = getDogsName;