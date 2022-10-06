const express = require("express");
const workoutRoutes = require("./routes/workout");
const mongoose = require("mongoose");
require("dotenv").config();
//console.log(process.env);
const app = express();

// app.get("/", function (req, res) {
//   res.send({ message: "Hello World" });
app.use(express.json());
//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);
mongoose.connect(process.env.MONGO_URI);
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!!`);
});
//npm i express
//npm i dotenv
