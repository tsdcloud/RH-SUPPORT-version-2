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

/***/ "./src/components/PageHeader/PageHeader.jsx":
/*!**************************************************!*\
  !*** ./src/components/PageHeader/PageHeader.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js\");\n\n\nfunction PageHeader(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex justify-between px-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"relative w-4/5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \" px-2 py-1 border-[1px] border-gray-200 text-gray-800 rounded-lg text-sm focus:outline-0 w-2/5\",\n    type: \"search\",\n    placeholder: props.searchPlaceholder,\n    value: props.value,\n    onChange: props.onSearch\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex items-center space-x-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"p-2 shadow-sm rounded-md bg-blue-600 text-white text-sm flex items-center justify-center space-x-2\",\n    onClick: props.buttonOnClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    class: \"h-4 w-4 text-white\"\n  }), props.buttonText)));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);\n\n//# sourceURL=webpack://frontend/./src/components/PageHeader/PageHeader.jsx?");

/***/ }),

/***/ "./src/pages/Sanctions/Sanctions.jsx":
/*!*******************************************!*\
  !*** ./src/pages/Sanctions/Sanctions.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PageHeader_PageHeader_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageHeader/PageHeader.jsx */ \"./src/components/PageHeader/PageHeader.jsx\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/modal/index.js\");\n\n\n\nfunction Sanctions() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"p-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageHeader_PageHeader_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    searchPlaceholder: \"Recherche\",\n    value: \"\",\n    onSearch: \"\",\n    buttonOnClick: \"\",\n    buttonText: \"Ajouter une sanction\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sanctions);\n\n//# sourceURL=webpack://frontend/./src/pages/Sanctions/Sanctions.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f07b190e51188a4d533c")
/******/ })();
/******/ 
/******/ }
);