const { APIKey } = process.env;
const axios = require ('axios');
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${APIKey}`;
//const getDogsAPI = require('./getDogsAPI')


const getDogsByID = async (req,res) => {
    const {id} = req.params
    try {
        const API = await axios(URL);
  
        if (!API || !API.data) {
          throw new Error("Can't get dog information");
        }

        let dogsByIDRaza = await API.data.find( dog => {
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



module.exports = getDogsByID;