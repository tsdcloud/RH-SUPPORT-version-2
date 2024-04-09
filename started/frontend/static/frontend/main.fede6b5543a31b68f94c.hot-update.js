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

/***/ "./src/components/Sanction/SanctionForm.jsx":
/*!**************************************************!*\
  !*** ./src/components/Sanction/SanctionForm.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/BookmarkIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Sanction(props) {\n  const [sanction, setSanction] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: props.onSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\",\n    className: \"text-sm font-bold\"\n  }, \"Choisir une sanction :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    className: props.temoins.length < 1 ? 'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' : 'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'\n    // disabled={receiverLoading}\n    ,\n    value: sanction,\n    disabled: props.prop?.length < 1,\n    onChange: e => setSanction(e.target.value),\n    multiple: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"\"\n  }, \"Sanctions\"), props.sanctions?.map(sanction => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: sanction?.user.id,\n    key: sanction?.user.id\n  }, sanction?.user.member.first_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex justify-end items-center mt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"p-2 bg-blue-500 rounded-md text-white flex items-center text-sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"h-5 w-5 text-white mx-2\"\n  }), \" \", \"Proposer une sanction\"))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sanction);\n\n//# sourceURL=webpack://frontend/./src/components/Sanction/SanctionForm.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e002d06274929e87e2b8")
/******/ })();
/******/ 
/******/ }
);