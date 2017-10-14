const dataStore = require('./DataStore')

let updatePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
}

module.exports.update = () => {
  dataStore.add({
    updateCat: updatePromise()
  })
}