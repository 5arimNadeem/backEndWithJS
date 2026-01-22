const mongoose = require("mongoose")

// schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    company: {
        type: String,
    }
}, { timestamps: true })

const User = mongoose.model('user', userSchema)

module.exports = User;