const { Dog, Temperament } = require("../models");
const { URL, API_KEY } = require("../utils/config");
const axios = require("axios");

const getAllDogs = async () => {
  let apiData = await axios.get(URL + "?api_key=" + API_KEY);

  const dogsAPI = apiData.data.map((dog) => ({
    id: dog.id,
    name: dog.name,
    image: dog.image.url,
    height: dog.height.metric,
    weight: dog.weight.metric,
    life_span: dog.life_span,
    temperament: dog.temperament?.split(", "),
    breed_group: dog.breed_group,
  }));

  let dbData = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
    },
  });

  return [...dogsAPI, ...dbData];

};

const getDogsByName = async (name) => {
  let apiData = await axios.get(URL + "/search?q=" + name);

  let dbData = await Dog.findAll({
    where: {
      name: name,
    },
  });

  return [...apiData.data, ...dbData];
};

const getDogsByID = async (id) => {
  let auxID = Number(id);

  if (typeof auxID === "number") {
    let apiData = await axios.get(URL);
    let dogFiltered = apiData.data.filter((eachDog) => eachDog.id === auxID);
    return dogFiltered;
  } else {
    let dbData = await Dog.findByPk(id);
    if (!dbData) return [];
    return dbData;
  }
};

const createDog = async (
  name,
  image,
  minHeight,
  maxHeight,
  minWeight,
  maxWeight,
  minLifeSpan,
  maxLifeSpan,
  temperaments
) => {
  let dogs = await getAllDogs();

  let foundDog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  if (foundDog) throw new Error(`The breed ${name} already exists`);

  const newDog = await Dog.create({
    name,
    image,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    minLifeSpan,
    maxLifeSpan,
  });
  
  await newDog.addTemperaments(temperaments);
  
  let dog = await Dog.findByPk(newDog.id);
  let dogTemperaments = await dog.getTemperaments();
  let temperamentsNames = dogTemperaments.map((temperament) => temperament.name);

  return { ...dog.toJSON(), temperaments: temperamentsNames };
};



module.exports = {
  getAllDogs,
  getDogsByName,
  getDogsByID,
  createDog,
};
