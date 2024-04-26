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

/***/ "./src/components/Login/LoginForm.jsx":
/*!********************************************!*\
  !*** ./src/components/Login/LoginForm.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _assets_images_herobg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/herobg.jpg */ \"./src/assets/images/herobg.jpg\");\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFetch */ \"./src/hooks/useFetch.js\");\n\n\n\n\nfunction LoginForm(props) {\n  const {\n    isLoading,\n    error,\n    fetchData,\n    postData\n  } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__.useFetch)();\n  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [usernameErr, setUsernameErr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [passwordErr, setPasswordErr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setPasswordErr(\"\");\n    setUsernameErr(\"\");\n  }, [username, password]);\n  const handleLogin = async e => {\n    e.preventDefault();\n    setIsSubmitting(true);\n    if (!username) {\n      setUsernameErr(\"Nom d'utilisateur requis\");\n      return;\n    }\n    if (!password) {\n      setPasswordErr(\"Mot de passe requis\");\n      return;\n    }\n    let headersList = {\n      \"Accept\": \"*/*\"\n    };\n    const data = JSON.stringify({\n      \"username\": username,\n      \"password\": password\n    });\n    try {\n      const response = await fetch('/login', {\n        method: \"POST\",\n        headers: headersList,\n        body: data\n      });\n      const result = response.json();\n      console.log(result);\n    } catch (error) {\n      console.error(error);\n    } finally {\n      setIsSubmitting(false);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"h-screen w-full overflow-hidden flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"h-screen p-5 w-1/2 bg-slate-400 flex flex-col justify-center items-center space-y-5 px-4\",\n    style: {\n      background: \"rgba(0,0,0,0.7) url('\" + _assets_images_herobg_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"] + \"')\",\n      backgroundPosition: \"center center\",\n      backgroundSize: \"cover\",\n      backgroundBlendMode: \"overlay\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"text-white text-6xl\"\n  }, \"Support RH\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"text-white text-light\"\n  }, \"Human resource the better way.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"h-screen w-1/2 flex flex-col justify-center items-center space-y-3 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex flex-col w-1/2 mb-3 space-x-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    className: \"text-2xl\"\n  }, \"Connexion\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex flex-col w-1/2 mt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\",\n    className: \"text-sm\"\n  }, \"Nom d'utilisateur \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"text-red-500\"\n  }, \"*\"), \" :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    className: \"text-sm outline-0 border-[1px] border-gray-400 rounded-md\",\n    placeholder: \"\",\n    onChange: e => setUsername(e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"small\", {\n    className: \"text-red-500\"\n  }, usernameErr)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex flex-col w-1/2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\",\n    className: \"text-sm\"\n  }, \"Mot de passe \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"text-red-500\"\n  }, \"*\"), \" :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"Password\",\n    className: \"text-sm outline-0 border-[1px] border-gray-400 rounded-md\",\n    placeholder: \"\",\n    onChange: e => setPassword(e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"small\", {\n    className: \"text-red-500\"\n  }, passwordErr)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex flex-col w-1/2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    className: \"text-xs underline text-red-500\"\n  }, \"Mot de passe oublier ?\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-1/2 flex justify-end\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: `${isSubmitting ? \"disabled bg-blue-300\" : \"\"} btn btn-primary`,\n    onClick: handleLogin\n  }, isSubmitting ? \"Connexion en cours\" : \"Se connecter\"))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);\n\n//# sourceURL=webpack://frontend/./src/components/Login/LoginForm.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8d2cf879c21ff6b3ad9")
/******/ })();
/******/ 
/******/ }
);