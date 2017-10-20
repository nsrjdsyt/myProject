/**
 * Created by 17020979 on 2017/3/22.
 */

function getNumber(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            var num = Math.ceil(Math.random()*10); //生成1-10的随机数
            if(num<=5){
                resolve(num);
            }
            else{
                reject('数字太大了');
            }
        }, 2000);
    });
    return p;
}

//then方法可以接受两个参数，第一个对应resolve的回调，第二个对应reject的回调

getNumber().then(function (data) {
        console.log(data,'resolved')
    }, function (data) {
        console.log(data,'rejected')
    })


    //.catch(function(reason){   //or: catch方法，其实它和then的第二个参数一样，用来指定reject的回调
    //    console.log('rejected');
    //    console.log(reason);
    //});