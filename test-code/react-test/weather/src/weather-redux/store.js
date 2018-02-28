import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

const middlewares = [thunkMiddleware]

const storeEnHancers = compose(applyMiddleware(...middlewares))

const store = createStore(reducer, {}, storeEnHancers)

export default store
