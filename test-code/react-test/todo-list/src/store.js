import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reducer as todosReducer} from './todos'
import {reducer as filterReducer} from './filter'
import LogMiddleware from './logMiddleware'

//react-addons-perf无法使用： https://stackoverflow.com/questions/46578145/module-not-found-cant-resolve-react-dom-lib-reactperf-in-node-modules-reac
//Profiling Components with the Chrome Performance Tab: https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab

const win = window

const middlewares = [LogMiddleware]

if(process.env.NODE_ENV !== 'production'){
  middlewares.push(require('redux-immutable-state-invariant').default()) //default(): http://blog.csdn.net/u011102843/article/details/73692671
}

const storeEnHancers = compose(
  applyMiddleware(...middlewares),                                    //返回新的store创建函数， （createStore） => {...store, dispatch}
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)

const reducers = combineReducers({
  todos: todosReducer,
  filter: filterReducer
})

const store = createStore(reducers, {}, storeEnHancers)  //storeEnHancers(createStore)(reducer, {})

// or
// const store = applyMiddleware(...middlewares)(createStore)(reducers)


export default store
