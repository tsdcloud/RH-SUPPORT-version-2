/*! For license information please see main.8fcdde49c117a98eed7d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/pages/DemandeExplication/DemandeExplication.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/table/index.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/drawer/index.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/EllipsisHorizontalIcon.js");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ArrowUturnRightIcon.js");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/UserPlusIcon.js");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ShieldExclamationIcon.js");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ReceiptRefundIcon.js");\n/* harmony import */ var _components_Tab_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Tab/Tab */ "./src/components/Tab/Tab.js");\n/* harmony import */ var _components_Reponse_ReponseForm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Reponse/ReponseForm.jsx */ "./src/components/Reponse/ReponseForm.jsx");\n/* harmony import */ var _components_FileComponent_FileComponent_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FileComponent/FileComponent.jsx */ "./src/components/FileComponent/FileComponent.jsx");\n/* harmony import */ var _components_ExplicationDetails_ExplicationDetails_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ExplicationDetails/ExplicationDetails.jsx */ "./src/components/ExplicationDetails/ExplicationDetails.jsx");\n/* harmony import */ var _components_CollapsibleComponent_CollapsibleComponent_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CollapsibleComponent/CollapsibleComponent.jsx */ "./src/components/CollapsibleComponent/CollapsibleComponent.jsx");\n/* harmony import */ var _components_DetailCard_DetailCard_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/DetailCard/DetailCard.jsx */ "./src/components/DetailCard/DetailCard.jsx");\n\n\n\n\n\n\n\n\n\n\n\n/**\r\n * On this page, the user should be able to get the following information :\r\n * 1- All the requests for explanation initiated\r\n * 2- All the requests for explanation received\r\n * 3- All the requests answered\r\n * 4- All the requests awaiting for propositions\r\n * 5- All the \r\n */\n\nconst TYPE_DE = {\n  init: "initier_de",\n  upload: "upload_de"\n};\n\n// const REQUEST_STEP = {\n//     all_demande,\n//     request_intiated,\n//     request_received\n// }\n\nfunction DemandeExplication() {\n  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [isOpenned, setIsOpenned] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [actualRequest, setActualRequest] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const _USER = localStorage.getItem(\'user\');\n  const userEntity = JSON.parse(localStorage.getItem(\'user\'))?.entity[0].id;\n  const [path, setPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("explanation");\n  const [receiverLoading, setReceiverLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [motifLoading, setMotifLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [typeDE, setTypeDE] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TYPE_DE.init);\n  const [motifs, setMotifs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  // Form values\n  const [initiator, setInitiator] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [receivers, setReceivers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [receiver, setReceiver] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [motif, setMotif] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [reponseFormIsOpenned, setReponseFormIsOpenned] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const showDrawer = () => {\n    setOpen(true);\n  };\n  const onClose = () => {\n    setOpen(false);\n  };\n  const handleSetActualRequest = id => {\n    const actualRequest = dataSource.filter(data => {\n      return data.uuid == id;\n    });\n    setActualRequest(...actualRequest);\n  };\n  const handleOpenResponse = id => {\n    handleSetActualRequest(id);\n    setOpen(true);\n  };\n  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useLocation)();\n  const handleTabClick = path => {\n    // setActiveTab(tabName);\n    setPath(path);\n    // console.log(location.pathname);\n  };\n  const columns = [{\n    title: \'#\'\n  }, {\n    title: \'No Ref\',\n    dataIndex: \'code_de\',\n    key: \'code_de\'\n  }, {\n    title: \'Motifs\',\n    dataIndex: \'motif\',\n    key: \'motif\',\n    render: (record, text) => {\n      let motifName = motifs.find(motif => motif.uuid === text.motif);\n      console.log(motifName?.nom);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, motifName?.nom);\n    }\n  }, {\n    title: \'Destinataire\',\n    dataIndex: \'employer_recepteur\',\n    key: \'employer_recepteur\'\n    // render:((text)=>{\n    //     let destinataire = receivers.filter(receiver=>receiver.id == text)\n    //     console.log(receivers)\n    //     return <>{destinataire}</>\n    // })\n  }, {\n    title: \'Initiateur\',\n    dataIndex: \'employer_initiateur\',\n    key: \'employer_initiateur\'\n    // render:((text)=>{\n    //     let destinataire = receivers.filter(receiver=>receiver.id == text)\n    //     console.log(receivers)\n    //     return <>{destinataire}</>\n    // })\n  }, {\n    title: \'Date initiation\',\n    dataIndex: \'date_init\',\n    key: \'date_init\'\n  }, {\n    title: \'Actions\',\n    render: (record, text) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {\n      onClick: () => handleOpenResponse(record.uuid),\n      className: "h-8 w-8 text-gray-500 cursor-pointer"\n    })\n  }];\n\n  /**\r\n   * Handle get all Demande Explicatio\r\n   */\n  const handleFetchAllDE = async () => {\n    let headersList = {\n      "Accept": "*/*"\n    };\n    let url = "/api?end=demandes&termination=demande&detail=0";\n    let response = await fetch(url, {\n      method: "GET",\n      headers: headersList\n    });\n    let res = await response.json();\n    if (res.status === 200) {\n      setData(res.results);\n      setDataSource(res.results);\n    }\n  };\n\n  /**\r\n   * Returns the motifs for a given entity\r\n   */\n  const handleGetMotifs = async () => {\n    let headersList = {\n      "Accept": "*/*",\n      "Authorization": "Bearer " + JSON.parse(_USER).access\n    };\n    let response = await fetch("/api?end=motifs&termination=motifs&detail=0", {\n      method: "GET",\n      headers: headersList\n    });\n    if (response.status === 200) {\n      let result = await response.json();\n      let data = await result.results;\n      setMotifLoading(false);\n      setMotifs(data);\n    }\n  };\n\n  /**\r\n   * Handle get all employees\r\n   */\n  const getEntityEmployees = async id => {\n    const url = `api/?end=entity&termination=firm&detail=1&pid=${id}&action=employees`;\n    let RequestInfo = {\n      method: "GET",\n      maxBodyLength: Infinity,\n      headers: {\n        Authorization: `Bearer ${JSON.parse(_USER).access}`\n      }\n    };\n    const response = await fetch(url, RequestInfo);\n    const result = await response.json();\n    if (response.ok) {\n      let data = result?.results;\n      const actualUser = await data.filter(users => users.user.id === JSON.parse(_USER).id);\n      const withoutUser = await data.filter(users => users.user.id !== JSON.parse(_USER).id).filter(users => users.rank.power >= actualUser[0].rank.power);\n      setReceivers(await withoutUser);\n      await setReceiverLoading(false);\n      return withoutUser;\n    }\n    return [];\n  };\n\n  /**\r\n   * Upload files to the file endpoint\r\n   */\n  const handleFileUploaded = async e => {\n    const file = e.target.value[0];\n    if (!file) return;\n  };\n\n  /**\r\n   * Returns the list of employees from a given entity \r\n   */\n  const handleSaveDE = async () => {\n    const url = "/api";\n    const headersList = {\n      Accept: \'*/*\',\n      Authorization: \'Bearer \' + JSON.parse(_USER)?.access\n    };\n    const formData = JSON.stringify({\n      "end": "demandes",\n      "termination": "demande",\n      "detail": 0,\n      "employer_initiateur": JSON.parse(_USER).id,\n      "employer_recepteur": receiver,\n      "description": description,\n      "motif": motif\n    });\n    const RequestInfo = {\n      headers: headersList,\n      method: \'POST\',\n      body: formData\n    };\n    const response = await fetch(url, RequestInfo);\n    let res = response.json();\n    if (res.status === 200) {\n      handleFetchAllDE();\n      setIsOpenned(false);\n      Notification();\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getEntityEmployees(userEntity);\n    // setReceivers(entitiesEmployees);\n    handleFetchAllDE();\n    handleGetMotifs();\n    const explanations = data.filter(item => item.reponse.length == 0);\n    setDataSource(explanations);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "p-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], {\n    title: "Demande d\'explication",\n    centered: true,\n    open: isOpenned,\n    onCancel: () => setIsOpenned(false),\n    onOk: handleSaveDE,\n    footer: (_, {\n      CancelBtn\n    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CancelBtn, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n      className: "text-white rounded-md shadow-sm mx-3 bg-blue-500 px-3 py-1",\n      onClick: handleSaveDE\n    }, "Initier"))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {\n    onSubmit: () => {},\n    className: "px-2 space-y-2 w-full h-[400px] max-h-[400px] overflow-y-scroll"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {\n    value: typeDE,\n    onChange: e => setTypeDE(e.target.value),\n    className: \'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0\'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: TYPE_DE.init\n  }, "Initier une demande d\'explanation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: TYPE_DE.upload\n  }, "T\\xE9l\\xE9verser une demande d\'explication")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {\n    className: receiverLoading ? \'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0\' : \'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0\',\n    disabled: receiverLoading,\n    value: receiver,\n    onChange: e => setReceiver(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: ""\n  }, "Destinataire"), receivers.map(users => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    key: users.user.id,\n    value: users.user.id\n  }, `${users.user.member.first_name} ${users.user.member.last_name}`))), typeDE == TYPE_DE.upload && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {\n    className: receiverLoading ? \'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0\' : \'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0\',\n    disabled: receiverLoading,\n    value: initiator,\n    onChange: e => setInitiator(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: ""\n  }, "Initiateur")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: ""\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    className: "",\n    for: "init_date"\n  }, "Date d\'initiation :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "date",\n    id: "init_date",\n    className: "border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {\n    className: motifLoading ? \'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0\' : \'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0\',\n    disabled: motifLoading,\n    value: motif,\n    onChange: e => setMotif(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: ""\n  }, "Motifs"), motifs.map(motif => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: motif.uuid,\n    key: motif.uuid\n  }, motif.nom))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "p-2 w-full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    htmlFor: "justif font-bold"\n  }, "Choisir un justif:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "file",\n    id: "justif",\n    className: "border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0",\n    placeholder: "Ajouter une piece Jointe"\n  })), typeDE == TYPE_DE.upload && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "p-2 w-full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "rounded-lg w-full "\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    htmlFor: "demande_file"\n  }, "Televerser la demande:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "file",\n    id: "demande_file",\n    className: "border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0",\n    placeholder: "Ajouter une piece Jointe"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {\n    className: "border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0",\n    placeholder: "Descriptions",\n    rows: "5",\n    value: description,\n    onChange: e => setDescription(e.target.value)\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-between px-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "relative"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    className: " px-2 py-1 border-[1px] border-gray-100 rounded-lg text-sm focus:outline-0",\n    type: "search",\n    placeholder: "Recherche"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex items-center space-x-1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "p-2 shadow-sm rounded-md bg-blue-600 text-white text-sm flex items-center justify-center space-x-2",\n    onClick: () => {\n      setIsOpenned(true);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    class: "h-4 w-4 text-white"\n  }), "Initier une demande"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "p-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {\n    id: "tabs",\n    className: "inline-flex pt-2 px-1 w-full border-b space-x-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_Tab__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "Toute les demandes d\'explication",\n    id: "default-tab"\n    // to="all" \n    ,\n    number: data.length,\n    onClick: () => {\n      const explanations = data.filter(item => item.reponse.length == 0);\n      setDataSource(explanations);\n      handleTabClick("explanation");\n    },\n    className: `bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${path === \'explanation\' ? \'border-t border-r border-l -mb-px bg-white\' : \'bg-gray-500 border-b\'}`\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_Tab__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "Repondue"\n    // id="default-tab" \n    // to="answered"\n    ,\n    number: data.filter(item => item.reponse.length > 0).length,\n    onClick: () => {\n      const explanations = data.filter(item => item.reponse.length > 0);\n      setDataSource(explanations);\n      console.log(dataSource);\n      handleTabClick("answered");\n    },\n    className: `bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${path === \'answered\' ? \'border-t border-r border-l -mb-px bg-white\' : \'bg-gray-500 border-b\'}`\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_Tab__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "En attente de t\\xE9moins"\n    // id="default-tab" \n    // to="answered" \n    ,\n    onClick: () => handleTabClick("witness"),\n    className: `bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${path === \'witness\' ? \'border-t border-r border-l -mb-px bg-white\' : \'bg-gray-500 border-b\'}`\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tab_Tab__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "En attente de sanction"\n    // id="default-tab" \n    // to="answered" \n    ,\n    onClick: () => handleTabClick("sanction"),\n    className: `bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${path === \'sanction\' ? \'border-t border-r border-l -mb-px bg-white\' : \'bg-gray-500 border-b\'}`\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {\n    dataSource: dataSource,\n    columns: columns,\n    pagination: {\n      pageSize: 50\n    },\n    scroll: {\n      y: 200\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {\n    title: "Demande d\'explication",\n    placement: "bottom",\n    width: 1000,\n    height: 600,\n    onClose: onClose,\n    open: open,\n    extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_14__["default"], {\n      onClick: onClose,\n      className: ""\n    }, "Cancel"))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "h-full w-full overflow-hidden flex space-x-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "h-full w-1/2 overflow-y-auto p-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex items-center p-2 shadow-sm bg-white rounded-md"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-between items-center space-x-3"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "text-blue-500 flex items-center space-x-2"\n  }, "Repondre", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__["default"], {\n    class: "h-3 w-3 text-blue-500"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "text-yellow-500 flex items-center space-x-2"\n  }, "Interpeler un t\\xE9moins", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__["default"], {\n    class: "h-3 w-3 text-yellow-500"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "text-red-500 flex items-center space-x-2"\n  }, "Proposer une sanction", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__["default"], {\n    class: "h-3 w-3 text-red-500"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "text-green-500 flex items-center space-x-2"\n  }, "Faire une requette", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__["default"], {\n    class: "h-3 w-3 text-green-500"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "shadow-sm p-2 mt-3 rounded-sm"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExplicationDetails_ExplicationDetails_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    code: actualRequest.code_de,\n    dateInit: actualRequest.date_init,\n    initiateur: actualRequest.employer_initiateur,\n    motif: motifs.find(motif => motif.uuid === actualRequest.motif)?.nom,\n    description: actualRequest.description\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "h-full w-[1px] bg-gray-200"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "h-full w-1/2 overflow-y-auto p-2 space-y-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CollapsibleComponent_CollapsibleComponent_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    title: `Toutes les réponses (${dataSource.filter(data => {\n      return data.uuid == actualRequest.uuid;\n    }).filter(item => {\n      return item.reponse.length > 0;\n    }).length})`,\n    className: "m-y-2"\n  }, actualRequest.reponse?.map(data => dataSource.filter(data => {\n    return data.uuid == actualRequest.uuid;\n  }).filter(item => {\n    return item.reponse.length > 0;\n  }).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DetailCard_DetailCard_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    borderColor: `border-l-blue-500 my-1`,\n    name: data.id_employe,\n    description: data.commentaire_reponse,\n    date: data.date_init\n  }), reponseFormIsOpenned ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "px-2 py-1 bg-red-500 text-xs text-white rounded-md"\n  }, "Annuler") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "px-2 py-1 bg-blue-500 text-xs text-white rounded-md"\n  }, "Repondre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-end items-center space-x-2"\n  }, reponseFormIsOpenned ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "px-2 py-1 bg-red-500 text-xs text-white rounded-md"\n  }, "Annuler") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "px-2 py-1 bg-blue-500 text-xs text-white rounded-md"\n  }, "Repondre"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "border-[1px] p-2 border-gray-100"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {\n    className: "italics"\n  }, "Aucune r\\xE9ponse")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CollapsibleComponent_CollapsibleComponent_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    title: `Toutes les interpélations (${dataSource.filter(data => {\n      return data.uuid == actualRequest.uuid;\n    }).filter(item => {\n      return item.temoins.length > 0;\n    }).length})`,\n    className: "m-y-2"\n  }, actualRequest.temoins?.map(data => dataSource.filter(data => {\n    return data.uuid == actualRequest.uuid;\n  }).filter(item => {\n    return item.reponse.length > 0;\n  }).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DetailCard_DetailCard_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    borderColor: `border-l-blue-500 my-1`,\n    name: data.id_employe,\n    description: data.commentaire_reponse,\n    date: data.date_init\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "border-[1px] p-2 border-gray-100"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {\n    className: "italics"\n  }, "Aucune r\\xE9ponse")))))))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemandeExplication);\n\n//# sourceURL=webpack://frontend/./src/pages/DemandeExplication/DemandeExplication.js?')}},(function(e){e.h=()=>"3cf08cbcff80dfdb7531"}));