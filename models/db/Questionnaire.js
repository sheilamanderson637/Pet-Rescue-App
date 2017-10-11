const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA FOR STORING PET QUESTIONNAIRES
//Could be used to scale the app to more pet types in the future.
const QuestionnaireSchema = new Schema({
  petType: { type: String },
  items: [{
    // Store the question text string
    question: String,
    // Store the array of answer choices
    answers: { type: Array }
  }],
});

const Questionnaire = mongoose.model("Questionnaire", QuestionnaireSchema);

module.exports = Questionnaire;