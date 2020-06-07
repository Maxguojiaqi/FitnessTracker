let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});




function createSeed () {
  let workoutSeed = [
    {
      day: new Date().setDate(new Date().getDate()-10),
      exercises: [
        new db.Exercise({
          type: "resistance",
          name: "Bicep Curl",
          duration: 20,
          weight: 100,
          reps: 10,
          sets: 4
        })
      ]
    }]

  return workoutSeed
}
let records = createSeed()

console.log(records)

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(records))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
