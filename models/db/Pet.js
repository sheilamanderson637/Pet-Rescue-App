const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA FOR STORING USERS SAVED PETS FROM THE PET FINDER API
const PetSchema = new Schema({

});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;