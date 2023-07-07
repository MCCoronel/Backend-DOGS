const getDogsDB = require('../controllers/getDogsDB');
const axios = require('axios');
const { APIKey } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${APIKey}`;


const getAllDogs = async () => {
  
    const apiResponse = await axios.get(URL);

    const dogsAPI = apiResponse.data.map((dog) => ({
      id: dog.id,
      name: dog.name,
      image: dog.image,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperament: dog.temperament,
      breed_group: dog.breed_group,
    }));

    const dogsDB = await getDogsDB(); // Obtener datos de la base de datos

    const allDogs = [...dogsAPI, ...dogsDB]; // Combinar los datos de la API y la base de datos

    //console.log(allDogs);

    return allDogs;

  
};

module.exports = getAllDogs;