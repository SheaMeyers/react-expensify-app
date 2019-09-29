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
eval("\n\n// Object Destructuring\n\n// const person = {\n//     name: 'Shea',\n//     age: 28,\n//     location: {\n//         city: 'Voorburg',\n//         temp: 18\n//     }\n// }\n\n// const { name: firstName = 'Anonymous', age } = person;\n\n// console.log(`${firstName} is ${age}.`)\n\n// const { city, temp: tempurature } = person.location;\n\n// console.log(`It's ${tempurature} in ${city}.`)\n\nvar address = ['1299 S Juniper Street', 'Philadephia', 'Pennsylvania', '19147'];\n\nvar city = address[1],\n    _address$ = address[2],\n    state = _address$ === undefined ? 'New York' : _address$;\n\n\nconsole.log('You are in ' + city + ' ' + state);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGxheWdyb3VuZC9kZXN0cnVjdHVyaW5nLmpzP2Y2ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gT2JqZWN0IERlc3RydWN0dXJpbmdcblxuLy8gY29uc3QgcGVyc29uID0ge1xuLy8gICAgIG5hbWU6ICdTaGVhJyxcbi8vICAgICBhZ2U6IDI4LFxuLy8gICAgIGxvY2F0aW9uOiB7XG4vLyAgICAgICAgIGNpdHk6ICdWb29yYnVyZycsXG4vLyAgICAgICAgIHRlbXA6IDE4XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCB7IG5hbWU6IGZpcnN0TmFtZSA9ICdBbm9ueW1vdXMnLCBhZ2UgfSA9IHBlcnNvbjtcblxuLy8gY29uc29sZS5sb2coYCR7Zmlyc3ROYW1lfSBpcyAke2FnZX0uYClcblxuLy8gY29uc3QgeyBjaXR5LCB0ZW1wOiB0ZW1wdXJhdHVyZSB9ID0gcGVyc29uLmxvY2F0aW9uO1xuXG4vLyBjb25zb2xlLmxvZyhgSXQncyAke3RlbXB1cmF0dXJlfSBpbiAke2NpdHl9LmApXG5cbmNvbnN0IGFkZHJlc3MgPSBbJzEyOTkgUyBKdW5pcGVyIFN0cmVldCcsICdQaGlsYWRlcGhpYScsICdQZW5uc3lsdmFuaWEnLCAnMTkxNDcnXTtcblxuY29uc3QgWywgY2l0eSwgc3RhdGUgPSAnTmV3IFlvcmsnXSA9IGFkZHJlc3M7XG5cbmNvbnNvbGUubG9nKGBZb3UgYXJlIGluICR7Y2l0eX0gJHtzdGF0ZX1gKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGxheWdyb3VuZC9kZXN0cnVjdHVyaW5nLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);