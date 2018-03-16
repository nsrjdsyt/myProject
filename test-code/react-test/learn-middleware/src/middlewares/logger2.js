export default store => next => action => {
  console.log("logger2 before action=", action)
  next(action)
  console.log("logger2 after action=", action)
}
