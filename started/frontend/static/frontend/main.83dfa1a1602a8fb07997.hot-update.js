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

/***/ "./src/pages/Sanctions/Sanctions.jsx":
/*!*******************************************!*\
  !*** ./src/pages/Sanctions/Sanctions.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PageHeader_PageHeader_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageHeader/PageHeader.jsx */ \"./src/components/PageHeader/PageHeader.jsx\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var _components_Sanction_AddSanction_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Sanction/AddSanction.jsx */ \"./src/components/Sanction/AddSanction.jsx\");\n\n\n\n\nfunction Sanctions() {\n  const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"p-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageHeader_PageHeader_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    searchPlaceholder: \"Recherche\",\n    value: \"\",\n    onSearch: \"\",\n    buttonOnClick: () => setOpenModal(true),\n    buttonText: \"Ajouter une sanction\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Ajouter une sanction\",\n    centered: true,\n    open: openModal,\n    onCancel: () => setOpenModal(false),\n    footer: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"p-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Sanction_AddSanction_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Table, {\n    loading: deIsLoading,\n    dataSource: dataSource,\n    columns: columns,\n    pagination: {\n      pageSize: 50\n    },\n    scroll: {\n      y: 200,\n      x: 500\n    }\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sanctions);\n\n//# sourceURL=webpack://frontend/./src/pages/Sanctions/Sanctions.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("47638b2a3ee1c86ba39d")
/******/ })();
/******/ 
/******/ }
);