import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import logger1 from './../middlewares/logger1'
import logger2 from './../middlewares/logger2'
import thunk from './../middlewares/thunk'

const store = applyMiddleware(logger1,logger2,thunk)(createStore)(reducer)

export default store


//applyMiddleware(logger1,logger2)(createStore)(reducer)
//执行 dispach(increment)
/* 打印结果：
logger1 before action= {type: "INCREMENT"}
logger2 before action= {type: "INCREMENT"}
logger2 after action= {type: "INCREMENT"}
logger1 after action= {type: "INCREMENT"}
*/

//logger1, logger2执行顺序：
/*
1. logger1 next(action) 之前的代码
2. logger1 next(action) 把action传给下个middleware 即logger2
3. logger2 next(action) 之前的代码
4. logger2 next(action) 把action传给store.dispatch, 即执行store.dispatch(action)
5. logger2 next(action) 之后的代码
6. logger1 next(action) 之后的代码
*/

//applyMiddleware(logger1,logger2,thunk)(createStore)(reducer)
//执行 dispach(asyncIncrement)
//执行结果见图片：log.png
