/**
 * Created by Administrator on 2017/11/26.
 */

require.config({
    baseUrl: 'lib/',
    paths: {
        "Dialog": "Dialog"
    }
});

require(['Dialog'], function (Dialog) {
    console.log(Dialog)
})