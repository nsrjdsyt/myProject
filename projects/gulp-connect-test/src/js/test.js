console.log(2);

// $.ajax({
//     url:'./mock/test.json'
// }).done(function(res){
//     console.log(res);
// })

//http-proxy-middleware test code
$.ajax({
    url:'/m/ajax/test.json'
}).done(function(res){
    console.log(res);
})
