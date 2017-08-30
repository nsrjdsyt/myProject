/**
 * Created by 17020979 on 2017/3/22.
 */
//all方法提供了 并行执行异步操作 的能力，并且在所有异步操作执行完后才执行回调
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

Promise
    .all([runAsync1(), runAsync2(), runAsync3()])
    .then(function(results){   //all会把所有异步操作的结果放进一个数组中传给then，就是上面的results
        console.log(results);
    });