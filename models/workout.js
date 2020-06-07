const {Schema} = require('mongoose')
const mongoose = require('mongoose')

const workoutSchema = new Schema({
    day: {type: Date, default: Date.now}, 
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout