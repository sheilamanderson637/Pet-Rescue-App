const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA FOR STORING THE BREED LOOKUP DOCUMENTS
const BreedLookupSchema = new Schema({
  // breedId will be the concatenated values of respondent's survey questions
  breedId: String,
  breed: String,
  // breedDetails: info about the breed brought in from the BreedFact model
  breedDetails: {
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the BreedFact model
    ref: "BreedFact"
  },  
});

const BreedLookup = mongoose.model("BreedLookup", BreedLookupSchema);

module.exports = BreedLookup;