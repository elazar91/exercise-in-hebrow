require('../db')
const LangModel = require('../models/LangModel')

async function create(data) {
    return await LangModel.create(data)
}

async function read(filter = {}, projection) {
    return await LangModel.find(filter, projection)
}

async function update(_id, data) {
    return await LangModel.findByIdAndUpdate(
        _id,
        data,
        { new: true, runValidators: true }
    )
}

module.exports = {
    create,
    read,
    update
}