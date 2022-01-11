const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({ //1. Defining the Task model (what makes up a task)
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

}, {
    timestamps: true // object to generate timestamps
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task