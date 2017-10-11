const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSearchSchema = new Schema({
  //petType: store the pet type the user selected for the search
  petType: String,
  preferences: [{
    // Store the question id (the id in the html, e.g. dogAge, catAge, etc.)
    questionId: String,
    // Store the value (set in the html) of the user's answer
    userChoice: String
  }],
});

const UserSearch = mongoose.model("UserSearch", UserSearchSchema);

module.exports = UserSearch;