/*! For license information please see main.66105e8d4cbc749eb6a0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/App.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/index.css");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");\n/* harmony import */ var _profileBar_ProfileBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileBar/ProfileBar */ "./src/components/profileBar/ProfileBar.js");\n/* harmony import */ var _pages_DemandeExplication_DemandeExplication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/DemandeExplication/DemandeExplication */ "./src/pages/DemandeExplication/DemandeExplication.js");\n/* harmony import */ var _topBar_TopBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topBar/TopBar */ "./src/components/topBar/TopBar.js");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthContext */ "./src/context/AuthContext.js");\n/* harmony import */ var _pages_Homepage_Homepage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Homepage/Homepage */ "./src/pages/Homepage/Homepage.js");\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n  // const { entities } = useContext(AUTHCONTEXT);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // console.log(entities);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_topBar_TopBar__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_profileBar_ProfileBar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: "*",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {\n      className: "text-2xl"\n    }, "404 NOT FOUND")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: "dashboard",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Homepage_Homepage__WEBPACK_IMPORTED_MODULE_7__["default"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: "explanation",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_DemandeExplication_DemandeExplication__WEBPACK_IMPORTED_MODULE_4__["default"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: "explanation/:id",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_DemandeExplication_DemandeExplication__WEBPACK_IMPORTED_MODULE_4__["default"], null)\n  })))\n  // <h5>Something</h5>\n  ;\n}\nconst appDiv = document.getElementById("app");\n(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null)), appDiv);\n\n//# sourceURL=webpack://frontend/./src/components/App.js?')},"./src/pages/Homepage/Homepage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_herobg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/herobg.jpg */ "./src/assets/images/herobg.jpg");\n\n\nfunction Homepage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "p-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "min-h-[50vh] rounded-lg flex flex-col items-center space-y-5",\n    style: {\n      background: "rgba(0,0,0,0.7) url(\'" + _assets_images_herobg_jpg__WEBPACK_IMPORTED_MODULE_1__["default"] + "\')",\n      backgroundPosition: "center center",\n      backgroundSize: "cover",\n      backgroundBlendMode: "overlay"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {\n    className: "text-white text-8xl"\n  }, "Support RH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {\n    className: "text-white text-light"\n  }, "Human resource the better way.")));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n//# sourceURL=webpack://frontend/./src/pages/Homepage/Homepage.js?')},"./src/assets/images/herobg.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a053acc220434b9562cb6e3599f6a3b5.jpg");\n\n//# sourceURL=webpack://frontend/./src/assets/images/herobg.jpg?')}},(function(_){_.h=()=>"693e08cfe6e618db6d09"}));