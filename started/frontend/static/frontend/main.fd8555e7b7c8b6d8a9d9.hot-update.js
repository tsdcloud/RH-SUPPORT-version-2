/*! For license information please see main.fd8555e7b7c8b6d8a9d9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Temoins/TemoinsForm.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/UserPlusIcon.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Temoins(props) {\n  const [temoins, setTemoins] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log(temoins);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    htmlFor: ""\n  }, "Choisir t\\xE9moin(s)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {\n    className: props.temoins.length < 1 ? \'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0\' : \'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0\'\n    // disabled={receiverLoading}\n    ,\n    disabled: props.temoins.length < 1,\n    onChange: e => setTemoins(e.target.value),\n    multiple: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: ""\n  }, "Temoins"), props.temoins?.map(temoin => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: temoin.user.id,\n    key: temoin.user.id\n  }, temoin.user.member.first_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-end items-center mt-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "p-2 bg-blue-500 rounded-md text-white flex items-center text-sm"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    className: "h-5 w-5 text-white mx-2"\n  }), " ", "Interpeler le t\\xE9moins"))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Temoins);\n\n//# sourceURL=webpack://frontend/./src/components/Temoins/TemoinsForm.jsx?')}},(function(_){_.h=()=>"bbcb24037d6813dd3a3f"}));