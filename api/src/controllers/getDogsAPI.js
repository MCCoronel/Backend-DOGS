
const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds'
const getDogsName = require('./getDogsByName')

const getDogsAPI = async (req, res) => {
  
  try {

    const API = await axios(URL);
  
    if (!API || !API.data) {
      throw new Error("Can't get dog information");
    }    

    
    
    const allDogs = API.data.map((dog) => ({
      id: dog.id,
      name: dog.name,
      image: dog.image,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperament: dog.temperament,
      breed_group: dog.breed_group,
    }));

    res.status(200).json(allDogs);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = getDogsAPI;
