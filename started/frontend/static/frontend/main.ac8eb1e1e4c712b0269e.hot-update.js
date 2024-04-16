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

/***/ "./src/pages/Archives/Archives.jsx":
/*!*****************************************!*\
  !*** ./src/pages/Archives/Archives.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useFetch.js */ \"./src/hooks/useFetch.js\");\n/* harmony import */ var _hooks_usePost_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/usePost.js */ \"./src/hooks/usePost.js\");\n/* harmony import */ var _components_PageHeader_PageHeader_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PageHeader/PageHeader.jsx */ \"./src/components/PageHeader/PageHeader.jsx\");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/EllipsisHorizontalIcon.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/table/index.js\");\n/* harmony import */ var _components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Tab/SecondaryTabs.js */ \"./src/components/Tab/SecondaryTabs.js\");\n/* harmony import */ var _components_Sanction_AddSanction_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Sanction/AddSanction.jsx */ \"./src/components/Sanction/AddSanction.jsx\");\n/* harmony import */ var _components_Tabs_TabsWrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Tabs/TabsWrapper.js */ \"./src/components/Tabs/TabsWrapper.js\");\n\n\n\n\n\n\n\n\n\nfunction Archives() {\n  const handleTabClick = path => {\n    setPath(path);\n  };\n  const {\n    isLoading,\n    error,\n    fetchData\n  } = (0,_hooks_useFetch_js__WEBPACK_IMPORTED_MODULE_1__.useFetch)();\n  const {\n    responseData,\n    postData\n  } = (0,_hooks_usePost_js__WEBPACK_IMPORTED_MODULE_2__.usePost)();\n  const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [tableDataIsLoading, setTableDataIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [tableData, setTableData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [path, setPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('demande');\n  const handleAddSanction = () => {\n    fetchData(\"/api?end=demandes&termination=sanction&detail=0\").then(res => {\n      console.log(res);\n      setTableData(res);\n      setDataSource(res);\n    });\n  };\n  const deCol = [{\n    title: '#',\n    width: \"150px\",\n    render: record => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, dataSource.indexOf(record) + 1)\n  }, {\n    title: 'No Ref',\n    dataIndex: 'code_de',\n    key: 'code_de'\n  }, {\n    title: 'Motifs',\n    dataIndex: 'motif',\n    key: 'motif',\n    render: (record, text) => {\n      let motifName = motifs.find(motif => motif.uuid === text.motif);\n      console.log(motifName?.nom);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, motifName?.nom);\n    }\n  }, {\n    title: 'Destinataire',\n    dataIndex: 'employer_recepteur',\n    key: 'employer_recepteur'\n  }, {\n    title: 'Initiateur',\n    dataIndex: 'employer_initiateur',\n    key: 'employer_initiateur'\n    // render:((text)=>{\n    //     let destinataire = receivers.filter(receiver=>receiver.id == text)\n    //     console.log(receivers)\n    //     return <>{destinataire}</>\n    // })\n  }, {\n    title: 'Date initiation',\n    dataIndex: 'date_init',\n    key: 'date_init',\n    width: \"150px\"\n  }, {\n    title: 'Actions',\n    width: \"100px\",\n    render: (record, text) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      onClick: () => handleOpenDetail(record.uuid),\n      className: \"h-8 w-8 text-gray-500 cursor-pointer\"\n    })\n  }];\n  const columns = [{\n    title: '#',\n    width: \"150px\",\n    render: record => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, dataSource.indexOf(record) + 1)\n  }, {\n    title: 'Nom',\n    dataIndex: 'libelle_sanction',\n    key: 'libelle_sanction'\n  }, {\n    title: 'Power',\n    dataIndex: 'power',\n    key: 'power'\n  }, {\n    title: 'Motifs',\n    dataIndex: 'motifs',\n    key: 'motifs'\n  }, {\n    title: 'Actions',\n    width: \"100px\",\n    render: record => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      onClick: () => {},\n      className: \"h-8 w-8 text-gray-500 cursor-pointer\"\n    })\n  }];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    handleAddSanction();\n    fetchData(\"/api?end=demandes&termination=demande&detail=0\").then(res => {\n      console.log(res);\n      setTableData(res);\n      setDataSource(res);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"p-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageHeader_PageHeader_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    searchPlaceholder: \"Recherche\",\n    value: \"\",\n    onSearch: \"\",\n    buttonOnClick: () => setOpenModal(true),\n    buttonText: \"Ajouter une sanction\",\n    disableButton: true,\n    dis: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tabs_TabsWrapper_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: `Toutes les DEs (${dataSource.length})`,\n    onClick: () => {\n      // setDataSource(data)\n      handleTabClick(\"demande\");\n    },\n    isActive: path === 'demande'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: `Toutes les Demande Permission (${dataSource.length})`,\n    onClick: () => {\n      // setDataSource(data)\n      handleTabClick(\"permission\");\n    },\n    isActive: path === 'permission'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: `Toutes les Demande d'AVI (${dataSource.length})`,\n    onClick: () => {\n      // setDataSource(data)\n      handleTabClick(\"avi\");\n    },\n    isActive: path === 'avi'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    loading: false,\n    dataSource: [],\n    columns: deCol,\n    pagination: {\n      pageSize: 50\n    },\n    scroll: {\n      y: 200,\n      x: 500\n    }\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Archives);\n\n//# sourceURL=webpack://frontend/./src/pages/Archives/Archives.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("277eae6a46cc97dc448b")
/******/ })();
/******/ 
/******/ }
);