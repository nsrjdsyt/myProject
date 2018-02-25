import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reducer as todosReducer} from './todos'
import {reducer as filterReducer} from './filter'

//react-addons-perf无法使用： https://stackoverflow.com/questions/46578145/module-not-found-cant-resolve-react-dom-lib-reactperf-in-node-modules-reac

const win = window

const middlewares = []

if(process.env.NODE_ENV !== 'production'){
  middlewares.push(require('redux-immutable-state-invariant').default()) //default(): http://blog.csdn.net/u011102843/article/details/73692671
}

const storeEnHancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)

const reducers = combineReducers({
  todos: todosReducer,
  filter: filterReducer
})

const store = createStore(reducers, {}, storeEnHancers)

export default store
