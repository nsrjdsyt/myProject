export default store => next => action => {
  console.log("thunk before action", action, store.getState())

  typeof action === 'function' ? action(store.dispatch) : next(action)

  console.log("thunk after action", action, store.getState())
}
