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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApplicationsProvider: function() { return /* binding */ ApplicationsProvider; },\n/* harmony export */   useApplications: function() { return /* binding */ useApplications; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./context/userContext.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n// Create the ApplicationsContext\nconst ApplicationsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Define the server URL\nconst serverUrl = \"http://localhost:8000/api/v1\";\nconst ApplicationsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const userId = (0,_userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext)().user._id;\n    // State management\n    const [applications, setApplications] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [application, setApplication] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [isEditing, setIsEditing] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [statusFilter, setStatusFilter] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"all\");\n    const [activeApplication, setActiveApplication] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [modalMode, setModalMode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [profileModal, setProfileModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    // Open modal for adding a new application\n    const openModalForAdd = ()=>{\n        setModalMode(\"add\");\n        setIsEditing(true);\n        setApplication({});\n    };\n    // Open modal for editing an application\n    const openModalForEdit = (application)=>{\n        setModalMode(\"edit\");\n        setIsEditing(true);\n        setActiveApplication(application);\n    };\n    // Open profile modal\n    const openProfileModal = ()=>{\n        setProfileModal(true);\n    };\n    // Close modal\n    const closeModal = ()=>{\n        setIsEditing(false);\n        setProfileModal(false);\n        setModalMode(\"\");\n        setActiveApplication(null);\n        setApplication({});\n    };\n    // Get all applications\n    const getApplications = async ()=>{\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(serverUrl, \"/applications\"));\n            setApplications(response.data);\n        } catch (error) {\n            console.log(\"Error getting applications\", error);\n        } finally{\n            setLoading(false); // Ensure loading is set to false in the finally block\n        }\n    };\n    // Get a specific application\n    const getApplication = async (applicationId)=>{\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(serverUrl, \"/application/\").concat(applicationId));\n            setApplication(response.data);\n        } catch (error) {\n            console.log(\"Error getting application\", error);\n        }\n        setLoading(false);\n    };\n    const createApplication = async (application)=>{\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(serverUrl, \"/application/create\"), application);\n            console.log(\"Application created\", res.data);\n            setApplications([\n                ...applications,\n                res.data\n            ]);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Application created successfully\");\n        } catch (error) {\n            var _error_response_data, _error_response;\n            console.error(\"Error creating application:\", error); // Log the full error\n            // Show more detailed error message\n            const errorMessage = ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || \"An unexpected error occurred\";\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Error: \".concat(errorMessage));\n        } finally{\n            setLoading(false); // Ensure loading is set to false in the finally block\n        }\n    };\n    // Update an existing application\n    const updateApplication = async (application)=>{\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"\".concat(serverUrl, \"/application/\").concat(application._id), application);\n            // Update the application in the applications array\n            const newApplications = applications.map((app)=>{\n                return app._id === res.data._id ? res.data : app;\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Application updated successfully\");\n            setApplications(newApplications);\n        } catch (error) {\n            console.log(\"Error updating application\", error);\n        }\n    };\n    // Delete an application\n    const deleteApplication = async (applicationId)=>{\n        setLoading(true);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"\".concat(serverUrl, \"/application/\").concat(applicationId));\n            // Remove the application from the applications array\n            const newApplications = applications.filter((app)=>app._id !== applicationId);\n            setApplications(newApplications);\n        } catch (error) {\n            console.log(\"Error deleting application\", error);\n        }\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getApplications();\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApplicationsContext.Provider, {\n        value: {\n            applications,\n            loading,\n            application,\n            getApplication,\n            createApplication,\n            updateApplication,\n            deleteApplication,\n            setApplications,\n            getApplications,\n            statusFilter,\n            setStatusFilter,\n            isEditing,\n            setIsEditing,\n            openModalForAdd,\n            openModalForEdit,\n            activeApplication,\n            closeModal,\n            modalMode,\n            openProfileModal,\n            profileModal\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\context\\\\applicationContext.js\",\n        lineNumber: 145,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ApplicationsProvider, \"qFJdu0fZbkmiB0bRPE1ZD/UQ73g=\", false, function() {\n    return [\n        _userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext\n    ];\n});\n_c = ApplicationsProvider;\n// Custom hook to use the ApplicationsContext\nconst useApplications = ()=>{\n    _s1();\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ApplicationsContext);\n};\n_s1(useApplications, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ApplicationsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvYXBwbGljYXRpb25Db250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDOEI7QUFDVDtBQUNYO0FBRXBDLGlDQUFpQztBQUNqQyxNQUFNTSxvQ0FBc0JKLG9EQUFhQTtBQUV6Qyx3QkFBd0I7QUFDeEIsTUFBTUssWUFBWTtBQUVYLE1BQU1DLHVCQUF1QjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDL0MsTUFBTUMsU0FBU04sNERBQWNBLEdBQUdPLElBQUksQ0FBQ0MsR0FBRztJQUV4QyxtQkFBbUI7SUFDbkIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2IscURBQWMsQ0FBQyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIscURBQWMsQ0FBQztJQUM3QyxNQUFNLENBQUNpQixhQUFhQyxlQUFlLEdBQUdsQixxREFBYyxDQUFDLENBQUM7SUFFdEQsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIscURBQWMsQ0FBQztJQUNqRCxNQUFNLENBQUNxQixjQUFjQyxnQkFBZ0IsR0FBR3RCLHFEQUFjLENBQUM7SUFDdkQsTUFBTSxDQUFDdUIsbUJBQW1CQyxxQkFBcUIsR0FBR3hCLHFEQUFjLENBQUM7SUFDakUsTUFBTSxDQUFDeUIsV0FBV0MsYUFBYSxHQUFHMUIscURBQWMsQ0FBQztJQUNqRCxNQUFNLENBQUMyQixjQUFjQyxnQkFBZ0IsR0FBRzVCLHFEQUFjLENBQUM7SUFFdkQsMENBQTBDO0lBQzFDLE1BQU02QixrQkFBa0I7UUFDdEJILGFBQWE7UUFDYk4sYUFBYTtRQUNiRixlQUFlLENBQUM7SUFDbEI7SUFFQSx3Q0FBd0M7SUFDeEMsTUFBTVksbUJBQW1CLENBQUNiO1FBQ3hCUyxhQUFhO1FBQ2JOLGFBQWE7UUFDYkkscUJBQXFCUDtJQUN2QjtJQUVBLHFCQUFxQjtJQUNyQixNQUFNYyxtQkFBbUI7UUFDdkJILGdCQUFnQjtJQUNsQjtJQUVBLGNB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Qyw4QkFBOEJGO1FBQzVDO1FBQ0FyQixXQUFXO0lBQ2I7SUFFQWQsZ0RBQVNBLENBQUM7UUFDUitCO0lBQ0YsR0FBRztRQUFDeEI7S0FBTztJQUVYLHFCQUNFLDhEQUFDSixvQkFBb0JtRCxRQUFRO1FBQzNCQyxPQUFPO1lBQ0w3QztZQUNBRztZQUNBRTtZQUNBdUI7WUFDQUU7WUFDQU07WUFDQUs7WUFDQXhDO1lBQ0FvQjtZQUNBWjtZQUNBQztZQUNBSDtZQUNBQztZQUNBUztZQUNBQztZQUNBUDtZQUNBUztZQUNBUDtZQUNBTTtZQUNBSjtRQUNGO2tCQUVDbkI7Ozs7OztBQUdQLEVBQUU7R0FoS1dEOztRQUNJSix3REFBY0E7OztLQURsQkk7QUFrS2IsNkNBQTZDO0FBQ3RDLE1BQU1tRCxrQkFBa0I7O0lBQzdCLE9BQU8xRCx1REFBZ0IsQ0FBQ0s7QUFDMUIsRUFBRTtJQUZXcUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hcHBsaWNhdGlvbkNvbnRleHQuanM/OGZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCIuL3VzZXJDb250ZXh0XCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG4vLyBDcmVhdGUgdGhlIEFwcGxpY2F0aW9uc0NvbnRleHRcbmNvbnN0IEFwcGxpY2F0aW9uc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbi8vIERlZmluZSB0aGUgc2VydmVyIFVSTFxuY29uc3Qgc2VydmVyVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxXCI7XG5cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbnNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gdXNlVXNlckNvbnRleHQoKS51c2VyLl9pZDtcblxuICAvLyBTdGF0ZSBtYW5hZ2VtZW50XG4gIGNvbnN0IFthcHBsaWNhdGlvbnMsIHNldEFwcGxpY2F0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FwcGxpY2F0aW9uLCBzZXRBcHBsaWNhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXR1c0ZpbHRlciwgc2V0U3RhdHVzRmlsdGVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiYWxsXCIpO1xuICBjb25zdCBbYWN0aXZlQXBwbGljYXRpb24sIHNldEFjdGl2ZUFwcGxpY2F0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbW9kYWxNb2RlLCBzZXRNb2RhbE1vZGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcm9maWxlTW9kYWwsIHNldFByb2ZpbGVNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gT3BlbiBtb2RhbCBmb3IgYWRkaW5nIGEgbmV3IGFwcGxpY2F0aW9uXG4gIGNvbnN0IG9wZW5Nb2RhbEZvckFkZCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbE1vZGUoXCJhZGRcIik7XG4gICAgc2V0SXNFZGl0aW5nKHRydWUpO1xuICAgIHNldEFwcGxpY2F0aW9uKHt9KTtcbiAgfTtcblxuICAvLyBPcGVuIG1vZGFsIGZvciBlZGl0aW5nIGFuIGFwcGxpY2F0aW9uXG4gIGNvbnN0IG9wZW5Nb2RhbEZvckVkaXQgPSAoYXBwbGljYXRpb24pID0+IHtcbiAgICBzZXRNb2RhbE1vZGUoXCJlZGl0XCIpO1xuICAgIHNldElzRWRpdGluZyh0cnVlKTtcbiAgICBzZXRBY3RpdmVBcHBsaWNhdGlvbihhcHBsaWNhdGlvbik7XG4gIH07XG5cbiAgLy8gT3BlbiBwcm9maWxlIG1vZGFsXG4gIGNvbnN0IG9wZW5Qcm9maWxlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0UHJvZmlsZU1vZGFsKHRydWUpO1xuICB9O1xuXG4gIC8vIENsb3NlIG1vZGFsXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICBzZXRQcm9maWxlTW9kYWwoZmFsc2UpO1xuICAgIHNldE1vZGFsTW9kZShcIlwiKTtcbiAgICBzZXRBY3RpdmVBcHBsaWNhdGlvbihudWxsKTtcbiAgICBzZXRBcHBsaWNhdGlvbih7fSk7XG4gIH07XG5cbiAgLy8gR2V0IGFsbCBhcHBsaWNhdGlvbnNcbiAgY29uc3QgZ2V0QXBwbGljYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke3NlcnZlclVybH0vYXBwbGljYXRpb25zYCk7XG4gICAgICBzZXRBcHBsaWNhdGlvbnMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBhcHBsaWNhdGlvbnNcIiwgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gRW5zdXJlIGxvYWRpbmcgaXMgc2V0IHRvIGZhbHNlIGluIHRoZSBmaW5hbGx5IGJsb2NrXG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCBhIHNwZWNpZmljIGFwcGxpY2F0aW9uXG4gIGNvbnN0IGdldEFwcGxpY2F0aW9uID0gYXN5bmMgKGFwcGxpY2F0aW9uSWQpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYCR7c2VydmVyVXJsfS9hcHBsaWNhdGlvbi8ke2FwcGxpY2F0aW9uSWR9YFxuICAgICAgKTtcblxuICAgICAgc2V0QXBwbGljYXRpb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBhcHBsaWNhdGlvblwiLCBlcnJvcik7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUFwcGxpY2F0aW9uID0gYXN5bmMgKGFwcGxpY2F0aW9uKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtzZXJ2ZXJVcmx9L2FwcGxpY2F0aW9uL2NyZWF0ZWAsIGFwcGxpY2F0aW9uKTtcbiAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbiBjcmVhdGVkJywgcmVzLmRhdGEpO1xuICAgICAgc2V0QXBwbGljYXRpb25zKFsuLi5hcHBsaWNhdGlvbnMsIHJlcy5kYXRhXSk7XG4gICAgICB0b2FzdC5zdWNjZXNzKCdBcHBsaWNhdGlvbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBhcHBsaWNhdGlvbjonLCBlcnJvcik7IC8vIExvZyB0aGUgZnVsbCBlcnJvclxuICAgICAgLy8gU2hvdyBtb3JlIGRldGFpbGVkIGVycm9yIG1lc3NhZ2VcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgIHRvYXN0LmVycm9yKGBFcnJvcjogJHtlcnJvck1lc3NhZ2V9YCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBFbnN1cmUgbG9hZGluZyBpcyBzZXQgdG8gZmFsc2UgaW4gdGhlIGZpbmFsbHkgYmxvY2tcbiAgICB9XG4gIH07XG4gIFxuXG4gIC8vIFVwZGF0ZSBhbiBleGlzdGluZyBhcHBsaWNhdGlvblxuICBjb25zdCB1cGRhdGVBcHBsaWNhdGlvbiA9IGFzeW5jIChhcHBsaWNhdGlvbikgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBhdGNoKFxuICAgICAgICBgJHtzZXJ2ZXJVcmx9L2FwcGxpY2F0aW9uLyR7YXBwbGljYXRpb24uX2lkfWAsXG4gICAgICAgIGFwcGxpY2F0aW9uXG4gICAgICApO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIGFwcGxpY2F0aW9uIGluIHRoZSBhcHBsaWNhdGlvbnMgYXJyYXlcbiAgICAgIGNvbnN0IG5ld0FwcGxpY2F0aW9ucyA9IGFwcGxpY2F0aW9ucy5tYXAoKGFwcCkgPT4ge1xuICAgICAgICByZXR1cm4gYXBwLl9pZCA9PT0gcmVzLmRhdGEuX2lkID8gcmVzLmRhdGEgOiBhcHA7XG4gICAgICB9KTtcblxuICAgICAgdG9hc3Quc3VjY2VzcyhcIkFwcGxpY2F0aW9uIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuXG4gICAgICBzZXRBcHBsaWNhdGlvbnMobmV3QXBwbGljYXRpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB1cGRhdGluZyBhcHBsaWNhdGlvblwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIERlbGV0ZSBhbiBhcHBsaWNhdGlvblxuICBjb25zdCBkZWxldGVBcHBsaWNhdGlvbiA9IGFzeW5jIChhcHBsaWNhdGlvbklkKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke3NlcnZlclVybH0vYXBwbGljYXRpb24vJHthcHBsaWNhdGlvbklkfWApO1xuXG4gICAgICAvLyBSZW1vdmUgdGhlIGFwcGxpY2F0aW9uIGZyb20gdGhlIGFwcGxpY2F0aW9ucyBhcnJheVxuICAgICAgY29uc3QgbmV3QXBwbGljYXRpb25zID0gYXBwbGljYXRpb25zLmZpbHRlcihcbiAgICAgICAgKGFwcCkgPT4gYXBwLl9pZCAhPT0gYXBwbGljYXRpb25JZFxuICAgICAgKTtcblxuICAgICAgc2V0QXBwbGljYXRpb25zKG5ld0FwcGxpY2F0aW9ucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZGVsZXRpbmcgYXBwbGljYXRpb25cIiwgZXJyb3IpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFwcGxpY2F0aW9ucygpO1xuICB9LCBbdXNlcklkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwbGljYXRpb25zQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgYXBwbGljYXRpb25zLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBhcHBsaWNhdGlvbixcbiAgICAgICAgZ2V0QXBwbGljYXRpb24sXG4gICAgICAgIGNyZWF0ZUFwcGxpY2F0aW9uLFxuICAgICAgICB1cGRhdGVBcHBsaWNhdGlvbixcbiAgICAgICAgZGVsZXRlQXBwbGljYXRpb24sXG4gICAgICAgIHNldEFwcGxpY2F0aW9ucyxcbiAgICAgICAgZ2V0QXBwbGljYXRpb25zLCAvLyBFbnN1cmUgdGhpcyBpcyBpbmNsdWRlZCBoZXJlXG4gICAgICAgIHN0YXR1c0ZpbHRlcixcbiAgICAgICAgc2V0U3RhdHVzRmlsdGVyLFxuICAgICAgICBpc0VkaXRpbmcsXG4gICAgICAgIHNldElzRWRpdGluZyxcbiAgICAgICAgb3Blbk1vZGFsRm9yQWRkLFxuICAgICAgICBvcGVuTW9kYWxGb3JFZGl0LFxuICAgICAgICBhY3RpdmVBcHBsaWNhdGlvbixcbiAgICAgICAgY2xvc2VNb2RhbCxcbiAgICAgICAgbW9kYWxNb2RlLFxuICAgICAgICBvcGVuUHJvZmlsZU1vZGFsLFxuICAgICAgICBwcm9maWxlTW9kYWwsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcGxpY2F0aW9uc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG4vLyBDdXN0b20gaG9vayB0byB1c2UgdGhlIEFwcGxpY2F0aW9uc0NvbnRleHRcbmV4cG9ydCBjb25zdCB1c2VBcHBsaWNhdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KEFwcGxpY2F0aW9uc0NvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVVzZXJDb250ZXh0IiwidG9hc3QiLCJBcHBsaWNhdGlvbnNDb250ZXh0Iiwic2VydmVyVXJsIiwiQXBwbGljYXRpb25zUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJJZCIsInVzZXIiLCJfaWQiLCJhcHBsaWNhdGlvbnMiLCJzZXRBcHBsaWNhdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYXBwbGljYXRpb24iLCJzZXRBcHBsaWNhdGlvbiIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInN0YXR1c0ZpbHRlciIsInNldFN0YXR1c0ZpbHRlciIsImFjdGl2ZUFwcGxpY2F0aW9uIiwic2V0QWN0aXZlQXBwbGljYXRpb24iLCJtb2RhbE1vZGUiLCJzZXRNb2RhbE1vZGUiLCJwcm9maWxlTW9kYWwiLCJzZXRQcm9maWxlTW9kYWwiLCJvcGVuTW9kYWxGb3JBZGQiLCJvcGVuTW9kYWxGb3JFZGl0Iiwib3BlblByb2ZpbGVNb2RhbCIsImNsb3NlTW9kYWwiLCJnZXRBcHBsaWNhdGlvbnMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRBcHBsaWNhdGlvbiIsImFwcGxpY2F0aW9uSWQiLCJjcmVhdGVBcHBsaWNhdGlvbiIsInJlcyIsInBvc3QiLCJzdWNjZXNzIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInVwZGF0ZUFwcGxpY2F0aW9uIiwicGF0Y2giLCJuZXdBcHBsaWNhdGlvbnMiLCJtYXAiLCJhcHAiLCJkZWxldGVBcHBsaWNhdGlvbiIsImRlbGV0ZSIsImZpbHRlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBcHBsaWNhdGlvbnMiLCJ1c2VDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/applicationContext.js\n"));

/***/ })

});