const {Schema} = require('mongoose')
const mongoose = require('mongoose')

const workoutSchema = new Schema({
    day:
    {
        type: Date,
        default: Date
    }, 
    exercise:
    [
    {
        type: {
            type: String,
            required: 'Type required'
        },
        name: {
            type: String,
            trim: true,
            required: 'Enter a name for transaction'
        },
        duration : {
            type: Number,
            required: 'Workout duration required'
        },
        weight: {
            type: Number,
            required: false
        },
        sets: {
            type: Number,
            required: false
        },
        reps: {
            type: Number,
            required: false
        },
        distance : {
            type: Number,
            required: false
        }
    }
    ]
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout