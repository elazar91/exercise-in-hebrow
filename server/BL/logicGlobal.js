
const 
ExerciseLogic = require('../BL/ExerciseLogic'),
UserLogic = require('../BL/UserLogic'),
LangLogic = require('../BL/LangLogic')



async function getSingleExercise(_id){

const exercise = await ExerciseLogic.read(_id)
let c_id = exercise[0].creator_id
const user = await UserLogic.read({ _id : exercise[0].creator_id})

return {
    exercise,
    user
}
}

module.exports = {
getSingleExercise
}