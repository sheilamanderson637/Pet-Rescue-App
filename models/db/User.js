var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// SCHEMA FOR USER PROFILES
var UserSchema = new Schema({
  // firstName: a trimmed, required string
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  // lastName: a trimmed, required string
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  // username: a trimmed, required string
  // username: {
  //   type: String,
  //   trim: true,
  //   required: "Username is Required"
  // },
  // password: a trimmed, required string that must be more than 6 chars
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  // email: a string that must match an email format and must be unique in the collection
  email: {
    type: String,
    unique: true,
    required: "Email is required.",
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  // zip: 
  zip: {
    type: Number,
    required: "Zip code is required.",
    validate: [
      function(input) {
        return input.length = 5;
      },
      "Enter your 5-digit zip code."
    ]
  },
  // userCreated: the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  // lastUpdated: a date type entry
  lastUpdated: { type: Date },
  // fullName: a string type entry
  fullName: String,
  // savedSearches: an array containing user's questionnaire responses 
  // to dog/cat questionnaire (can store multiple of each)
  savedSearches: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Search model
    ref: "UserSearch"
  }],
  // savedPets: an array containing pets user has chosen to save
  savedPets: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Search model
    ref: "Pet"
  }],
});


/* Custom Methods */

// Our getFullName method
UserSchema.methods.setFullName = function() {
  // Concatenate the user's first and last name, save it to this
  // Note: firstName and lastName have already been trimmed, so no need for extra string manipulation
  this.fullName = this.firstName + " " + this.lastName;
  // Return the full name
  return this.fullName;
};

// Our lastUpdatedDate method
UserSchema.methods.lastUpdatedDate = function() {
  // Make lastUpdatedDate the current date
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

// Use the above schema to make the User model
var User = mongoose.model("User", UserSchema);

// Export the model so the server can use it
module.exports = User;


