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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const DOM = {\r\n    app : '#app'\r\n}\r\n\r\n$(DOM.app).append('<div id=\"count\">0</div>');\r\n$(DOM.app).append('<button id=\"btn-up\">up</button>');\r\n$(DOM.app).append('<button id=\"btn-down\">down</button>');\r\n\r\nconst sum = (a, b) => a+ b;\r\nlet aaa = 1;\r\nclass Person {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.hp = 100;\r\n        this.space = [];\r\n    }\r\n    eat(food) {\r\n        this.space.push(food);\r\n        this.hp++;\r\n    }\r\n\r\n}\r\n//\r\n// const p1 = new Person('eunhye');\r\n// const p2 = new Person('kure')\r\n// p1.eat({name:'사과'});\r\n// p2.eat({name:'똥똥'});\r\n// p2.eat({name:'똥똥'});\r\n// console.log(p1);\r\n// console.log(p2);\r\n\r\n\r\nclass Studnet extends Person {// 자바의 상속과 같다\r\n    constructor(name) {\r\n        super(name);\r\n    }\r\n    study() {\r\n        this.hp--;\r\n    }\r\n    eat(food) { //자바의 오버라이드와 비슷\r\n        console.log('눈치보며 먹는다');//학생의 eat은 이곳을 먼저 실행하고\r\n        super.eat(food);//super 상속받았기 때문에 여기도 실행한다\r\n    }\r\n}\r\n\r\nconst s1 = new Studnet('eunhye');\r\ns1.study();\r\ns1.study();\r\ns1.study();\r\ns1.study();\r\ns1.study();\r\ns1.eat({name:'pizza'});\r\ns1.eat({name:'pizza'});\r\ns1.eat({name:'pizza'});\r\nconsole.log(s1);\r\n\r\nclass Father extends Person {\r\n    constructor(name) {\r\n        super(name);\r\n    }\r\n    work() {\r\n        this.hp--;\r\n    }\r\n\r\n    eat(food) {\r\n        console.log('몰래몰래 술을 마신다');\r\n        super.eat(food);\r\n    }\r\n}\r\n\r\nconst f1 = new Father('papa');\r\nf1.work();\r\nf1.work();\r\nf1.work();\r\nf1.eat({name:'pizza'});\r\nconsole.log(f1);\r\n\r\nclass Mother extends Person {\r\n    constructor(name) {\r\n        super(name);\r\n    }\r\n    work() {\r\n\r\n    }\r\n}\r\nconst m1 = new Mother('mama');\r\nconsole.log(m1);\r\n\r\n\r\n// //제이쿼리를 사용해서 사용한다면.\r\n// $(\"#btn\").on('click',function(){\r\n//    $(\"#app\").addClass('danger');\r\n// });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });