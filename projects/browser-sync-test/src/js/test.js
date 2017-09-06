console.log(1);

//http-proxy-middleware test code
$.ajax({
    url:'/m/ajax/test.json'
}).done(function(res){
    console.log(res);
})
