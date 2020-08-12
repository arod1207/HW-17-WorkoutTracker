const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSeed = new Schema({
  day: { type: Date, default: Date.now },
  exercise: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

module.exports = mongoose.model("Workout", workoutSeed);
