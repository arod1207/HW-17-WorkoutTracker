const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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

const Workout = mongoose.model("Workout", userSchema);

module.exports = Workout;
