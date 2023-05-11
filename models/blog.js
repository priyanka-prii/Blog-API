const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        min: 4,
    },
    desc: {
        type: String,
        required: true,
        min: 12,
    },

}, {timestamps: true})

module.exports = mongoose.model("   ", BlogSchema)