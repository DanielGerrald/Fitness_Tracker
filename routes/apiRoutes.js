const app = require("express").Router();
const Workout = require("../models/workouts.js");

// Create a new workout
app.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
    console.log("Creating workout")
});

 // Read last workout
 app.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
    console.log("Reading workout")
});

// Add an exercise
app.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: {exercises: req.body}},
    { new: true}
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
    console.log("Adding an exercise")
});



app.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(data=> {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = app;
