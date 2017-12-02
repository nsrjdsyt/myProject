/*
* node:dom对象
* className: 单个class名称字符串，添加多个class 的实现方法
* **/

function getElementsByClassName(node, className) {
    if(node.getElementsByClassName){
        console.log("调用原始方法")
        return node.getElementsByClassName(className);//ie8不支持
    }else {
        var results = [];
        var elems = node.getElementsByTagName("*");

        for(var i=0;i<elems.length;i++){
            if(elems[i].className.indexOf(className) !== -1){
                results.push(elems[i]); // results[results.length] = elems[i]
            }
        }

        console.log("调用getElementsByTagName方法")
        return results;
    }
}