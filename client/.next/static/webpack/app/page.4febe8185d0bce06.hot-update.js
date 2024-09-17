"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Components/ApplicationTable.tsx":
/*!*********************************************!*\
  !*** ./app/Components/ApplicationTable.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_SearchIcon_TrashIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=SearchIcon,TrashIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var _barrel_optimize_names_SearchIcon_TrashIcon_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=SearchIcon,TrashIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/table */ \"(app-pages-browser)/./components/ui/table.tsx\");\n/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/badge */ \"(app-pages-browser)/./components/ui/badge.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _context_applicationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/applicationContext */ \"(app-pages-browser)/./context/applicationContext.js\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n\nvar _s = $RefreshSig$();\n\n // Import TrashIcon for delete button\n\n\n\n\n // Import Button component\n // Import useApplications\n\nconst ApplicationTable = (param)=>{\n    let { applications, searchTerm, setSearchTerm } = param;\n    _s();\n    const { deleteApplication } = (0,_context_applicationContext__WEBPACK_IMPORTED_MODULE_7__.useApplications)(); // Use deleteApplication from context\n    // Handle the delete button click\n    const handleDelete = (id)=>{\n        if (window.confirm(\"Are you sure you want to delete this application?\")) {\n            deleteApplication(id);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n        className: \"bg-white dark:bg-gray-800 shadow-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col md:flex-row justify-between items-start md:items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                            className: \"text-xl font-semibold text-gray-800 dark:text-white mb-4 md:mb-0\",\n                            children: \"Recent Applications\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-full md:w-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_SearchIcon_TrashIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    className: \"absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    type: \"search\",\n                                    placeholder: \"Search applications...\",\n                                    className: \"pl-8 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 w-full md:w-auto\",\n                                    value: searchTerm,\n                                    onChange: (e)=>setSearchTerm(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-x-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                                            children: \"Company\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                                            children: \"Position\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                                            children: \"Status\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                                            children: \"Location\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                                            className: \"text-right\",\n                                            children: \"Date Applied\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                                            className: \"text-right\",\n                                            children: \"Actions\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n                                children: applications.map((application)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                                        className: \"hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                className: \"font-medium\",\n                                                children: application.company\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                children: application.position\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {\n                                                    className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_9__.twMerge)(application.status === \"applied\" && \"bg-blue-500 text-white\" || application.status === \"interviewing\" && \"bg-yellow-500 text-white\" || application.status === \"offered\" && \"bg-green-500 text-white\" || application.status === \"rejected\" && \"bg-red-500 text-white\"),\n                                                    children: application.status\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                children: application.location\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                className: \"text-right\",\n                                                children: new Date(application.date).toLocaleDateString()\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                                                className: \"text-right\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    variant: \"ghost\",\n                                                    size: \"icon\",\n                                                    onClick: ()=>handleDelete(application._id),\n                                                    className: \"text-red-600 hover:text-red-800\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_SearchIcon_TrashIcon_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                        className: \"w-4 h-4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, application._id, true, {\n                                        fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\app\\\\Components\\\\ApplicationTable.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ApplicationTable, \"NFbzEGiypVbLSqv983ROx2WKgfE=\", false, function() {\n    return [\n        _context_applicationContext__WEBPACK_IMPORTED_MODULE_7__.useApplications\n    ];\n});\n_c = ApplicationTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApplicationTable);\nvar _c;\n$RefreshReg$(_c, \"ApplicationTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0FwcGxpY2F0aW9uVGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMyQixDQUFDLHFDQUFxQztBQUM3QztBQUNrQztBQUNzQjtBQUN4RDtBQUNFLENBQUMsMEJBQTBCO0FBRVosQ0FBQyx5QkFBeUI7QUFDaEQ7QUFRekMsTUFBTWtCLG1CQUFvRDtRQUFDLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUU7O0lBQ3BHLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUUsR0FBR04sNEVBQWVBLElBQUkscUNBQXFDO0lBRXRGLGlDQUFpQztJQUNqQyxNQUFNTyxlQUFlLENBQUNDO1FBQ3BCLElBQUlDLE9BQU9DLE9BQU8sQ0FBQyxzREFBc0Q7WUFDdkVKLGtCQUFrQkU7UUFDcEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDcEIscURBQUlBO1FBQUN1QixXQUFVOzswQkFDZCw4REFBQ3JCLDJEQUFVQTswQkFDVCw0RUFBQ3NCO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ3BCLDBEQUFTQTs0QkFBQ29CLFdBQVU7c0NBQW1FOzs7Ozs7c0NBR3hGLDhEQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUMxQixnR0FBVUE7b0NBQUMwQixXQUFVOzs7Ozs7OENBQ3RCLDhEQUFDeEIsdURBQUtBO29DQUNKMEIsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkgsV0FBVTtvQ0FDVkksT0FBT1g7b0NBQ1BZLFVBQVUsQ0FBQ0MsSUFBTVosY0FBY1ksRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLckQsOERBQUMxQiw0REFBV0E7MEJBQ1YsNEVBQUN1QjtvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ25CLHVEQUFLQTs7MENBQ0osOERBQUNJLDZEQUFXQTswQ0FDViw0RUFBQ0MsMERBQVFBOztzREFDUCw4REFBQ0YsMkRBQVNBO3NEQUFDOzs7Ozs7c0RBQ1gsOERBQUNBLDJEQUFTQTtzREFBQzs7Ozs7O3NEQUNYLDhEQUFDQSwyREFBU0E7c0RBQUM7Ozs7OztzREFDWCw4REFBQ0EsMkRBQVNBO3NEQUFDOzs7Ozs7c0RBQ1gsOERBQUNBLDJEQUFTQTs0Q0FBQ2dCLFdBQVU7c0RBQWE7Ozs7OztzREFDbEMsOERBQUNoQiwyREFBU0E7NENBQUNnQixXQUFVO3NEQUFhOzs7Ozs7d0NBQW1COzs7Ozs7Ozs7Ozs7MENBR3pELDhEQUFDbEIsMkRBQVNBOzBDQUNQVSxhQUFhZ0IsR0FBRyxDQUFDLENBQUNDLDRCQUNqQiw4REFBQ3ZCLDBEQUFRQTt3Q0FBdUJjLFdBQVU7OzBEQUN4Qyw4REFBQ2pCLDJEQUFTQTtnREFBQ2lCLFdBQVU7MERBQWVTLFlBQVlDLE9BQU87Ozs7OzswREFDdkQsOERBQUMzQiwyREFBU0E7MERBQUUwQixZQUFZRSxRQUFROzs7Ozs7MERBQ2hDLDhEQUFDNUIsMkRBQVNBOzBEQUNSLDRFQUFDSSx1REFBS0E7b0RBQUNhLFdBQVdWLHVEQUFPQSxDQUN2QixZQUFhc0IsTUFBTSxLQUFLLGFBQWEsNEJBQ3BDSCxZQUFZRyxNQUFNLEtBQUssa0JBQWtCLDhCQUN6Q0gsWUFBWUcsTUFBTSxLQUFLLGFBQWEsNkJBQ3BDSCxZQUFZRyxNQUFNLEtBQUssY0FBYzs4REFFckNILFlBQVlHLE1BQU07Ozs7Ozs7Ozs7OzBEQUd2Qiw4REFBQzdCLDJEQUFTQTswREFBRTBCLFlBQVlJLFFBQVE7Ozs7OzswREFDaEMsOERBQUM5QiwyREFBU0E7Z0RBQUNpQixXQUFVOzBEQUFjLElBQUljLEtBQUtMLFlBQVlNLElBQUksRUFBRUMsa0JBQWtCOzs7Ozs7MERBQ2hGLDhEQUFDakMsMkRBQVNBO2dEQUFDaUIsV0FBVTswREFDbkIsNEVBQUNaLHlEQUFNQTtvREFDTDZCLFNBQVE7b0RBQ1JDLE1BQUs7b0RBQ0xDLFNBQVMsSUFBTXZCLGFBQWFhLFlBQVlXLEdBQUc7b0RBQzNDcEIsV0FBVTs4REFFViw0RUFBQ3pCLGlHQUFTQTt3REFBQ3lCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQXRCWlMsWUFBWVcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQzlDO0dBN0VNN0I7O1FBQzBCRix3RUFBZUE7OztLQUR6Q0U7QUErRU4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ29tcG9uZW50cy9BcHBsaWNhdGlvblRhYmxlLnRzeD8wMWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNlYXJjaEljb24sIFRyYXNoSWNvbiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7IC8vIEltcG9ydCBUcmFzaEljb24gZm9yIGRlbGV0ZSBidXR0b25cclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcclxuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlSGVhZGVyLCBUYWJsZVJvdyB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFibGVcIjtcclxuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7IC8vIEltcG9ydCBCdXR0b24gY29tcG9uZW50XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQC9saWIvdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VBcHBsaWNhdGlvbnMgfSBmcm9tICdAL2NvbnRleHQvYXBwbGljYXRpb25Db250ZXh0JzsgLy8gSW1wb3J0IHVzZUFwcGxpY2F0aW9uc1xyXG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSAndGFpbHdpbmQtbWVyZ2UnO1xyXG5cclxuaW50ZXJmYWNlIEFwcGxpY2F0aW9uVGFibGVQcm9wcyB7XHJcbiAgYXBwbGljYXRpb25zOiBBcHBsaWNhdGlvbltdO1xyXG4gIHNlYXJjaFRlcm06IHN0cmluZztcclxuICBzZXRTZWFyY2hUZXJtOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcclxufVxyXG5cclxuY29uc3QgQXBwbGljYXRpb25UYWJsZTogUmVhY3QuRkM8QXBwbGljYXRpb25UYWJsZVByb3BzPiA9ICh7IGFwcGxpY2F0aW9ucywgc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSB9KSA9PiB7XHJcbiAgY29uc3QgeyBkZWxldGVBcHBsaWNhdGlvbiB9ID0gdXNlQXBwbGljYXRpb25zKCk7IC8vIFVzZSBkZWxldGVBcHBsaWNhdGlvbiBmcm9tIGNvbnRleHRcclxuXHJcbiAgLy8gSGFuZGxlIHRoZSBkZWxldGUgYnV0dG9uIGNsaWNrXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGFwcGxpY2F0aW9uPycpKSB7XHJcbiAgICAgIGRlbGV0ZUFwcGxpY2F0aW9uKGlkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMCBzaGFkb3ctbGdcIj5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtZDppdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItMFwiPlxyXG4gICAgICAgICAgICBSZWNlbnQgQXBwbGljYXRpb25zXHJcbiAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1kOnctYXV0b1wiPlxyXG4gICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgdG9wLTIuNSBoLTQgdy00IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCIgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYXBwbGljYXRpb25zLi4uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC04IGJnLWdyYXktMTAwIGRhcms6YmctZ3JheS03MDAgYm9yZGVyLWdyYXktMzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIHctZnVsbCBtZDp3LWF1dG9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+Q29tcGFueTwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5Qb3NpdGlvbjwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5TdGF0dXM8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+TG9jYXRpb248L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPkRhdGUgQXBwbGllZDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+QWN0aW9uczwvVGFibGVIZWFkPiB7LyogQWRkIEFjdGlvbnMgSGVhZGVyICovfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XHJcbiAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAge2FwcGxpY2F0aW9ucy5tYXAoKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17YXBwbGljYXRpb24uX2lkfSBjbGFzc05hbWU9XCJob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2FwcGxpY2F0aW9uLmNvbXBhbnl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2FwcGxpY2F0aW9uLnBvc2l0aW9ufTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBjbGFzc05hbWU9e3R3TWVyZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYXBwbGljYXRpb24uc3RhdHVzID09PSAnYXBwbGllZCcgJiYgJ2JnLWJsdWUtNTAwIHRleHQtd2hpdGUnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGFwcGxpY2F0aW9uLnN0YXR1cyA9PT0gJ2ludGVydmlld2luZycgJiYgJ2JnLXllbGxvdy01MDAgdGV4dC13aGl0ZScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAoYXBwbGljYXRpb24uc3RhdHVzID09PSAnb2ZmZXJlZCcgJiYgJ2JnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlJykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgIChhcHBsaWNhdGlvbi5zdGF0dXMgPT09ICdyZWplY3RlZCcgJiYgJ2JnLXJlZC01MDAgdGV4dC13aGl0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YXBwbGljYXRpb24uc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPnthcHBsaWNhdGlvbi5sb2NhdGlvbn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+e25ldyBEYXRlKGFwcGxpY2F0aW9uLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGFwcGxpY2F0aW9uLl9pZCl9IC8vIENhbGwgaGFuZGxlRGVsZXRlIHdpdGggdGhlIGFwcGxpY2F0aW9uIElEXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgaG92ZXI6dGV4dC1yZWQtODAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwbGljYXRpb25UYWJsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VhcmNoSWNvbiIsIlRyYXNoSWNvbiIsIklucHV0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVIZWFkZXIiLCJUYWJsZVJvdyIsIkJhZGdlIiwiQnV0dG9uIiwidXNlQXBwbGljYXRpb25zIiwidHdNZXJnZSIsIkFwcGxpY2F0aW9uVGFibGUiLCJhcHBsaWNhdGlvbnMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImRlbGV0ZUFwcGxpY2F0aW9uIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJ3aW5kb3ciLCJjb25maXJtIiwiY2xhc3NOYW1lIiwiZGl2IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJtYXAiLCJhcHBsaWNhdGlvbiIsImNvbXBhbnkiLCJwb3NpdGlvbiIsInN0YXR1cyIsImxvY2F0aW9uIiwiRGF0ZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/ApplicationTable.tsx\n"));

/***/ })

});