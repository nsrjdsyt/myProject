# Promise.finally

```js
Promise.prototype.finally = function (callback) {
  let P = this.constructor
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
```

```js
new Promise((resolve, reject) => {
  resolve() //or reject()
}).then(r => {
  console.log('then')
}).catch(r => { 
  console.log('catch')
}).then(r => {
  console.log('finally')
})
```


```js
Promise.resolve('foo').
  finally(() => 'bar').
  then(res => console.log(res));
// foo
//Promise {<resolved>: undefined}

Promise.reject(new Error('foo')).
  finally(() => 'bar').
  catch(err => console.log(err.message));
// foo
//Promise {<resolved>: undefined}

//finally()会透传fullfilled的值和rejected错误
```

https://juejin.im/post/5b430f8ae51d45190570bcb3

https://github.com/matthew-andrews/Promise.prototype.finally/blob/master/finally.js

Promise.prototype.finally & Promise.prototype.done小探:
https://github.com/kaola-fed/blog/issues/256