export default store => next => action => {
  console.log("logger1 before action=", action, store.getState())
  next(action)
  console.log("logger1 after action=", action, store.getState()) //得到更新后的state
}
