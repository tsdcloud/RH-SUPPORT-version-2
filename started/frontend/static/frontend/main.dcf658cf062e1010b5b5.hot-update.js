"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/hooks/usePost.js":
/*!******************************!*\
  !*** ./src/hooks/usePost.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePost: () => (/* binding */ usePost)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n // Assuming you're using Axios for API requests\n\nconst usePost = () => {\n  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const postData = async (data, end, termination, detail, callback) => {\n    const url = \"/api\";\n    const headersList = {\n      Accept: '*/*',\n      Authorization: 'Bearer ' + JSON.parse(_USER)?.access\n    };\n    const options = {\n      headers: headersList,\n      method: 'POST',\n      body: JSON.stringify({\n        \"end\": end,\n        \"termination\": termination,\n        \"detail\": detail,\n        ...data\n      })\n    };\n    setIsLoading(true);\n    setError(null);\n    try {\n      const response = await fetch(url, options);\n      const data = response.json();\n      if (response.status === 201) {\n        callback();\n        return data;\n      }\n      return data;\n    } catch (error) {\n      setError(error);\n    } finally {\n      setIsLoading(false);\n    }\n  };\n\n  // useEffect(() => {\n  // }, [data]);\n\n  return {\n    isLoading,\n    error,\n    responseData,\n    postData\n  };\n};\n\n//# sourceURL=webpack://frontend/./src/hooks/usePost.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce59a1ef262df1bbae6e")
/******/ })();
/******/ 
/******/ }
);