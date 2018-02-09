define(function () {
    function Common() {

    }

    Common.prototype = {
        print: function () {
            console.log("i am common")
        }
    }

    return {
        common: Common
    }
})