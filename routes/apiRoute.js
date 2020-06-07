const router = require("express").Router();
const Workout = require("../models/workout.js");
const { ObjectId } = require('mongodb')


router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", async (req, res) => {
    let workoutId = req.params.id
    console.log(workoutId)
    console.log(typeof(workoutId))
    console.log(req.body)
    exercisesObj = {exercises: [req.body]}
    console.log(exercisesObj)
    try {
      let updateResult = await Workout.update(
        { _id: ObjectId(workoutId)},
        { $set: exercisesObj }
      )
      console.log(updateResult)
      // const workout = await Workout.findOne({ _id: ObjectId(workoutId) })
      // res.json({ data: workout })
      res.status(201)
    } catch (error) {
      console.log(error)
    }
  
  });

//   router.post("/api/transaction", (req, res) => {
//     Transaction.find({})
//       .sort({ date: -1 })
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });


module.exports = router;