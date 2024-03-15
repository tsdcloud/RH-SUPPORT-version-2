/*! For license information please see main.11453e300c2f313101b6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Reponse/ReponseForm.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/PaperAirplaneIcon.js");\n\n\nfunction ReponseForm(props) {\n  const _USER = localStorage.getItem(\'user\');\n\n  // Response form\n  const [justif, setJustif] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [responseDesc, setResponseDesc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [idDe, setIdDe] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.demande);\n  const [disableReponseBtn, setDisableReponseBtn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (responseDesc.length < 1) {\n      setDisableReponseBtn(true);\n    } else {\n      setDisableReponseBtn(true);\n    }\n  }, [responseDesc]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);\n\n  /**\r\n   * Handle explanation request response\r\n   */\n  const handleSaveResponse = async e => {\n    e.preventDefault();\n    const url = "/api";\n    const headersList = {\n      Accept: \'*/*\',\n      Authorization: \'Bearer \' + JSON.parse(_USER)?.access\n    };\n    const formData = JSON.stringify({\n      "end": "demandes",\n      "termination": "reponse",\n      "detail": 0,\n      "id_employe": JSON.parse(_USER).id,\n      "id_de": idDe,\n      "commentaire_reponse": responseDesc\n    });\n    const RequestInfo = {\n      headers: headersList,\n      method: \'POST\',\n      body: formData\n    };\n    const response = await fetch(url, RequestInfo);\n    let res = response.json();\n    if (res.status === 200) {\n      props.onSave();\n      // handleFetchAllDE();\n      // setIsOpenned(false);\n      // Notification()\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-1/2 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 p-2 "\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {\n    className: "flex flex-col space-y-3",\n    onSubmit: handleSaveResponse\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    htmlFor: "response_file"\n  }, "Justif. :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "file",\n    id: "response_file",\n    className: "p-2 border-[1px] border-gray-400 rounded-lg"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    htmlFor: "response_description"\n  }, "Description. :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {\n    value: responseDesc,\n    name: "",\n    id: "response_description",\n    cols: "30",\n    rows: "5",\n    className: "p-2 border-[1px] border-gray-400 rounded-lg focus:outline-0",\n    onChange: e => setResponseDesc(e.target.value),\n    placeholder: "Votre reponse a votre demande d\'explication..."\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    type: "submit",\n    className: "flex items-center px-2 py-1 shadow-sm bg-blue-500 rounded-lg text-white",\n    disable: disableReponseBtn\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    class: "h-6 w-6 text-white"\n  }), "\\xA0\\xA0\\xA0\\xA0 Envoyer la reponse")))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReponseForm);\n\n//# sourceURL=webpack://frontend/./src/components/Reponse/ReponseForm.jsx?')}},(function(e){e.h=()=>"73e5caf51bb7fcfa044f"}));