define(['common', 'two'], function (Common, Two) {
    function One() {

    }

    One.prototype = {
        print: function () {
            console.log("i am one")
        }
    }

    return {
        one: One
    }
})