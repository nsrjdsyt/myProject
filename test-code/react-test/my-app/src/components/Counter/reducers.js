import {INCREMENT,DECREMENT} from './actions'

export default function increment(state=0, action){
    switch(action.type){
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}
