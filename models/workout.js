const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter type of exercise...",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter name of exercise ...",
      },
      duration: {
        type: Number,
        required: "Enter duration of exercise...",
        default: 1,
      },
      weight: {
        type: Number,
        required: "Enter amount of weight...",
      },
      reps: {
        type: Number,
        required: "Enter number of reps...",
      },
      sets: {
        type: Number,
        required: "Enter number of sets...",
      },
      distance: {
        type: Number,
        default: 0,
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
