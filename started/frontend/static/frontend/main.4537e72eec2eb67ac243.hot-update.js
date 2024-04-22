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

/***/ "./src/components/topBar/TopBar.js":
/*!*****************************************!*\
  !*** ./src/components/topBar/TopBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/AuthContext */ \"./src/context/AuthContext.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/BellIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/UserIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/CogIcon.js\");\n\n\n\n\n\nfunction TopBar() {\n  // const {user} = useContext(AUTHCONTEXT);\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem('user'));\n  const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    let json = JSON.parse(user);\n    setProfile(json);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"relative w-full px-4 bg-blue-500 py-2 shadow-md flex justify-between items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"text-white font-semibold\"\n  }, \"RH Support\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex items-center space-x-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"borber-l-[1px] borber-r-[1px] border-white px-2 relative\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"h-5 w-5 text-white rotate-1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"p-1 bg-red-500 rounded-full absolute right-2 top-0\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex items-center space-x-2 border-l-[1px] border-white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    className: \"text-white font-semibold text-sm px-2 cursor-pointer\"\n  }, `Hi, ${profile?.member?.last_name}`))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `absolute hidden px-2 py-3 bg-white shadow-md rounded-md w-[200px] max-w-[200px]  flex-col space-y-3 top-10 right-[10px]`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: '#',\n    className: \"flex items-center space-x-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: \"w-6 h-6 text-gray-400\"\n  }), `${profile?.member?.first_name} ${profile?.member?.last_name}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: '#',\n    className: \"flex items-center space-x-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"w-6 h-6 text-gray-400\"\n  }), \"Parametres\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: '#',\n    className: \"flex items-center space-x-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"w-6 h-6 text-gray-400\"\n  }), \"Parametres\")));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);\n\n//# sourceURL=webpack://frontend/./src/components/topBar/TopBar.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4774695999f4c24f3b8d")
/******/ })();
/******/ 
/******/ }
);