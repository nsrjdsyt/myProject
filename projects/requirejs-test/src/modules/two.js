define(['common'], function (Common) {
    function Two() {

    }

    Two.prototype = {
        print: function () {
            console.log("i am two")
        }
    }

    return {
        two: Two
    }
})