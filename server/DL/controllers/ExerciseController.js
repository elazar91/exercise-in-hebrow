require('../db')
const ExerciseModel = require('../models/ExerciseModel')

async function create(data) {
    return await ExerciseModel.create(data)
}

async function read(filter = {}, projection) {
    return await ExerciseModel.find(filter, projection)
}

async function update(_id, data) {
    return await ExerciseModel.findByIdAndUpdate(
        _id,
        data,
        { new: true, runValidators: true }
    )
}

async function remove(_id) {
    return ExerciseModel.findByIdAndUpdate(_id, { status: "deleted" })
}

module.exports = {
    create,
    read,
    update,
    remove
}