const mongoose = require('mongoose')

const langSchema = new mongoose.Schema({
    prog_lang: {
        type: String,
        required: true,
        unique: true,
    },
    icon: {
        type: String
    },
    tags: [String]
})

module.exports = mongoose.model('lang', langSchema)