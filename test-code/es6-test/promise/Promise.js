//如果浏览器不支持Promise特性，将用简易的promise代替(IE11-都不支持ES6 Promise)
function createPromise() {
  var newPromise = function(fn) {
    var promise = this;
    //状态机的状态
    var PROMISESTATE = {
      PENDING: 0,
      FULFILLED: 1,
      REJECTED: 2
    };
    //存储当前变量的回调函数和标记对象为promise
    promise._fullCalll = [],
    promise._rejCall = [];
    promise._name = "promise";
    //执行过程中的状态变化(初始化状态为默认状态)
    var _state = PROMISESTATE.PENDING;
    //回调函数的参数
    var _value = undefined;

    //状态变更
    function setState(stateT, valueT) {
      var promise = this;
      _state = stateT;
      _value = valueT;
      handleFun.call(promise); //传递作用域，并且执行回调函数
    };

    //根据状态处理回调
    function handleFun() {
      var promise = this,
        isThen;

      if (_state === PROMISESTATE.FULFILLED && typeof promise._fullCalll[0] === 'function') {
        isThen = promise._fullCalll[0](_value);
      };
      if (_state === PROMISESTATE.REJECTED && typeof promise._rejCall[0] === 'function') {
        isThen = promise._rejCall[0](_value);
      };
      //对于是否可以继续进行then做判断
      //  1. 不可then的，直接return结束（条件：无返回值、返回值不是promise对象的）
      //  2. 对于可以then的，将then的回调进行处理，然后对象之间传递。
      if (isThen === undefined || !(typeof isThen === 'object' && isThen._name === 'promise'))
        return;

      promise._fullCalll.shift();
      promise._rejCall.shift(); //清除当前对象使用过的对调
      isThen._fullCalll = promise._fullCalll;
      isThen._rejCall = promise._rejCall; //将剩下的回调传递到下一个对象
    };

    //promimse入口
    function doResolve(fn) {
      var promise = this;
      fn(function(param) {
        setState.call(promise, PROMISESTATE.FULFILLED, param);
      }, function(reason) {
        setState.call(promise, PROMISESTATE.REJECTED, reason);
      });
    };

    //函数then，处理回调，返回对象保证链式调用
    this.then = function(onFulfilled, onRejected) {
      this._fullCalll.push(onFulfilled);
      this._rejCall.push(onRejected);
      return this;
    }

    doResolve.call(promise, fn);
  };
  window.Promise = newPromise;
},
