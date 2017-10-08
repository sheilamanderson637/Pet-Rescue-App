const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSearchSchema = new Schema({
  dogSex: { type: String },
  dogAge: { type: String },
  dogSize: { type: String },
  dogHair: { type: String },
  dogEnergy: { type: String },
});

const UserSearch = mongoose.model("UserSearch", UserSearchSchema);

module.exports = UserSearch;