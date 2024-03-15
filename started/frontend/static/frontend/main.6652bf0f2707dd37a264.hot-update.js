/*! For license information please see main.6652bf0f2707dd37a264.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/CollapsibleComponent/CollapsibleComponent.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CollapsibleComponent = ({\n  children,\n  title,\n  className\n}) => {\n  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-between items-center p-2 border-[1px] rounded-t-md rounded-r-md border-gray-200 bg-gray-300",\n    onClick: () => setIsCollapsed(!isCollapsed)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-lg"\n  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: `${isCollapsed ? \'hidden\' : \'block\'} max-h-96 `\n  }, children));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapsibleComponent);\n\n//# sourceURL=webpack://frontend/./src/components/CollapsibleComponent/CollapsibleComponent.jsx?')}},(function(_){_.h=()=>"ec1a7560ac8a12b56591"}));