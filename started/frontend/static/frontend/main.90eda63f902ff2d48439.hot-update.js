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

/***/ "./src/context/AuthContext.js":
/*!************************************!*\
  !*** ./src/context/AuthContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AUTHCONTEXT: () => (/* binding */ AUTHCONTEXT),\n/* harmony export */   \"default\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n// import { StyleSheet } from '@react-pdf/renderer';\n// import Logo from \"../utils/Logo\";\nconst axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\nconst AUTHCONTEXT = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nfunction AuthProvider() {\n  //   const [user,setUser] = useState(undefined);\n  // const [user,setUser] = useState(localStorage.getItem('user') || '');\n  //   const [entities, setEntities] = useState([]);\n\n  // const [user,setUser] = useState({member:{is_superuser:false, user_permissions:[]}});\n  //   const [permissions, setPermissions] = useState([]);\n\n  //   const getEntityEmployees = async (entity_id, user_id, token) => {\n  //     const url= `api/?end=entity&termination=firm&detail=1&pid=${id}&action=employees`;\n  //     let RequestInfo = {\n  //         method: \"GET\",\n  //         maxBodyLength: Infinity,\n  //         headers: {\n  //             Authorization: `Bearer ${token}`,\n  //         },\n  //     };\n  //     const response = await fetch(url, RequestInfo);\n  //     const result = await response.json();\n  //     if(response.ok){\n  //         let data = result?.results;\n  //         const actualUser = await data.filter(users => users.user.id === user_id);\n  //         return withoutUser;\n  //     }\n  //     return [];\n  // };\n\n  //   const getEntity = async (token) => {\n  //     let config = {\n  //       method: \"get\",\n  //       maxBodyLength: Infinity,\n  //       url: \"/api?end=entity&detail=0&termination=firm&action=\",\n  //       headers: {\n  //         Authorization: `Bearer ${token}`,\n  //       },\n  //     };\n  //     const response = await axios.request(config);\n  //     const data = await response.data;\n  //     if(data.status === 200){\n  //       return data;\n  //     }\n  //     return null;\n  //   };\n\n  const getInfoUser = async () => {\n    const request = new Request('/user', {\n      method: \"GET\"\n    });\n    let response = await fetch(request);\n    let data = await response.json();\n    const entity = await getEntity(data.access);\n    if (response.status == 200) {\n      const userProfile = {\n        ...data,\n        entity: entity.results\n      };\n      const userInfo = localStorage.setItem('user', JSON.stringify(userProfile));\n      setUser(userInfo);\n      console.log(userInfo);\n      handleGetUserEntities();\n    } else {\n      window.location.href = \"/logout\";\n    }\n  };\n\n  // const getPermissions = async (url=\"/api?end=entity&detail=0&terminaison=employee&action=permissions\")=>{\n  //   const request = new Request(\n  //     url,\n  //     {\n  //       method: \"GET\",\n  //       headers: headers\n  //     }\n  //   )\n  //   fetch(request).then(res=>res.json().then(data=>{\n  //     setPermissions(data.permissions)\n  //     const results = data.results\n  //     var i = 1\n  //     results.forEach(item=>{\n  //       item.line_maritime = item.line.business_name\n  //       global_settings.push(item)\n  //     })\n  //     setGlobalSettings(global_settings)\n  //     const next = data.next\n  //     if(next != null){\n  //       var page = next.split('?page=')\n  //       url = \"/api?end=entity&detail=false&terminaison=employee&action=permissions&page=\" + page[1]\n  //       getGlobalSetting(url)\n  //     }\n  //   }))\n  // }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // getInfoUser();\n    // getPermissions();\n  }, []);\n  return (\n    /*#__PURE__*/\n    // <AUTHCONTEXT.Provider value={{\n    //   user, setUser,\n    //   entities, setEntities,\n    //   permissions, setPermissions\n    // }}>\n    //     {\n    //         props.children\n    //     }\n    // </AUTHCONTEXT.Provider>\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AUTHCONTEXT.Provider, {\n      value: {}\n    })\n  );\n}\n\n//# sourceURL=webpack://frontend/./src/context/AuthContext.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d9d509aa70f97269aeae")
/******/ })();
/******/ 
/******/ }
);