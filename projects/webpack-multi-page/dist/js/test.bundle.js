/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar PRODUCT_TYPE = { //商品类型\n    ITEM: 0, //实物\n    CARD: 1, //卡密\n    PPTV_CHARGE: 2, //pptv会员直充\n    STORE_PICKUP: 3, //门店自提\n    SQUARE_PICKUP: 4, //广场自提\n    COUPON: 5 //优惠券\n};\n\nexports.PRODUCT_TYPE = PRODUCT_TYPE;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGFnZXMvY29tbW9uL2NvbnN0YW50LmpzPzUxYTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUFJPRFVDVF9UWVBFID0geyAgICAgICAgICAgLy/llYblk4HnsbvlnotcclxuICAgIElURU06IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WunueJqVxyXG4gICAgQ0FSRDogMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y2h5a+GXHJcbiAgICBQUFRWX0NIQVJHRTogMiwgICAgICAgICAgICAgICAgICAgICAgLy9wcHR25Lya5ZGY55u05YWFXHJcbiAgICBTVE9SRV9QSUNLVVA6IDMsICAgICAgICAgICAgICAgICAgICAgLy/pl6jlupfoh6rmj5BcclxuICAgIFNRVUFSRV9QSUNLVVA6IDQsICAgICAgICAgICAgICAgICAgICAvL+W5v+WcuuiHquaPkFxyXG4gICAgQ09VUE9OOiA1ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5LyY5oOg5Yi4XHJcbn07XHJcblxyXG5leHBvcnQgeyBQUk9EVUNUX1RZUEUgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhZ2VzL2NvbW1vbi9jb25zdGFudC5qcyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

eval("var _constant = __webpack_require__(0);\n\ndocument.getElementById('content').innerHTML = 'i am test page!';\n\nconsole.log(\"i in test page:\", _constant.PRODUCT_TYPE.CARD);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGFnZXMvdGVzdC9tYWluLmpzPzNhMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUFJPRFVDVF9UWVBFIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50JztcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gJ2kgYW0gdGVzdCBwYWdlISc7XHJcblxyXG5jb25zb2xlLmxvZyhcImkgaW4gdGVzdCBwYWdlOlwiLFBST0RVQ1RfVFlQRS5DQVJEKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYWdlcy90ZXN0L21haW4uanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ })

/******/ });