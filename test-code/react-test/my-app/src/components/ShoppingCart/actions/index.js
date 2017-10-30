import * as types from '../constants'
import shop from '../api/shop'

export function receiveProducts(products){
    return {
        type: types.RECEIVE_PRODUCTS,
        products
    }
}

export function getAllproducts(){
    return function(dispatch){
        shop.getProducts(function(products){
            dispatch(receiveProducts(products))
        })
    }
}

function addToCartUnSafe(productId){
    return {
        type: types.ADD_TO_CART,
        productId
    }
}
export function addToCart(productId){
    return function(dispatch, getState){
        if(getState().products.byId[productId].inventory> 0){
            dispatch(addToCartUnSafe(productId))
        }
    }
}

export function checkout(products){
    return function(dispatch,getState){
        const {cart} = getState()

        dispatch({
            type: types.CHECKOUT_REQUEST
        })

        shop.buyProducts(products, function(){
            dispatch({
                type: types.CHECKOUT_SUCCESS,
                cart
            })
        })
    }
}
