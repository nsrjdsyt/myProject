import {combineReducers} from 'redux'
import {RECEIVE_PRODUCTS, ADD_TO_CART} from '../constants'

function products(state,action){
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                inventory: state.inventory-1
            }
        default:
            return state
    }
}

function byId(state,action){
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce(function(obj, product){
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            const {productId} = action
            if(productId){
                return {
                    ...state,
                    [productId]:products(state[productId], action)
                }
            }
            return state
    }
}

function visibleIds(state=[], acttion){
    switch(acttion.type){
        case RECEIVE_PRODUCTS:
            return action.products.map(product => product.id)
        default:
            return state
    }
}
