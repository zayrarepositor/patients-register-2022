const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const patientsRoutes = require("./routes/patient");

const app = express();
const PORT = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use("/", patientsRoutes);

//routes
app.get("/", (res, req) => {
  res.setEncoding("welcome");
});

//mongodb connection
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("connected to mongodb"))
  .catch((error) => console.error(error));

app.listen(PORT, () => console.log("server mode on port ", PORT));
