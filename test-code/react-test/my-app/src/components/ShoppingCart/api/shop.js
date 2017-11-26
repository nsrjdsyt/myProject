import _products from './products.json'

const TIMEOUT = 100

export default {
    getProducts: function(cb, timeout){
        setTimeout(function(){
            cb(_products)
        }, timeout || TIMEOUT)
    },
    buyProducts: function(payload, cb, timeout){
        setTimeout(function(){
            cb()
        }, timeout|| TIMEOUT)
    }
}
