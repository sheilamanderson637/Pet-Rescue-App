const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA FOR STORING THE BREED DATA FROM WOLFRAM API
const BreedFactSchema = new Schema({
  surveyBreedId: Array,
  animalType: String,
  breedName: String,
  breedDescription: String,
  breedTemperament: String,
  breedCharacteristics: String,
  breedHistory: String
});

const BreedFact = mongoose.model("BreedFact", BreedFactSchema);

module.exports = BreedFact;