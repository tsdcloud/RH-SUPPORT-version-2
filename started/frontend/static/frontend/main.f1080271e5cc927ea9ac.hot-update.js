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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/BookmarkIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useFetch */ \"./src/hooks/useFetch.js\");\n/* harmony import */ var _hooks_usePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/usePost */ \"./src/hooks/usePost.js\");\n\n\n\n\nfunction Sanction(props) {\n  const [sanction, setSanction] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [sanctions, setSanctions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const {\n    fetchData\n  } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__.useFetch)();\n  const {\n    postData\n  } = (0,_hooks_usePost__WEBPACK_IMPORTED_MODULE_2__.usePost)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const data = fetchData(\"/api?end=demandes&termination=sanction&detail=0\").then(response => setSanctions(response));\n  }, []);\n  const handlePostSanction = () => {\n    postData().then(response => setSanctions(response));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: props.onSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\",\n    className: \"text-sm font-bold\"\n  }, \"Choisir une sanction :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    className: props.sanction?.length < 1 ? 'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' : 'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'\n    // disabled={receiverLoading}\n    ,\n    value: sanction,\n    disabled: props.sanctions?.length < 1,\n    onChange: e => setSanction(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"\"\n  }, \"Sanctions\"), props.sanctions?.map(sanction => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: sanction?.libelle_sanction,\n    key: sanction?.uuid\n  }, sanction?.libelle_sanction))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex justify-end items-center mt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"p-2 bg-blue-500 rounded-md text-white flex items-center text-sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"h-5 w-5 text-white mx-2\"\n  }), \" \", \"Proposer une sanction\"))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sanction);\n\n//# sourceURL=webpack://frontend/./src/components/Sanction/SanctionForm.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8e42af2cec6ca2512fff")
/******/ })();
/******/ 
/******/ }
);