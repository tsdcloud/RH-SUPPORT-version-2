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

/***/ "./src/hooks/useFetch.js":
/*!*******************************!*\
  !*** ./src/hooks/useFetch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useFetch: () => (/* binding */ useFetch)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useFetch = () => {\n  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const fetchData = async url => {\n    setIsLoading(true);\n    setError(null);\n    let headersList = {\n      \"Accept\": \"*/*\"\n    };\n    try {\n      const response = await fetch(url, {\n        method: \"GET\",\n        headers: headersList\n      });\n      if (response.status === 200) {\n        let result = await response.json();\n        let data = await result.results;\n        return data;\n      }\n    } catch (error) {\n      setError(error);\n    } finally {\n      setIsLoading(false);\n    }\n  };\n  const postData = async (url, data = {}, withAuth = true) => {\n    setIsLoading(true);\n    setError(null);\n    let headersList = {\n      \"Accept\": \"*/*\",\n      \"Authorization\": withAuth ? \"Bearer \" + JSON.parse(localStorage.getItem(\"user\")) : \"\"\n    };\n    console.log({\n      method: \"POST\",\n      headers: headersList,\n      body: JSON.stringify({\n        ...data\n      })\n    });\n    try {\n      const response = await fetch(url, {\n        method: \"GET\",\n        headers: headersList,\n        body: JSON.stringify({\n          ...data\n        })\n      });\n      console.log(response);\n      if (response.status === 200) {\n        let result = await response.json();\n        let data = await result?.results;\n        return data;\n      }\n    } catch (error) {\n      setError(error);\n    } finally {\n      setIsLoading(false);\n    }\n  };\n\n  // useEffect(() => {\n  //   const fetchData = async () => {\n  //     setIsLoading(true);\n  //     setError(null);\n\n  //     try {\n  //       const response = await fetch(url, options);\n  //       const data = response.json();\n  //       return data;\n  //       // setData(response.data);\n  //     } catch (error) {\n  //       setError(error);\n  //     } finally {\n  //       setIsLoading(false);\n  //     }\n  //   };\n\n  //   fetchData();\n  // }, [url]);\n\n  return {\n    isLoading,\n    error,\n    fetchData,\n    postData\n  };\n};\n\n//# sourceURL=webpack://frontend/./src/hooks/useFetch.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44fb3974328d31e630b3")
/******/ })();
/******/ 
/******/ }
);