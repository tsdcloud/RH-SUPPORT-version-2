/*! For license information please see main.a6e7f4c4c3f2265176ef.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/topBar/TopBar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/AuthContext */ "./src/context/AuthContext.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/UserIcon.js");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/CogIcon.js");\n\n\n\n\n\nfunction TopBar() {\n  const {\n    user\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AUTHCONTEXT);\n  const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    let json = JSON.parse(user);\n    setProfile(json);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "relative w-full px-4 bg-blue-500 py-2 shadow-md flex justify-between items-center"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {\n    className: "text-white font-semibold"\n  }, "RH Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex items-center space-x-1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "p-3 rounded-full bg-gray-500"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {\n    className: "text-white font-light text-sm "\n  }, `Hi, ${profile?.member?.last_name}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "absolute hidden px-2 py-3 bg-white shadow-md rounded-md w-[200px] max-w-[200px]  flex-col space-y-3 top-10 right-[10px]"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \'#\',\n    className: "flex items-center space-x-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    className: "w-6 h-6 text-gray-400"\n  }), `${profile?.member?.first_name} ${profile?.member?.last_name}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \'#\',\n    className: "flex items-center space-x-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: "w-6 h-6 text-gray-400"\n  }), "Parametres")));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);\n\n//# sourceURL=webpack://frontend/./src/components/topBar/TopBar.js?')}},(function(_){_.h=()=>"9370fd7bf97b923c5ec7"}));