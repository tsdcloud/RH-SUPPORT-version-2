/*! For license information please see main.f5d74b969ced55fd88f8.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/App.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/index.css");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");\n/* harmony import */ var _profileBar_ProfileBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileBar/ProfileBar */ "./src/components/profileBar/ProfileBar.js");\n/* harmony import */ var _pages_DemandeExplication_DemandeExplication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/DemandeExplication/DemandeExplication */ "./src/pages/DemandeExplication/DemandeExplication.js");\n/* harmony import */ var _topBar_TopBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topBar/TopBar */ "./src/components/topBar/TopBar.js");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthContext */ "./src/context/AuthContext.js");\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n  // const { entities } = useContext(AUTHCONTEXT);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // console.log(entities);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_topBar_TopBar__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_profileBar_ProfileBar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: "*",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {\n      className: "text-2xl"\n    }, "404 NOT FOUND")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: "dashboard",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {\n      className: "text-2xl"\n    }, "Home page")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: "explanation",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_DemandeExplication_DemandeExplication__WEBPACK_IMPORTED_MODULE_4__["default"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: "explanation/",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_DemandeExplication_DemandeExplication__WEBPACK_IMPORTED_MODULE_4__["default"], null)\n  })))\n  // <h5>Something</h5>\n  ;\n}\nconst appDiv = document.getElementById("app");\n(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null)), appDiv);\n\n//# sourceURL=webpack://frontend/./src/components/App.js?')}},(function(_){_.h=()=>"1093be301543352a349a"}));