require.config({
    baseUrl: '../modules/',
    paths: {
        "one": "one"
    }
});

require(['one'], function (One) {
    console.log("i am index")
    new One.one().print()
})