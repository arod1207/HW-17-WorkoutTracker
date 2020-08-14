const Workout = require("../models/workout");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find({})
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // app.post("/api/workouts", ({ body }, res) => {
  //   Workout.create({ $push: { exercises: body } })
  //     .then((data) => {
  //       console.log(data);
  //       res.json(data);
  //     })
  //     .catch((err) => {
  //       res.status(400).json(err);
  //     });
  // });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts/range", (req, res) => {
    Workout.create(req.body, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });
};
