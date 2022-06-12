const mongoose = require('mongoose');

const completedActivitySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    activity: String,
    type: String,
    participants: Number,
    price: Number,
    key: String,
    accessibility: Number
})

module.exports = mongoose.model('completedActivities', completedActivitySchema);