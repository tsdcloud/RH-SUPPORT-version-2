/*! For license information please see main.ab1145a76fbf3cae0f1a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Temoins/TemoinsForm.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/UserPlusIcon.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Temoins(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {\n    onSubmit: () => {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {\n    className: props.temoins.length > 0 ? \'\' : \'\',\n    disabled: props.temoins.length > 0\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: ""\n  }, "Temoins"), props.temoins?.map(temoin => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: temoin.uuid,\n    key: temoin.uuid\n  }, temoin.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-end items-center"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "p-2 bg-blue-500 rounded-md text-white flex"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    className: "h-6 w-6 text-white mx-2"\n  }), "Interpeler le t\\xE9moins"))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Temoins);\n\n//# sourceURL=webpack://frontend/./src/components/Temoins/TemoinsForm.jsx?')}},(function(_){_.h=()=>"692191253335fdd2e7f1"}));