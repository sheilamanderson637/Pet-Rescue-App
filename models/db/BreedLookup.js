const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA FOR STORING THE BREED LOOKUP DOCUMENTS
const BreedLookupSchema = new Schema({
  // breedId will be the concatenated values of respondent's survey questions
  breedId: String,
  breed: String,
});

const BreedLookup = mongoose.model("BreedLookup", BreedLookupSchema);

module.exports = BreedLookup;