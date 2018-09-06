# 禁止修改js对象

当我们是一个模块或代码库的作者，如果想锁定一些核心库的某些部分，保证任何人不能有意或无意的修改它们，可以使用下面介绍的方法。

- Object.defineProperty()

Object.defineProperty() 可以做到禁止修改和删除对象的属性或方法。

使用数据描述符情况的例子：
```js
let obj = {name: 'tim'}
Object.defineProperty(obj, 'age', {
    enumerable: true,
    configurable: false,//属性不可以删除
    writable: false,//属性不可以修改
    value: 10
})
obj.age = 20//严格模式下抛出异常：Cannot assign to read only property 'age' of object '#<Object>'
delete obj.age//严格模式下抛出异常：Cannot delete property 'age' of #<Object>
```
使用存取描述符的例子：
```js
let obj = {name: 'tim'}
Object.defineProperty(obj, 'age', {
    enumerable: true,
    configurable: false,//属性不可以删除
    get: function() {
        return 10
    }
})
obj.age = 20//严格模式下抛出异常：Cannot set property age of #<Object> which has only a getter
delete obj.age//严格模式下抛出异常：Cannot delete property 'age' of #<Object>
```

- Object.preventExtensions()

Object.preventExtensions()防止扩展：禁止为对象添加属性和方法，但已存在的属性和方法是可以被修改和删除的。Object.isExtensible()方法用来检测对象是否是可扩展的。
```js
let obj = {name: 'tom'}
Object.isExtensible(obj)//true
Object.preventExtensions(obj)
Object.isExtensible(obj)//false
obj.age = 10//严格模式下抛出异常：Can't add property age, object is not extensible
```

- Object.seal()

Object.seal()密封对象：与Object.preventExtensions()相似，但禁止删除对象已存在的属性和方法。Object.isSealed()方法用来检测对象是否是密封的，被密封的对象同时也是不可扩展的。
```js
let obj = {name: 'tom'}
Object.isSealed(obj)//false
Object.seal(obj)
Object.isSealed(obj)//true
Object.isExtensible(obj)//false
obj.age = 10//严格模式下抛出异常：Can't add property age, object is not extensible
delete obj.name//严格模式下抛出异常：Cannot delete property 'name' of #<Object>
```

- Object.freeze()

Object.freeze()冻结对象：与Object.seal()相似，但禁止修改对象已存在的属性和方法。Object.isFrozen()方法用来检测对象是否是冻结的。被冻结的对象同时也是不可扩展的和密封的。
```js
let obj = {name: 'tom'}
Object.isFrozen(obj)//false
Object.freeze(obj)
Object.isFrozen(obj)//true
Object.isExtensible(obj)//false
Object.isSealed(obj)//true
obj.age = 10//严格模式下抛出异常：Can't add property age, object is not extensible
delete obj.name//严格模式下抛出异常：Cannot delete property 'name' of #<Object>
obj.name = 'tim'//严格模式下抛出异常：Cannot assign to read only property 'name' of object '#<Object>'
```

|方法|禁止增加属性|禁止删除属性|禁止修改属性|
|---|---|---|---|
|Object.preventExtensions()|是|否|否|
|Object.seal()|是|是|否|
|Object.freeze()|是|是|是|


https://juejin.im/post/5b42b858e51d45191556c8f4

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty