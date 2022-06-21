const express = require("express");
const patientSchema = require("../models/patient");

const router = express.Router();

//post patient
router.post("/patient", (req, res) => {
  const patient = patientSchema(req.body);
  patient
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get patient
router.get("/patient", (req, res) => {
  patientSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get patient by id
router.get("/patient/:id", (req, res) => {
  const { id } = req.params;
  patientSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update patient by id
router.put("/patient/:id", (req, res) => {
  const { id } = req.params;
  const {
    name,
    lastname,
    birthday,
    height,
    weight,
    notes,
    parent_name,
    phone,
    email,
    contact_info,
  } = req.body;
  patientSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          lastname,
          birthday,
          height,
          weight,
          notes,
          parent_name,
          phone,
          email,
          contact_info,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete patient by id
router.delete("/patient/:id", (req, res) => {
  const { id } = req.params;
  patientSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
