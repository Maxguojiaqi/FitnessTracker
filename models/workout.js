const {Schema} = require('mongoose')
const mongoose = require('mongoose')

const workoutSchema = new Schema({
    day: {type: Date, default: Date.now}, 
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
    // totalDuration : Number
})


// workoutSchema.methods.setTotalDuration = function () {
//     this.populate('exercises', function(err, workOutObj) {
//         if (err) console.log(err)
//         else {
//             let sum = 0
//             workOutObj.exercises.forEach(exercise => {
//                 sum += exercise.duration
//             });
//             console.log(sum)
//             this.totalDuration = sum
//             return this
//         }
//       });
// }
  

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout