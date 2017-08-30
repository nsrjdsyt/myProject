/**
 * Created by 17020979 on 2017/3/22.
 */

//实质上，Promise的精髓是“状态”，用维护状态、传递状态的方式来使得回调函数能够及时调用，它比传递callback函数要简单、灵活的多

function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;
}


runAsync1().then(function (data) {
    console.log(data);
    return runAsync2();    //直接return promise对象，后续的then中接受的是该promise resolved状态的数据
}).then(function (data) {
    console.log(data);
    return runAsync3();
}).then(function (data) {
    console.log(data)
    return "在then方法中，你也可以直接return数据而不是Promise对象，在后面的then中就可以接收到数据了"
}).then(function (data) {
    console.log(data)
})


/////////////////////////////////////////////////////////////////

function printHello (ready) {
    return new Promise(function (resolve, reject) {
        if (ready) {
            resolve("Hello");
        } else {
            reject("Good bye!");
        }
    });
}

function printWorld () {
    alert("World");
}

function printExclamation () {
    alert("!");
}

printHello(true)
    .then(function(message){
        alert(message);
    })
    .then(printWorld)
    .then(printExclamation);


//////////////////////////////////////////////////////////////

printHello(true).then(function (message) {
    return message;
}).then(function (message) {
    return message  + ' World';
}).then(function (message) {
    return message + '!';
}).then(function (message) {
    alert(message);
});