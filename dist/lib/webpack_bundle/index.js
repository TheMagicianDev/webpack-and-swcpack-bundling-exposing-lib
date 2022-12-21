var HeroJs;
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Class1/index.ts":
/*!*****************************!*\
  !*** ./src/Class1/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Class1 = void 0;
class Class1 {
    go() {
        return 1;
    }
}
exports.Class1 = Class1;


/***/ }),

/***/ "./src/Class2/index.ts":
/*!*****************************!*\
  !*** ./src/Class2/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Class2 = void 0;
class Class2 {
    start() {
        return 1;
    }
}
exports.Class2 = Class2;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Class2 = exports.Class1 = exports.Hero = void 0;
const Class1_1 = __webpack_require__(/*! ./Class1 */ "./src/Class1/index.ts");
Object.defineProperty(exports, "Class1", ({ enumerable: true, get: function () { return Class1_1.Class1; } }));
const Class2_1 = __webpack_require__(/*! ./Class2 */ "./src/Class2/index.ts");
Object.defineProperty(exports, "Class2", ({ enumerable: true, get: function () { return Class2_1.Class2; } }));
class Hero {
    c1 = new Class1_1.Class1();
    c2 = new Class2_1.Class2();
}
exports.Hero = Hero;

}();
HeroJs = __webpack_exports__;
/******/ })()
;