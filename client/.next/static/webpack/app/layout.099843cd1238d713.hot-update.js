"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./context/applicationContext.js":
/*!***************************************!*\
  !*** ./context/applicationContext.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApplicationsProvider: function() { return /* binding */ ApplicationsProvider; },\n/* harmony export */   useApplications: function() { return /* binding */ useApplications; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./context/userContext.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n// Define the server URL\nconst serverUrl = \"http://localhost:8000/api/v1\";\n// Create the ApplicationsContext\nconst ApplicationsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ApplicationsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const userId = (0,_userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext)().user._id;\n    // State management\n    const [applications, setApplications] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [application, setApplication] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [isEditing, setIsEditing] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [statusFilter, setStatusFilter] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"all\");\n    const [activeApplication, setActiveApplication] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [modalMode, setModalMode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [profileModal, setProfileModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    // Open modal for adding a new application\n    const openModalForAdd = ()=>{\n        setModalMode(\"add\");\n        setIsEditing(true);\n        setApplication({});\n    };\n    // Open modal for editing an application\n    const openModalForEdit = (application)=>{\n        setModalMode(\"edit\");\n        setIsEditing(true);\n        setActiveApplication(application);\n    };\n    // Open profile modal\n    const openProfileModal = ()=>{\n        setProfileModal(true);\n    };\n    // Close modal\n    const closeModal = ()=>{\n        setIsEditing(false);\n        setProfileModal(false);\n        setModalMode(\"\");\n        setActiveApplication(null);\n        setApplication({});\n    };\n    // Get all applications\n    const getApplications = async ()=>{\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(serverUrl, \"/applications\"));\n            setApplications(response.data);\n        } catch (error) {\n            console.log(\"Error getting applications\", error);\n        } finally{\n            setLoading(false); // Ensure loading is set to false in the finally block\n        }\n    };\n    // Get a specific application\n    const getApplication = async (applicationId)=>{\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(serverUrl, \"/application/\").concat(applicationId));\n            setApplication(response.data);\n        } catch (error) {\n            console.log(\"Error getting application\", error);\n        }\n        setLoading(false);\n    };\n    const createApplication = async (application)=>{\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(serverUrl, \"/application/create\"), application);\n            console.log(\"Application created\", res.data);\n            setApplications([\n                ...applications,\n                res.data\n            ]);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Application created successfully\");\n        } catch (error) {\n            var _error_response_data, _error_response;\n            console.error(\"Error creating application:\", error); // Log the full error\n            // Show more detailed error message\n            const errorMessage = ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || \"An unexpected error occurred\";\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Error: \".concat(errorMessage));\n        } finally{\n            setLoading(false); // Ensure loading is set to false in the finally block\n        }\n    };\n    // Update an existing application\n    const updateApplication = async (application)=>{\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"\".concat(serverUrl, \"/application/\").concat(application._id), application);\n            // Update the application in the applications array\n            const newApplications = applications.map((app)=>{\n                return app._id === res.data._id ? res.data : app;\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Application updated successfully\");\n            setApplications(newApplications);\n        } catch (error) {\n            console.log(\"Error updating application\", error);\n        }\n    };\n    // Delete an application\n    const deleteApplication = async (applicationId)=>{\n        setLoading(true);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"\".concat(serverUrl, \"/application/\").concat(applicationId));\n            // Remove the application from the applications array\n            const newApplications = applications.filter((app)=>app._id !== applicationId);\n            setApplications(newApplications);\n        } catch (error) {\n            console.log(\"Error deleting application\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getApplications();\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApplicationsContext.Provider, {\n        value: {\n            applications,\n            loading,\n            application,\n            getApplication,\n            createApplication,\n            updateApplication,\n            deleteApplication,\n            getApplications,\n            statusFilter,\n            setStatusFilter,\n            handleInput,\n            isEditing,\n            setIsEditing,\n            openModalForAdd,\n            openModalForEdit,\n            activeApplication,\n            closeModal,\n            modalMode,\n            openProfileModal,\n            filteredApplications,\n            profileModal\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\context\\\\applicationContext.js\",\n        lineNumber: 145,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ApplicationsProvider, \"qFJdu0fZbkmiB0bRPE1ZD/UQ73g=\", false, function() {\n    return [\n        _userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext\n    ];\n});\n_c = ApplicationsProvider;\n// Custom hook to use the ApplicationsContext\nconst useApplications = ()=>{\n    _s1();\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ApplicationsContext);\n};\n_s1(useApplications, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ApplicationsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvYXBwbGljYXRpb25Db250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDOEI7QUFDVDtBQUNYO0FBRXBDLHdCQUF3QjtBQUN4QixNQUFNTSxZQUFZO0FBRWxCLGlDQUFpQztBQUNqQyxNQUFNQyxvQ0FBc0JMLG9EQUFhQTtBQUNsQyxNQUFNTSx1QkFBdUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQy9DLE1BQU1DLFNBQVNOLDREQUFjQSxHQUFHTyxJQUFJLENBQUNDLEdBQUc7SUFFeEMsbUJBQW1CO0lBQ25CLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdiLHFEQUFjLENBQUMsRUFBRTtJQUN6RCxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLHFEQUFjLENBQUM7SUFDN0MsTUFBTSxDQUFDaUIsYUFBYUMsZUFBZSxHQUFHbEIscURBQWMsQ0FBQyxDQUFDO0lBRXRELE1BQU0sQ0FBQ21CLFdBQVdDLGFBQWEsR0FBR3BCLHFEQUFjLENBQUM7SUFDakQsTUFBTSxDQUFDcUIsY0FBY0MsZ0JBQWdCLEdBQUd0QixxREFBYyxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ3VCLG1CQUFtQkMscUJBQXFCLEdBQUd4QixxREFBYyxDQUFDO0lBQ2pFLE1BQU0sQ0FBQ3lCLFdBQVdDLGFBQWEsR0FBRzFCLHFEQUFjLENBQUM7SUFDakQsTUFBTSxDQUFDMkIsY0FBY0MsZ0JBQWdCLEdBQUc1QixxREFBYyxDQUFDO0lBRXZELDBDQUEwQztJQUMxQyxNQUFNNkIsa0JBQWtCO1FBQ3RCSCxhQUFhO1FBQ2JOLGFBQWE7UUFDYkYsZUFBZSxDQUFDO0lBQ2xCO0lBRUEsd0NBQXdDO0lBQ3hDLE1BQU1ZLG1CQUFtQixDQUFDYjtRQUN4QlMsYUFBYTtRQUNiTixhQUFhO1FBQ2JJLHFCQUFxQlA7SUFDdkI7SUFFQSxxQkFBcUI7SUFDckIsTUFBTWMsbUJBQW1CO1FBQ3ZCSCxnQkFBZ0I7SUFDbEI7SUFFQSxjQUFjO0lBQ2QsTUFBTUksYUFBYTtRQUNqQlosYUFBYTtRQUNiUSxnQkFBZ0I7UUFDaEJGLGFBQWE7UUFDYkYscUJBQXFCO1FBQ3JCTixlQUFlLENBQUM7SUFDbEI7SUFFQSx1QkFBdUI7SUFDdkIsTUFBTWUsa0JBQWtCO1FBQ3RCakIsV0FBVztRQUNYLElBQUk7WUFDRixNQUFNa0IsV0FBVyxNQUFNbkMsNkNBQUtBLENBQUNvQyxHQUFHLENBQUMsR0FBYSxPQUFWOUIsV0FBVTtZQUM5Q1EsZ0JBQWdCcUIsU0FBU0UsSUFBSTtRQUMvQixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDLDhCQUE4QkY7UUFDNUMsU0FBVTtZQUNSckIsV0FBVyxRQUFRLHNEQUFzRDtRQUMzRTtJQUNGO0lBRUEsNkJBQTZCO0lBQzdCLE1BQU13QixpQkFBaUIsT0FBT0M7UUFDNUJ6QixXQUFXO1FBQ1gsSUFBSTtZQUNGLE1BQU1rQixXQUFXLE1BQU1uQyw2Q0FBS0EsQ0FBQ29DLEdBQUcsQ0FDOUIsR0FBNEJNLE9BQXpCcEMsV0FBVSxpQkFBNkIsT0FBZG9DO1lBRzlCdkIsZUFBZWdCLFNBQVNFLElBQUk7UUFDOUIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkJGO1FBQzNDO1FBQ0FyQixXQUFXO0lBQ2I7SUFFQSxNQUFNMEIsb0JBQW9CLE9BQU96QjtRQUMvQkQsV0FBVztRQUNYLElBQUk7WUFDRixNQUFNMkIsTUFBTSxNQUFNNUMsNkNBQUtBLENBQUM2QyxJQUFJLENBQUMsR0FBYSxPQUFWdkMsV0FBVSx3QkFBc0JZO1lBQ2hFcUIsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkksSUFBSVAsSUFBSTtZQUMzQ3ZCLGdCQUFnQjttQkFBSUQ7Z0JBQWMrQixJQUFJUCxJQUFJO2FBQUM7WUFDM0NoQyx1REFBS0EsQ0FBQ3lDLE9BQU8sQ0FBQztRQUNoQixFQUFFLE9BQU9SLE9BQU87Z0JBR09BLHNCQUFBQTtZQUZyQkMsUUFBUUQsS0FBSyxDQUFDLCtCQUErQkEsUUFBUSxxQkFBcUI7WUFDMUUsbUNBQW1DO1lBQ25DLE1BQU1TLGVBQWVULEVBQUFBLGtCQUFBQSxNQUFNSCxRQUFRLGNBQWRHLHVDQUFBQSx1QkFBQUEsZ0JBQWdCRCxJQUFJLGNBQXBCQywyQ0FBQUEscUJBQXNCVSxPQUFPLEtBQUk7WUFDdEQzQyx1REFBS0EsQ0FBQ2lDLEtBQUssQ0FBQyxVQUF1QixPQUFiUztRQUN4QixTQUFVO1lBQ1I5QixXQUFXLFFBQVEsc0RBQXNEO1FBQzNFO0lBQ0Y7SUFHQSxpQ0FBaUM7SUFDakMsTUFBTWdDLG9CQUFvQixPQUFPL0I7UUFDL0JELFdBQVc7UUFDWCxJQUFJO1lBQ0YsTUFBTTJCLE1BQU0sTUFBTTVDLDZDQUFLQSxDQUFDa0QsS0FBSyxDQUMzQixHQUE0QmhDLE9BQXpCWixXQUFVLGlCQUErQixPQUFoQlksWUFBWU4sR0FBRyxHQUMzQ007WUFHRixtREFBbUQ7WUFDbkQsTUFBTWlDLGtCQUFrQnRDLGFBQWF1QyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ3hDLE9BQU9BLElBQUl6QyxHQUFHLEtBQUtnQyxJQUFJUCxJQUFJLENBQUN6QixHQUFHLEdBQUdnQyxJQUFJUCxJQUFJLEdBQUdnQjtZQUMvQztZQUVBaEQsdURBQUtBLENBQUN5QyxPQUFPLENBQUM7WUFFZGhDLGdCQUFnQnFDO1FBQ2xCLEVBQUUsT0FBT2IsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUMsOEJBQThCRjtRQUM1QztJQUNGO0lBRUEsd0JBQXdCO0lBQ3hCLE1BQU1nQixvQkFBb0IsT0FBT1o7UUFDL0J6QixXQUFXO1FBQ1gsSUFBSTtZQUNGLE1BQU1qQiw2Q0FBS0EsQ0FBQ3VELE1BQU0sQ0FBQyxHQUE0QmIsT0FBekJwQyxXQUFVLGlCQUE2QixPQUFkb0M7WUFFL0MscURBQXFEO1lBQ3JELE1BQU1TLGtCQUFrQnRDLGFBQWEyQyxNQUFNLENBQ3pDLENBQUNILE1BQVFBLElBQUl6QyxHQUFHLEtBQUs4QjtZQUd2QjVCLGdCQUFnQnFDO1FBQ2xCLEVBQUUsT0FBT2IsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUMsOEJBQThCRjtRQUM1QztJQUNGO0lBSUFuQyxnREFBU0EsQ0FBQztRQUNSK0I7SUFDRixHQUFHO1FBQUN4QjtLQUFPO0lBRVgscUJBQ0UsOERBQUNILG9CQUFvQmtELFFBQVE7UUFDM0JDLE9BQU87WUFDTDdDO1lBQ0FHO1lBQ0FFO1lBQ0F1QjtZQUNBRTtZQUNBTTtZQUNBSztZQUNBcEI7WUFDQVo7WUFDQUM7WUFDQW9DO1lBQ0F2QztZQUNBQztZQUNBUztZQUNBQztZQUNBUDtZQUNBUztZQUNBUDtZQUNBTTtZQUNBNEI7WUFDQWhDO1FBQ0Y7a0JBRUNuQjs7Ozs7O0FBR1AsRUFBRTtHQWxLV0Q7O1FBQ0lKLHdEQUFjQTs7O0tBRGxCSTtBQW9LYiw2Q0FBNkM7QUFDdEMsTUFBTXFELGtCQUFrQjs7SUFDN0IsT0FBTzVELHVEQUFnQixDQUFDTTtBQUMxQixFQUFFO0lBRldzRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2FwcGxpY2F0aW9uQ29udGV4dC5qcz84ZmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSBcIi4vdXNlckNvbnRleHRcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbi8vIERlZmluZSB0aGUgc2VydmVyIFVSTFxuY29uc3Qgc2VydmVyVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxXCI7XG5cbi8vIENyZWF0ZSB0aGUgQXBwbGljYXRpb25zQ29udGV4dFxuY29uc3QgQXBwbGljYXRpb25zQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbnNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gdXNlVXNlckNvbnRleHQoKS51c2VyLl9pZDtcblxuICAvLyBTdGF0ZSBtYW5hZ2VtZW50XG4gIGNvbnN0IFthcHBsaWNhdGlvbnMsIHNldEFwcGxpY2F0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FwcGxpY2F0aW9uLCBzZXRBcHBsaWNhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXR1c0ZpbHRlciwgc2V0U3RhdHVzRmlsdGVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiYWxsXCIpO1xuICBjb25zdCBbYWN0aXZlQXBwbGljYXRpb24sIHNldEFjdGl2ZUFwcGxpY2F0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcm9maWxlTW9kYWwsIHNldFByb2ZpbGVNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gT3BlbiBtb2RhbCBmb3IgYWRkaW5nIGEgbmV3IGFwcGxpY2F0aW9uXG4gIGNvbnN0IG9wZW5Nb2RhbEZvckFkZCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbE1vZGUoXCJhZGRcIik7XG4gICAgc2V0SXNFZGl0aW5nKHRydWUpO1xuICAgIHNldEFwcGxpY2F0aW9uKHt9KTtcbiAgfTtcblxuICAvLyBPcGVuIG1vZGFsIGZvciBlZGl0aW5nIGFuIGFwcGxpY2F0aW9uXG4gIGNvbnN0IG9wZW5Nb2RhbEZvckVkaXQgPSAoYXBwbGljYXRpb24pID0+IHtcbiAgICBzZXRNb2RhbE1vZGUoXCJlZGl0XCIpO1xuICAgIHNldElzRWRpdGluZyh0cnVlKTtcbiAgICBzZXRBY3RpdmVBcHBsaWNhdGlvbihhcHBsaWNhdGlvbik7XG4gIH07XG5cbiAgLy8gT3BlbiBwcm9maWxlIG1vZGFsXG4gIGNvbnN0IG9wZW5Qcm9maWxlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0UHJvZmlsZU1vZGFsKHRydWUpO1xuICB9O1xuXG4gIC8vIENsb3NlIG1vZGFsXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICBzZXRQcm9maWxlTW9kYWwoZmFsc2UpO1xuICAgIHNldE1vZGFsTW9kZShcIlwiKTtcbiAgICBzZXRBY3RpdmVBcHBsaWNhdGlvbihudWxsKTtcbiAgICBzZXRBcHBsaWNhdGlvbih7fSk7XG4gIH07XG5cbiAgLy8gR2V0IGFsbCBhcHBsaWNhdGlvbnNcbiAgY29uc3QgZ2V0QXBwbGljYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke3NlcnZlclVybH0vYXBwbGljYXRpb25zYCk7XG4gICAgICBzZXRBcHBsaWNhdGlvbnMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBhcHBsaWNhdGlvbnNcIiwgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gRW5zdXJlIGxvYWRpbmcgaXMgc2V0IHRvIGZhbHNlIGluIHRoZSBmaW5hbGx5IGJsb2NrXG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCBhIHNwZWNpZmljIGFwcGxpY2F0aW9uXG4gIGNvbnN0IGdldEFwcGxpY2F0aW9uID0gYXN5bmMgKGFwcGxpY2F0aW9uSWQpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYCR7c2VydmVyVXJsfS9hcHBsaWNhdGlvbi8ke2FwcGxpY2F0aW9uSWR9YFxuICAgICAgKTtcblxuICAgICAgc2V0QXBwbGljYXRpb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBhcHBsaWNhdGlvblwiLCBlcnJvcik7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUFwcGxpY2F0aW9uID0gYXN5bmMgKGFwcGxpY2F0aW9uKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtzZXJ2ZXJVcmx9L2FwcGxpY2F0aW9uL2NyZWF0ZWAsIGFwcGxpY2F0aW9uKTtcbiAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbiBjcmVhdGVkJywgcmVzLmRhdGEpO1xuICAgICAgc2V0QXBwbGljYXRpb25zKFsuLi5hcHBsaWNhdGlvbnMsIHJlcy5kYXRhXSk7XG4gICAgICB0b2FzdC5zdWNjZXNzKCdBcHBsaWNhdGlvbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBhcHBsaWNhdGlvbjonLCBlcnJvcik7IC8vIExvZyB0aGUgZnVsbCBlcnJvclxuICAgICAgLy8gU2hvdyBtb3JlIGRldGFpbGVkIGVycm9yIG1lc3NhZ2VcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgIHRvYXN0LmVycm9yKGBFcnJvcjogJHtlcnJvck1lc3NhZ2V9YCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBFbnN1cmUgbG9hZGluZyBpcyBzZXQgdG8gZmFsc2UgaW4gdGhlIGZpbmFsbHkgYmxvY2tcbiAgICB9XG4gIH07XG4gIFxuXG4gIC8vIFVwZGF0ZSBhbiBleGlzdGluZyBhcHBsaWNhdGlvblxuICBjb25zdCB1cGRhdGVBcHBsaWNhdGlvbiA9IGFzeW5jIChhcHBsaWNhdGlvbikgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBhdGNoKFxuICAgICAgICBgJHtzZXJ2ZXJVcmx9L2FwcGxpY2F0aW9uLyR7YXBwbGljYXRpb24uX2lkfWAsXG4gICAgICAgIGFwcGxpY2F0aW9uXG4gICAgICApO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIGFwcGxpY2F0aW9uIGluIHRoZSBhcHBsaWNhdGlvbnMgYXJyYXlcbiAgICAgIGNvbnN0IG5ld0FwcGxpY2F0aW9ucyA9IGFwcGxpY2F0aW9ucy5tYXAoKGFwcCkgPT4ge1xuICAgICAgICByZXR1cm4gYXBwLl9pZCA9PT0gcmVzLmRhdGEuX2lkID8gcmVzLmRhdGEgOiBhcHA7XG4gICAgICB9KTtcblxuICAgICAgdG9hc3Quc3VjY2VzcyhcIkFwcGxpY2F0aW9uIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuXG4gICAgICBzZXRBcHBsaWNhdGlvbnMobmV3QXBwbGljYXRpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB1cGRhdGluZyBhcHBsaWNhdGlvblwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIERlbGV0ZSBhbiBhcHBsaWNhdGlvblxuICBjb25zdCBkZWxldGVBcHBsaWNhdGlvbiA9IGFzeW5jIChhcHBsaWNhdGlvbklkKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke3NlcnZlclVybH0vYXBwbGljYXRpb24vJHthcHBsaWNhdGlvbklkfWApO1xuXG4gICAgICAvLyBSZW1vdmUgdGhlIGFwcGxpY2F0aW9uIGZyb20gdGhlIGFwcGxpY2F0aW9ucyBhcnJheVxuICAgICAgY29uc3QgbmV3QXBwbGljYXRpb25zID0gYXBwbGljYXRpb25zLmZpbHRlcihcbiAgICAgICAgKGFwcCkgPT4gYXBwLl9pZCAhPT0gYXBwbGljYXRpb25JZFxuICAgICAgKTtcblxuICAgICAgc2V0QXBwbGljYXRpb25zKG5ld0FwcGxpY2F0aW9ucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZGVsZXRpbmcgYXBwbGljYXRpb25cIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBcHBsaWNhdGlvbnMoKTtcbiAgfSwgW3VzZXJJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcGxpY2F0aW9uc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGFwcGxpY2F0aW9ucyxcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgYXBwbGljYXRpb24sXG4gICAgICAgIGdldEFwcGxpY2F0aW9uLFxuICAgICAgICBjcmVhdGVBcHBsaWNhdGlvbixcbiAgICAgICAgdXBkYXRlQXBwbGljYXRpb24sXG4gICAgICAgIGRlbGV0ZUFwcGxpY2F0aW9uLFxuICAgICAgICBnZXRBcHBsaWNhdGlvbnMsIC8vIEVuc3VyZSB0aGlzIGlzIGluY2x1ZGVkIGhlcmVcbiAgICAgICAgc3RhdHVzRmlsdGVyLFxuICAgICAgICBzZXRTdGF0dXNGaWx0ZXIsXG4gICAgICAgIGhhbmRsZUlucHV0LFxuICAgICAgICBpc0VkaXRpbmcsXG4gICAgICAgIHNldElzRWRpdGluZyxcbiAgICAgICAgb3Blbk1vZGFsRm9yQWRkLFxuICAgICAgICBvcGVuTW9kYWxGb3JFZGl0LFxuICAgICAgICBhY3RpdmVBcHBsaWNhdGlvbixcbiAgICAgICAgY2xvc2VNb2RhbCxcbiAgICAgICAgbW9kYWxNb2RlLFxuICAgICAgICBvcGVuUHJvZmlsZU1vZGFsLFxuICAgICAgICBmaWx0ZXJlZEFwcGxpY2F0aW9ucyxcbiAgICAgICAgcHJvZmlsZU1vZGFsLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BcHBsaWNhdGlvbnNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuLy8gQ3VzdG9tIGhvb2sgdG8gdXNlIHRoZSBBcHBsaWNhdGlvbnNDb250ZXh0XG5leHBvcnQgY29uc3QgdXNlQXBwbGljYXRpb25zID0gKCkgPT4ge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChBcHBsaWNhdGlvbnNDb250ZXh0KTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VVc2VyQ29udGV4dCIsInRvYXN0Iiwic2VydmVyVXJsIiwiQXBwbGljYXRpb25zQ29udGV4dCIsIkFwcGxpY2F0aW9uc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VySWQiLCJ1c2VyIiwiX2lkIiwiYXBwbGljYXRpb25zIiwic2V0QXBwbGljYXRpb25zIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImFwcGxpY2F0aW9uIiwic2V0QXBwbGljYXRpb24iLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJzdGF0dXNGaWx0ZXIiLCJzZXRTdGF0dXNGaWx0ZXIiLCJhY3RpdmVBcHBsaWNhdGlvbiIsInNldEFjdGl2ZUFwcGxpY2F0aW9uIiwibW9kYWxNb2RlIiwic2V0TW9kYWxNb2RlIiwicHJvZmlsZU1vZGFsIiwic2V0UHJvZmlsZU1vZGFsIiwib3Blbk1vZGFsRm9yQWRkIiwib3Blbk1vZGFsRm9yRWRpdCIsIm9wZW5Qcm9maWxlTW9kYWwiLCJjbG9zZU1vZGFsIiwiZ2V0QXBwbGljYXRpb25zIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXBwbGljYXRpb24iLCJhcHBsaWNhdGlvbklkIiwiY3JlYXRlQXBwbGljYXRpb24iLCJyZXMiLCJwb3N0Iiwic3VjY2VzcyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1cGRhdGVBcHBsaWNhdGlvbiIsInBhdGNoIiwibmV3QXBwbGljYXRpb25zIiwibWFwIiwiYXBwIiwiZGVsZXRlQXBwbGljYXRpb24iLCJkZWxldGUiLCJmaWx0ZXIiLCJQcm92aWRlciIsInZhbHVlIiwiaGFuZGxlSW5wdXQiLCJmaWx0ZXJlZEFwcGxpY2F0aW9ucyIsInVzZUFwcGxpY2F0aW9ucyIsInVzZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/applicationContext.js\n"));

/***/ })

});