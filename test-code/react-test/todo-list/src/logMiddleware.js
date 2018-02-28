export default ({dispatch, getState}) => { //打印log的中间件， 不论同步action 还是异步action 都会执行
  return (next) => {
    return (action) => {
      if(typeof action == 'function'){     //针对异步action
        console.log("logMiddleware ", action, getState())
        return action(dispatch)
      }

      //同步action情况， next(action) 交给下个中间件处理
      console.log('logMiddleware ', action, getState());
      return next(action)
    }
  }
}
