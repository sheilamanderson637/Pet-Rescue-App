const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA FOR STORING THE BREED LOOKUP DOCUMENTS
const BreedSchema = new Schema({
  // breedId will be the concatenated values of respondent's survey questions
  breedId: String,
  breed: String,
});

const Breed = mongoose.model("Search", BreedSchema);

module.exports = Breed;