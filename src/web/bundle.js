/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.js */ \"./server/users.js\");\n\r\n\r\n\r\n_users_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].signup('zamiel.mercadesjas@gmail.com', 'za@$%miel123M')\r\n    .then((result) => {\r\n        console.log(result);  // Success\r\n    })\r\n    .catch((err) => {\r\n        console.log(`Error ${err.code}: ${err.message}`);  // Error handling\r\n    });\r\n\n\n//# sourceURL=webpack://src/./server/index.js?");

/***/ }),

/***/ "./server/users.js":
/*!*************************!*\
  !*** ./server/users.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass User {\r\n    #auth\r\n\r\n    constructor() {\r\n        this.#auth = getAuth();\r\n    }\r\n\r\n    signup(email, password) {\r\n        return new Promise((resolve, reject) => {\r\n            setPersistence(this.#auth, browserSessionPersistence)\r\n                .then(async () => {\r\n                    // Ensure the password passes validation before creating the user\r\n                    const validationResult = this.#constraintPassword(password);\r\n                    if (validationResult) {\r\n                        return reject(validationResult);  // Reject the promise if validation fails\r\n                    }\r\n                    return createUserWithEmailAndPassword(this.#auth, email, password);\r\n                })\r\n                .then((userCredential) => {\r\n                    resolve(userCredential);\r\n                })\r\n                .catch((error) => {\r\n                    reject(new Error(`Error ${error.code}: ${error.message}`));  // Handle errors here\r\n                });\r\n        });\r\n    }\r\n\r\n    #constraintPassword(password) {\r\n        // Call the validation methods properly by using parentheses to invoke the functions\r\n        if (!StringValidator.containsLowercaseLetter(password)) {\r\n            return new Error({\r\n                code: 200,\r\n                message: 'Password must contain lower-cased characters.'\r\n            });\r\n        }\r\n        if (StringValidator.containsNonNumericCharacter(password)) {\r\n            return new Error({\r\n                code: 200,\r\n                message: 'Password must only contain alphanumeric characters.'\r\n            });\r\n        }\r\n        return null;  // Return null if password is valid\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new User());\r\n\n\n//# sourceURL=webpack://src/./server/users.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;