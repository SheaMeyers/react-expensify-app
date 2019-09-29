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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar person = {\n    name: 'Shea',\n    age: 28,\n    location: {\n        city: 'Voorburg',\n        temp: 18\n    }\n};\n\nvar _person$name = person.name,\n    firstName = _person$name === undefined ? 'Anonymous' : _person$name,\n    age = person.age;\n\n\nconsole.log(firstName + ' is ' + age + '.');\n\nvar _person$location = person.location,\n    city = _person$location.city,\n    tempurature = _person$location.temp;\n\n\nconsole.log('It\\'s ' + tempurature + ' in ' + city + '.');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGxheWdyb3VuZC9kZXN0cnVjdHVyaW5nLmpzP2Y2ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGVyc29uID0ge1xuICAgIG5hbWU6ICdTaGVhJyxcbiAgICBhZ2U6IDI4LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGNpdHk6ICdWb29yYnVyZycsXG4gICAgICAgIHRlbXA6IDE4XG4gICAgfVxufVxuXG5jb25zdCB7IG5hbWU6IGZpcnN0TmFtZSA9ICdBbm9ueW1vdXMnLCBhZ2UgfSA9IHBlcnNvbjtcblxuY29uc29sZS5sb2coYCR7Zmlyc3ROYW1lfSBpcyAke2FnZX0uYClcblxuY29uc3QgeyBjaXR5LCB0ZW1wOiB0ZW1wdXJhdHVyZSB9ID0gcGVyc29uLmxvY2F0aW9uO1xuXG5jb25zb2xlLmxvZyhgSXQncyAke3RlbXB1cmF0dXJlfSBpbiAke2NpdHl9LmApXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BsYXlncm91bmQvZGVzdHJ1Y3R1cmluZy5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);