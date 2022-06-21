const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  },
  parent_name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  contact_info: {
    type: String,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
