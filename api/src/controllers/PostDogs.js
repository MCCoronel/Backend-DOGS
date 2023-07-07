const getAllDogs = require('./getAllDogs')
const { Dog } = require ('../db')

const postDog = async( name,image,minHeight, maxHeight, minWeight, maxWeight, minLifeSpan, maxLifeSpan)=>{
try {

    const dogApiDB = await getAllDogs();

    const nameDogui = name.toLowerCase();

    const dogSearch = dogApiDB.some((dog) => dog.name.toLowerCase() === nameDogui );

    if(dogSearch) throw new Error (`Dog ${name} already exists in the API or in the Database`)

    if(!minHeight || !maxHeight || !minWeight || !maxWeight || !minLifeSpan || !maxLifeSpan || !name || !image){
        throw new Error ("You must fill in all the required information")
    }  else if (minHeight <= 0 || maxHeight <= 0 || minWeight <= 0 || maxWeight <= 0 || minLifeSpan <= 0 || maxLifeSpan <= 0) {
            throw new Error("The height, weight ow life span value cannot be negative");
        }
        else if (minHeight >= maxHeight) {
            throw new Error("The minimum height is greater than or equal to the maximum height, please validate data");
        }
        else if (minWeight >= maxWeight) {
            throw new Error("The minimum weight is greater than or equal to the maximum weight, please validate data");
        }
        else if (minLifeSpan >= maxLifeSpan) {
            throw new Error("The minimum life span is greater than or equal to the maximum weight, please validate data");
        }
        
        const newDog = await Dog.create({
            name,
            image,
            minHeight,
            maxHeight,
            minWeight,
            maxWeight,
            minLifeSpan,
            maxLifeSpan,
            from: "DataBase"
        });

        return newDog;

    } catch (error) {
        throw new Error(error);
    }
}


module.exports = postDog;