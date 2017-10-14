let store = {}

module.exports.get = () => {
  return store
}

module.exports.add = (newValues) => {
  Object.assign(store, newValues)
}