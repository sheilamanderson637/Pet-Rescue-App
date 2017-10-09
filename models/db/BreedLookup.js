const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA FOR STORING THE BREED LOOKUP DOCUMENTS
const BreedLookupSchema = new Schema({
  // breedId will be the concatenated values of respondent's survey questions
  breedId: String,
  breed: String,
  // savedPets: an array containing pets user has chosen to save
  breedDetails: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the BreedInfo model
    ref: "BreedInfo"
  }],  
});

const BreedLookup = mongoose.model("BreedLookup", BreedLookupSchema);

module.exports = BreedLookup;