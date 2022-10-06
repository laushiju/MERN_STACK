const express = require("express");

const router = express.Router();

const {
  createWorkout,
  getAllWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutcontrollers");

router.get("/", getAllWorkout);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);
// router.get("/hello", () => {});

module.exports = router;
