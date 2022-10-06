const { default: mongoose } = require("mongoose");
const Workout = require("../models/workoutmodel");

//GET ALL workout
const getAllWorkout = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).send(workouts);
};

//GET a SINGLE workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "no such workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).send({ error: "no such workout" });
  }
  res.status(200).send(workout);
};

//CREATE a new work out
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).send(workout);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

//DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "no such workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).send({ error: "no such workout" });
  }
  res.status(200).send(workout);
};

//UPDATE a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "no such workout" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(404).send({ error: "no such workout" });
  }
  res.status(200).send(workout);
};
module.exports = {
  createWorkout,
  getAllWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
