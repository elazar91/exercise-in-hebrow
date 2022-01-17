const mongoose = require('mongoose');

const schemaExercise = new mongoose.Schema({
    icon: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'publish', 'deleted'],
        default: 'draft'
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    creator_id: {
        type: mongoose.SchemaTypes.ObjectId
    },
    exec_type: {
        type: String,
        enum: ["short", "rolling", "tutorial"],
        required: true
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true
    },
    tags: [String],
    prog_lang: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    dev_time: {
        type: String
    },
    // {  content*: string , sources:[{name: string, url:string}]  }
    content: {
        content:{
            type:String,
            // required:true
        },
        sources : [{
            name: String,
            url : String
        }]
    },
    solution: String,
})

module.exports = mongoose.model('exercise',schemaExercise)