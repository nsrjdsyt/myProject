import Reducer from './Reducer.js'
import {createStore} from 'redux'

const initValues = {
  First: 1,
  Second: 2,
  Third: 3
}
const store = createStore(Reducer, initValues)

export default store
