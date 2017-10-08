const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA FOR STORING PET QUESTIONNAIRES
//Could be used to scale the app to more pet types in the future.
const QuestionnaireSchema = new Schema({
  petType: { type: String },
  items: [{
    // Store ObjectIds in the array
    question: String,
    // The ObjectIds will refer to the ids in the Search model
    answers: { type: Array }
  }],
});

const Questionnaire = mongoose.model("Questionnaire", QuestionnaireSchema);

module.exports = Questionnaire;