const { Dog } = require('../db')

const getDogsDB= async()=>{
    const DogsDB = await Dog.findAll();
    console.log(DogsDB)
    return DogsDB
}

module.exports = getDogsDB;


