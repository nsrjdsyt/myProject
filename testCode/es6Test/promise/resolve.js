/**
 * Created by 17020979 on 2017/3/22.
 */
//Promise的作用，简单来讲，就是能把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。

function runAsync(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成');
            resolve('随便什么数据');
        }, 2000);
    });
    return p;
}

runAsync().then(function(data){ //data 是resolve时传过来的数据
    console.log(data);
    //后面可以用传过来的数据做些其他操作
});