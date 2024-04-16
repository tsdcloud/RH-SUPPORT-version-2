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

/***/ "./src/pages/DemandeExplication/DemandeExplication.js":
/*!************************************************************!*\
  !*** ./src/pages/DemandeExplication/DemandeExplication.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/notification/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/table/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/drawer/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/space/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/EllipsisHorizontalIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js\");\n/* harmony import */ var _components_Reponse_ReponseForm_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Reponse/ReponseForm.jsx */ \"./src/components/Reponse/ReponseForm.jsx\");\n/* harmony import */ var _components_Temoins_TemoinsForm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Temoins/TemoinsForm.jsx */ \"./src/components/Temoins/TemoinsForm.jsx\");\n/* harmony import */ var _components_Sanction_SanctionForm_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Sanction/SanctionForm.jsx */ \"./src/components/Sanction/SanctionForm.jsx\");\n/* harmony import */ var _components_ExplicationDetails_ExplicationDetails_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ExplicationDetails/ExplicationDetails.jsx */ \"./src/components/ExplicationDetails/ExplicationDetails.jsx\");\n/* harmony import */ var _components_CollapsibleComponent_CollapsibleComponent_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CollapsibleComponent/CollapsibleComponent.jsx */ \"./src/components/CollapsibleComponent/CollapsibleComponent.jsx\");\n/* harmony import */ var _components_DetailCard_DetailCard_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/DetailCard/DetailCard.jsx */ \"./src/components/DetailCard/DetailCard.jsx\");\n/* harmony import */ var _components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Tab/SecondaryTabs.js */ \"./src/components/Tab/SecondaryTabs.js\");\n/* harmony import */ var _components_Tabs_TabsWrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Tabs/TabsWrapper.js */ \"./src/components/Tabs/TabsWrapper.js\");\n/* harmony import */ var _context_AuthContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/AuthContext.js */ \"./src/context/AuthContext.js\");\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useFetch */ \"./src/hooks/useFetch.js\");\n/* harmony import */ var _hooks_usePost__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/usePost */ \"./src/hooks/usePost.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\r\n * On this page, the user should be able to get the following information :\r\n * 1- All the requests for explanation initiated\r\n * 2- All the requests for explanation received\r\n * 3- All the requests answered\r\n * 4- All the requests awaiting for propositions\r\n * 5- All the \r\n */\n\nconst TYPE_DE = {\n  init: \"initier_de\",\n  upload: \"upload_de\"\n};\n\n// Notification system\nconst openNotification = () => {\n  antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"].open({\n    message: 'Demande d\\'explication',\n    description: 'Demande d\\'explication initié avec success'\n  });\n};\nfunction DemandeExplication() {\n  const {\n    setUser,\n    user\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext_js__WEBPACK_IMPORTED_MODULE_9__.AUTHCONTEXT);\n  const {\n    isLoading,\n    error,\n    fetchData\n  } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_10__.useFetch)();\n  const {\n    responseData,\n    postData\n  } = (0,_hooks_usePost__WEBPACK_IMPORTED_MODULE_11__.usePost)();\n  const {\n    id\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)();\n  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useNavigate)();\n  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [isOpenned, setIsOpenned] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [actualRequest, setActualRequest] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const _USER = localStorage.getItem('user');\n  const userEntity = JSON.parse(localStorage.getItem('user'))?.entity[1].id;\n  const [path, setPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"explanation\");\n  const [receiverLoading, setReceiverLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [motifLoading, setMotifLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [typeDE, setTypeDE] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TYPE_DE.init);\n  const [motifs, setMotifs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [deIsLoading, setDEIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  // Form values\n  const [initiator, setInitiator] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [receivers, setReceivers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [receiver, setReceiver] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [motif, setMotif] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [sanction, setSanction] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [sanctions, setSanctions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(`Madame/Monsieur,\nIl a été donné de constater que ...\nLe rapport de votre hiérarchie fait état de ...\nVous voudriez bien nous expliquer dans un délai de 72h dès réception de la présente les raisons de ...\n<b>NB:</b> Le refus de réponse à la présente demande d’explications et dans les délais annoncés sera assimilé à un acte d’insubordination et traité comme tel.\n    `);\n  const [searchDE, setSearchDE] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [reponseFormIsOpenned, setReponseFormIsOpenned] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [temoinFormIsOpenned, setTemoinFormIsOpenned] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [showSanctionButton, setShowSanctionButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const handleShowSanctionForm = () => {\n    setShowSanctionButton(!showSanctionButton);\n  };\n  const showDrawer = () => {\n    setOpen(true);\n  };\n  const onClose = () => {\n    setOpen(false);\n  };\n  const handleSetActualRequest = id => {\n    const actualRequest = dataSource.filter(data => {\n      return data.uuid == id;\n    });\n    setActualRequest(...actualRequest);\n  };\n  const handleOpenResponse = id => {\n    handleSetActualRequest(id);\n    setOpen(true);\n  };\n  const handleOnReponseSaved = id => {\n    console.log(id);\n    alert(\"Response sent\");\n    handleFetchAllDE();\n    setOpen(false);\n  };\n  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useLocation)();\n  const handleTabClick = path => {\n    // setActiveTab(tabName);\n    setPath(path);\n    // console.log(location.pathname);\n  };\n  const columns = [{\n    title: '#',\n    width: \"150px\",\n    render: record => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, dataSource.indexOf(record) + 1)\n  }, {\n    title: 'No Ref',\n    dataIndex: 'code_de',\n    key: 'code_de'\n  }, {\n    title: 'Motifs',\n    dataIndex: 'motif',\n    key: 'motif',\n    render: (record, text) => {\n      let motifName = motifs.find(motif => motif.uuid === text.motif);\n      console.log(motifName?.nom);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, motifName?.nom);\n    }\n  }, {\n    title: 'Destinataire',\n    dataIndex: 'employer_recepteur',\n    key: 'employer_recepteur'\n    // render:((text)=>{\n    //     let destinataire = receivers.filter(receiver=>receiver.id == text)\n    //     console.log(receivers)\n    //     return <>{destinataire}</>\n    // })\n  }, {\n    title: 'Initiateur',\n    dataIndex: 'employer_initiateur',\n    key: 'employer_initiateur'\n    // render:((text)=>{\n    //     let destinataire = receivers.filter(receiver=>receiver.id == text)\n    //     console.log(receivers)\n    //     return <>{destinataire}</>\n    // })\n  }, {\n    title: 'Date initiation',\n    dataIndex: 'date_init',\n    key: 'date_init',\n    width: \"150px\"\n  }, {\n    title: 'Statut',\n    dataIndex: 'statut_de',\n    key: 'date_init',\n    render: text => text === \"1\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"text-green-500 font-semibold\"\n    }, \"En attente de r\\xE9ponse\") : text === \"2\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"text-orange-500 font-semibold\"\n    }, \"En attente de sanction\") : text === \"3\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"text-yellow-500 font-semibold\"\n    }, \"En attente r\\xE9ponse du t\\xE9moin\") : text === \"4\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"text-purple-500 font-semibold\"\n    }, \"Archiv\\xE9\") : text === \"5\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"text-red-500 font-semibold\"\n    }, \"R\\xE9pondu hors d\\xE9lais\") : text === \"6\" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"text-blue-500 font-semibold\"\n    }, \"R\\xE9pondu\")\n  }, {\n    title: 'Actions',\n    width: \"100px\",\n    render: (record, text) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n      onClick: () => handleOpenDetail(record.uuid),\n      className: \"h-8 w-8 text-gray-500 cursor-pointer\"\n    })\n  }];\n\n  /**\r\n   * Handle get all Demande Explication\r\n   */\n  const handleFetchAllDE = async () => {\n    let headersList = {\n      \"Accept\": \"*/*\"\n    };\n    let url = \"/api?end=demandes&termination=demande&detail=0\";\n    let response = await fetch(url, {\n      method: \"GET\",\n      headers: headersList\n    });\n    try {\n      let res = await response.json();\n      if (res.status === 200) {\n        setData(res.results);\n        setDataSource(res.results);\n      }\n    } catch (err) {\n      console.error(\"FETCH ALL DE ERROR :\", err);\n    } finally {\n      setDEIsLoading(false);\n    }\n  };\n  const handleFetchDE = async id => {\n    let headersList = {\n      \"Accept\": \"*/*\"\n    };\n    let url = `/api?end=demandes&termination=demande&detail=1&pid=${id}`;\n    let response = await fetch(url, {\n      method: \"GET\",\n      headers: headersList\n    });\n    let res = await response.json();\n    console.log(res);\n    if (res.status === 200) {\n      setActualRequest(res);\n      setOpen(true);\n      handleFetchSanctions();\n      // setDataSource(res.results);\n    }\n  };\n  const handleChange = event => {\n    setSelectedOptions(event.target.value);\n  };\n  /**\r\n   * Returns the motifs for a given entity\r\n   */\n  const handleGetMotifs = async () => {\n    let headersList = {\n      \"Accept\": \"*/*\",\n      \"Authorization\": \"Bearer \" + JSON.parse(_USER).access\n    };\n    let response = await fetch(\"/api?end=motifs&termination=motifs&detail=0\", {\n      method: \"GET\",\n      headers: headersList\n    });\n    if (response.status === 200) {\n      let result = await response.json();\n      let data = await result.results;\n      setMotifLoading(false);\n      setMotifs(data);\n    }\n  };\n\n  /**\r\n   * Handle details\r\n   */\n  const handleOpenDetail = id => {\n    setOpen(true);\n    handleFetchDE(id);\n  };\n\n  /**\r\n   * Handle get all employees\r\n   */\n  const getEntityEmployees = async id => {\n    const url = `api/?end=entity&termination=firm&detail=1&pid=${id}&action=employees`;\n    let RequestInfo = {\n      method: \"GET\",\n      maxBodyLength: Infinity,\n      headers: {\n        Authorization: `Bearer ${JSON.parse(_USER).access}`\n      }\n    };\n    const response = await fetch(url, RequestInfo);\n    const result = await response.json();\n    console.log(result);\n    if (response.ok) {\n      let data = result?.results;\n      const actualUser = await data.filter(users => users.user.id === JSON.parse(_USER).id);\n      const withoutUser = await data.filter(users => users.user.id !== JSON.parse(_USER).id).filter(users => users.rank.power >= actualUser[0].rank.power);\n      setReceivers(await withoutUser);\n      console.log(await withoutUser);\n      setReceiverLoading(false);\n      return withoutUser;\n    }\n    return [];\n  };\n\n  /**\r\n   * Upload files to the file endpoint\r\n   */\n  const handleFileUploaded = async e => {\n    const file = e.target.value[0];\n    if (!file) return;\n  };\n\n  /**\r\n   * Returns the list of employees from a given entity \r\n   */\n  const handleSaveDE = async () => {\n    // evt.preventDefault();\n    const url = \"/api\";\n    const headersList = {\n      Accept: '*/*',\n      Authorization: 'Bearer ' + JSON.parse(_USER)?.access\n    };\n    const formData = JSON.stringify({\n      \"end\": \"demandes\",\n      \"termination\": \"demande\",\n      \"detail\": 0,\n      \"user_id\": JSON.parse(_USER).id,\n      \"employer_initiateur\": JSON.parse(_USER).id,\n      \"employer_recepteur\": receiver,\n      \"description\": description,\n      \"motif\": motif\n    });\n    const RequestInfo = {\n      headers: headersList,\n      method: 'POST',\n      body: formData\n    };\n    try {\n      const response = await fetch(url, RequestInfo);\n      let res = response.json();\n      if (res.status === 201) {\n        handleFetchAllDE();\n        setIsOpenned(false);\n        setReceiver('');\n        setDescription('');\n        setMotif('');\n        // openNotification();\n        // Notification()\n      }\n    } catch (err) {\n      console.log(err);\n    } finally {}\n  };\n  const handleChooseWitness = async e => {\n    e.preventDefault();\n    console.log(selectedOptions);\n    const url = \"/api\";\n    const headersList = {\n      Accept: '*/*',\n      Authorization: 'Bearer ' + JSON.parse(_USER)?.access\n    };\n    const formData = JSON.stringify({\n      \"end\": \"demandes\",\n      \"termination\": \"temoins\",\n      \"detail\": 0,\n      \"id_employe\": selectedOptions,\n      \"id_de\": actualRequest.uuid\n    });\n    const RequestInfo = {\n      headers: headersList,\n      method: 'POST',\n      body: formData\n    };\n    const response = await fetch(url, RequestInfo);\n    let res = response.json();\n    handleFetchAllDE();\n    setSelectedOptions('');\n    setOpen(false);\n    if (res.status === 201) {\n      // openNotification();\n      // Notification()\n    }\n  };\n  const handleFetchSanctions = () => {\n    fetchData(\"/api?end=demandes&termination=sanction&detail=0\").then(data => {\n      console.log(\"SANCTION :\", data);\n      setSanctions(data);\n    });\n    // const data = await fetchData(\"/api?end=demandes&termination=sanction&detail=0\")\n  };\n  const handleProposeSanction = () => {\n    handleFetchAllDE();\n    setOpen(false);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getEntityEmployees(userEntity);\n    // setReceivers(entitiesEmployees);\n    handleFetchAllDE();\n    handleGetMotifs();\n    const explanations = data.filter(item => item.reponse.length == 0);\n    console.log(explanations);\n    setDataSource(explanations);\n    if (id) {\n      handleFetchDE(id);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (setSearchDE.length > 0) {\n      console.log(data.filter(de => de.code_de.includes(searchDE) || de.employer_recepteur.includes(searchDE) || de.employer_initiateur.includes(searchDE) || de.date_init.includes(searchDE)));\n      setDataSource(data.filter(de => de.code_de.includes(searchDE) || de.employer_recepteur.includes(searchDE) || de.employer_initiateur.includes(searchDE) || de.date_init.includes(searchDE) || de.statut_de.includes(searchDE)));\n    } else {\n      setDataSource(data);\n    }\n  }, [searchDE]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"p-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex justify-between px-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"relative w-4/5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \" px-2 py-1 border-[1px] border-gray-200 text-gray-800 rounded-lg text-sm focus:outline-0 w-2/5\",\n    type: \"search\",\n    placeholder: \"Recherche\",\n    value: searchDE,\n    onChange: e => setSearchDE(e.target.value)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex items-center space-x-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"p-2 shadow-sm rounded-md bg-blue-600 text-white text-sm flex items-center justify-center space-x-2\",\n    onClick: () => {\n      setIsOpenned(true);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n    class: \"h-4 w-4 text-white\"\n  }), \"Initier une demande\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"p-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tabs_TabsWrapper_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    title: `Toutes les DE (${data.length})`,\n    onClick: () => {\n      setDataSource(data);\n      handleTabClick(\"explanation\");\n    },\n    isActive: path === 'explanation'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    title: `Initier (${data.filter(de => de.user_id === JSON.parse(_USER).id).length})`,\n    onClick: () => {\n      setDataSource(data.filter(de => de.user_id === JSON.parse(_USER).id));\n      handleTabClick(\"initier\");\n    },\n    isActive: path === 'initier'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    title: `reçu (${data.filter(de => de.user_id !== JSON.parse(_USER).id).length})`,\n    onClick: () => {\n      setDataSource(data.filter(de => de.user_id !== JSON.parse(_USER).id));\n      handleTabClick(\"received\");\n    },\n    isActive: path === 'received'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    title: `En attente de réponse (${data.filter(de => de.statut_de == 1).length})`,\n    onClick: async () => {\n      let repondue = data.filter(de => de.statut_de == 1);\n      setDataSource(repondue);\n      handleTabClick(\"response\");\n    },\n    isActive: path === 'response'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    title: `En attente de témoins (${data.filter(de => de.statut_de == 3).length})`,\n    onClick: () => {\n      let repondue = data.filter(de => de.statut_de == 3);\n      setDataSource(repondue);\n      handleTabClick(\"witness\");\n    },\n    isActive: path === 'witness'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_SecondaryTabs_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    title: `En attente de proposition (${data.filter(de => de.statut_de == 2).length})`,\n    onClick: () => {\n      let repondue = data.filter(de => de.statut_de == 2);\n      setDataSource(repondue);\n      handleTabClick(\"sanction\");\n    },\n    isActive: path === 'sanction'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n    title: \"Initier une demande d'explication\",\n    centered: true,\n    open: isOpenned,\n    onCancel: () => setIsOpenned(false),\n    footer: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: handleSaveDE,\n    className: \"px-2 space-y-2 w-full flex flex-col justify-center h-[400px] max-h-[400px] overflow-y-scroll\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    className: `${receiverLoading ? 'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0 bg-gray-100' : 'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} text-md`,\n    disabled: receiverLoading,\n    value: receiver,\n    onChange: e => setReceiver(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"\"\n  }, \"Destinataire\"), receivers.map(users => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    key: users.user.id,\n    value: users.user.id\n  }, `${users.user.member.first_name} ${users.user.member.last_name}`))), typeDE == TYPE_DE.upload && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    className: receiverLoading ? 'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' : 'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0',\n    disabled: receiverLoading,\n    value: initiator,\n    onChange: e => setInitiator(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"\"\n  }, \"Initiateur\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    className: \"\",\n    for: \"init_date\"\n  }, \"Date d'initiation :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"date\",\n    id: \"init_date\",\n    className: \"border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    className: `${motifLoading ? 'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' : 'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} text-md`,\n    disabled: motifLoading,\n    value: motif,\n    onChange: e => setMotif(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"\"\n  }, \"Motifs\"), motifs.map(motif => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: motif.uuid,\n    key: motif.nom\n  }, motif.nom))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"p-2 w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"justif font-bold\"\n  }, \"Choisir un justif:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"file\",\n    id: \"justif\",\n    className: \"border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0\",\n    placeholder: \"Ajouter une piece Jointe\"\n  })), typeDE == TYPE_DE.upload && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"p-2 w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rounded-lg w-full \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"demande_file\"\n  }, \"Televerser la demande:\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"file\",\n    id: \"demande_file\",\n    className: \"border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0\",\n    placeholder: \"Ajouter une piece Jointe\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    className: \"border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0\",\n    placeholder: \"Descriptions\",\n    rows: \"5\",\n    value: description,\n    onChange: e => setDescription(e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"text-white font-md bg-blue-500 p-2 rounded-lg\",\n    type: \"submit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Initier la demande\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-full\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n    loading: deIsLoading,\n    dataSource: dataSource,\n    columns: columns,\n    pagination: {\n      pageSize: 50\n    },\n    scroll: {\n      y: 200,\n      x: 500\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n    title: \"Demande d'explication\",\n    placement: \"bottom\",\n    width: 1000,\n    height: 600,\n    onClose: () => setIsOpenned(false),\n    open: false,\n    extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_19__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_20__[\"default\"], {\n      onClick: onClose,\n      className: \"\"\n    }, \"Cancel\"))\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n    title: \"Demande d'explication\",\n    placement: \"bottom\",\n    width: 1000,\n    height: 600,\n    onClose: onClose,\n    open: open,\n    extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_19__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      onClick: onClose,\n      className: \"p-2 bg-blue-500 text-white sh\"\n    }, \"Cancel\"))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"h-full w-full overflow-y-hidden flex space-x-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"h-full w-1/2 overflow-y-auto p-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex items-center p-2 shadow-sm bg-white rounded-md\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"shadow-sm p-2 mt-3 rounded-sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExplicationDetails_ExplicationDetails_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    code: actualRequest.code_de,\n    dateInit: actualRequest.date_init,\n    initiateur: actualRequest.employer_initiateur,\n    motif: motifs.find(motif => motif.uuid === actualRequest.motif)?.nom,\n    description: actualRequest.description\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"h-full w-[1px] bg-gray-200\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"h-full w-1/2 overflow-y-auto hover:overflow-y-scroll p-2 space-y-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CollapsibleComponent_CollapsibleComponent_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: `Toutes les réponses (${actualRequest?.reponse?.length})`,\n    className: \"m-y-2\"\n  }, actualRequest?.reponse?.map(data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DetailCard_DetailCard_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    borderColor: `border-l-blue-500 my-1`,\n    name: data.id_employe,\n    description: data.commentaire_reponse,\n    date: data.date_init\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, reponseFormIsOpenned && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Reponse_ReponseForm_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onSave: handleOnReponseSaved,\n    demande: actualRequest.uuid\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex justify-end items-center space-x-2 mt-2\"\n  }, reponseFormIsOpenned ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"px-2 py-1 bg-red-500 text-xs text-white rounded-md\",\n    onClick: () => setReponseFormIsOpenned(false)\n  }, \"Annuler\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"px-2 py-1 bg-blue-500 text-xs text-white rounded-md\",\n    onClick: () => setReponseFormIsOpenned(true)\n  }, \"Repondre\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CollapsibleComponent_CollapsibleComponent_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: `Toutes les interpélations (${actualRequest?.temoins?.length})`,\n    className: \"m-y-2\"\n  }, actualRequest?.temions?.map(data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DetailCard_DetailCard_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    borderColor: `border-l-yellow-500 my-1`,\n    name: data.id_employe,\n    description: data.commentaire_reponse,\n    date: data.date_init\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, temoinFormIsOpenned && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Temoins_TemoinsForm_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    temoins: receivers,\n    selectedOption: setSelectedOptions,\n    onSubmit: handleChooseWitness,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex justify-end items-center space-x-2 mt-2\"\n  }, temoinFormIsOpenned ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"px-2 py-1 bg-red-500 text-xs text-white rounded-md\",\n    onClick: () => setTemoinFormIsOpenned(false)\n  }, \"Annuler\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"px-2 py-1 bg-blue-500 text-xs text-white rounded-md\",\n    onClick: () => setTemoinFormIsOpenned(true)\n  }, \"Interpeler un t\\xE9moin\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CollapsibleComponent_CollapsibleComponent_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: `Toutes les sanctions (${actualRequest?.propositions?.length})`,\n    className: \"m-y-2\"\n  }, actualRequest?.propositions?.map(data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DetailCard_DetailCard_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    borderColor: `border-l-yellow-500 my-1`,\n    name: data.id_employe,\n    description: data.commentaire_reponse,\n    date: data.date_init\n  }))), handleShowSanctionForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Sanction_SanctionForm_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sanctions: sanctions,\n    explanation: actualRequest.uuid,\n    employee: JSON.parse(_USER).id,\n    onSubmit: handleProposeSanction\n  }), handleShowSanctionForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"px-2 py-1 bg-red-500 text-xs text-white rounded-md\",\n    onClick: handleShowSanctionForm\n  }, \"Annuler\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"px-2 py-1 bg-blue-500 text-xs text-white rounded-md\",\n    onClick: handleShowSanctionForm\n  }, \"Proposer une sanction\"))))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemandeExplication);\n\n//# sourceURL=webpack://frontend/./src/pages/DemandeExplication/DemandeExplication.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0549b89c027dd62179da")
/******/ })();
/******/ 
/******/ }
);