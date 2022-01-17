const ExerciseController = require('../DL/controllers/ExerciseController')

async function create(data) {
    return ExerciseController.create(data)
}

async function read(_id) {
    let filter =  _id ? { _id } : {}
    return await ExerciseController.read(filter)
}

async function readByLang(prog_lang) {
    let filter =  prog_lang ? { prog_lang } : {}
    return await ExerciseController.read(filter)
}


async function update(id, data) {
    data.lastSeen = Date.now()
    return ExerciseController.update(id, data)
}

module.exports = {
    ...ExerciseController,
    create,
    read,
    update,
    readByLang

}