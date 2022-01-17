module.exports = (searchObj, exerciseArr) => {
  const filterBySInput = searchObj.input ? 
  exerciseArr.filter(exer => exer.title.toLowerCase().includes(searchObj.input.toLowerCase())) :
  exerciseArr

  const filterByDifficulty = searchObj.difficulty ? 
  filterBySInput.filter(exer => exer.difficulty === searchObj.difficulty) :
  filterBySInput

  const filterByType = searchObj.type ?
  filterByDifficulty.filter(exer => exer.exec_type === searchObj.type) :
  filterByDifficulty

  return filterByType
}