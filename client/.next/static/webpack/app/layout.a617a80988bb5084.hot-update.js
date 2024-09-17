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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApplicationsProvider: function() { return /* binding */ ApplicationsProvider; },\n/* harmony export */   useApplications: function() { return /* binding */ useApplications; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./context/userContext.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n// Create the ApplicationsContext\nconst ApplicationsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Define the server URL\nconst serverUrl = \"http://localhost:8000/api/v1\";\nconst ApplicationsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const userId = (0,_userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext)().user._id;\n    // State management\n    const [applications, setApplications] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [application, setApplication] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({}); // Currently edited application\n    const [isAddModalOpen, setIsAddModalOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false); // State for adding\n    const [isEditModalOpen, setIsEditModalOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false); // State for editing\n    // Open modal for adding a new application\n    const openModalForAdd = ()=>{\n        setIsAddModalOpen(true);\n        setApplication({});\n    };\n    // Open modal for editing an application\n    const openModalForEdit = (application)=>{\n        setIsEditModalOpen(true);\n        setApplication(application);\n    };\n    // Close modal\n    const closeModal = ()=>{\n        setIsAddModalOpen(false);\n        setIsEditModalOpen(false);\n        setApplication({});\n    };\n    // Get all applications\n    const getApplications = async ()=>{\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(serverUrl, \"/applications\"));\n            setApplications(response.data);\n        } catch (error) {\n            console.log(\"Error getting applications\", error);\n        } finally{\n            setLoading(false); // Ensure loading is set to false in the finally block\n        }\n    };\n    // Get a specific application\n    const getApplication = async (applicationId)=>{\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(serverUrl, \"/application/\").concat(applicationId));\n            setApplication(response.data);\n        } catch (error) {\n            console.log(\"Error getting application\", error);\n        }\n        setLoading(false);\n    };\n    const createApplication = async (application)=>{\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(serverUrl, \"/application/create\"), application);\n            console.log(\"Application created\", res.data);\n            setApplications([\n                ...applications,\n                res.data\n            ]);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Application created successfully\");\n        } catch (error) {\n            var _error_response_data, _error_response;\n            console.error(\"Error creating application:\", error); // Log the full error\n            // Show more detailed error message\n            const errorMessage = ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || \"An unexpected error occurred\";\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Error: \".concat(errorMessage));\n        } finally{\n            setLoading(false); // Ensure loading is set to false in the finally block\n        }\n    };\n    // Update an existing application\n    const updateApplication = async (application)=>{\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"\".concat(serverUrl, \"/application/\").concat(application._id), application);\n            // Update the application in the applications array\n            const newApplications = applications.map((app)=>{\n                return app._id === res.data._id ? res.data : app;\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Application updated successfully\");\n            setApplications(newApplications);\n        } catch (error) {\n            console.log(\"Error updating application\", error);\n        }\n    };\n    // Delete an application\n    const deleteApplication = async (applicationId)=>{\n        setLoading(true);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"\".concat(serverUrl, \"/application/\").concat(applicationId));\n            // Remove the application from the applications array\n            const newApplications = applications.filter((app)=>app._id !== applicationId);\n            setApplications(newApplications);\n        } catch (error) {\n            console.log(\"Error deleting application\", error);\n        }\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getApplications();\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApplicationsContext.Provider, {\n        value: {\n            applications,\n            loading,\n            application,\n            getApplication,\n            createApplication,\n            updateApplication,\n            deleteApplication,\n            setApplications,\n            getApplications,\n            openModalForAdd,\n            openModalForEdit,\n            closeModal,\n            isAddModalOpen,\n            isEditModalOpen\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\context\\\\applicationContext.js\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ApplicationsProvider, \"8VJeSEyrxeL77Hum8j6kBiZ7Swc=\", false, function() {\n    return [\n        _userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext\n    ];\n});\n_c = ApplicationsProvider;\n// Custom hook to use the ApplicationsContext\nconst useApplications = ()=>{\n    _s1();\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ApplicationsContext);\n};\n_s1(useApplications, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ApplicationsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvYXBwbGljYXRpb25Db250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDOEI7QUFDVDtBQUNYO0FBRXBDLGlDQUFpQztBQUNqQyxNQUFNTSxvQ0FBc0JKLG9EQUFhQTtBQUV6Qyx3QkFBd0I7QUFDeEIsTUFBTUssWUFBWTtBQUVYLE1BQU1DLHVCQUF1QjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDL0MsTUFBTUMsU0FBU04sNERBQWNBLEdBQUdPLElBQUksQ0FBQ0MsR0FBRztJQUV4QyxtQkFBbUI7SUFDbkIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2IscURBQWMsQ0FBQyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIscURBQWMsQ0FBQztJQUM3QyxNQUFNLENBQUNpQixhQUFhQyxlQUFlLEdBQUdsQixxREFBYyxDQUFDLENBQUMsSUFBSSwrQkFBK0I7SUFDekYsTUFBTSxDQUFDbUIsZ0JBQWdCQyxrQkFBa0IsR0FBR3BCLHFEQUFjLENBQUMsUUFBUSxtQkFBbUI7SUFDdEYsTUFBTSxDQUFDcUIsaUJBQWlCQyxtQkFBbUIsR0FBR3RCLHFEQUFjLENBQUMsUUFBUSxvQkFBb0I7SUFFekYsMENBQTBDO0lBQzFDLE1BQU11QixrQkFBa0I7UUFDdEJILGtCQUFrQjtRQUNsQkYsZUFBZSxDQUFDO0lBQ2xCO0lBRUEsd0NBQXdDO0lBQ3hDLE1BQU1NLG1CQUFtQixDQUFDUDtRQUN4QkssbUJBQW1CO1FBQ25CSixlQUFlRDtJQUNqQjtJQUVBLGNBQWM7SUFDZCxNQUFNUSxhQUFhO1FBQ2pCTCxrQkFBa0I7UUFDbEJFLG1CQUFtQjtRQUNuQkosZUFBZSxDQUFDO0lBQ2xCO0lBRUEsdUJBQXVCO0lBQ3ZCLE1BQU1RLGtCQUFrQjtRQUN0QlYsV0FBVztRQUNYLElBQUk7WUFDRixNQUFNVyxXQUFXLE1BQU01Qiw2Q0FBS0EsQ0FBQzZCLEdBQUcsQ0FBQyxHQUFh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WUFDQUU7UUFDRjtrQkFFQ2I7Ozs7OztBQUdQLEVBQUU7R0E3SVdEOztRQUNJSix3REFBY0E7OztLQURsQkk7QUErSWIsNkNBQTZDO0FBQ3RDLE1BQU00QyxrQkFBa0I7O0lBQzdCLE9BQU9uRCx1REFBZ0IsQ0FBQ0s7QUFDMUIsRUFBRTtJQUZXOEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hcHBsaWNhdGlvbkNvbnRleHQuanM/OGZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCIuL3VzZXJDb250ZXh0XCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG4vLyBDcmVhdGUgdGhlIEFwcGxpY2F0aW9uc0NvbnRleHRcbmNvbnN0IEFwcGxpY2F0aW9uc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbi8vIERlZmluZSB0aGUgc2VydmVyIFVSTFxuY29uc3Qgc2VydmVyVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxXCI7XG5cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbnNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gdXNlVXNlckNvbnRleHQoKS51c2VyLl9pZDtcblxuICAvLyBTdGF0ZSBtYW5hZ2VtZW50XG4gIGNvbnN0IFthcHBsaWNhdGlvbnMsIHNldEFwcGxpY2F0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FwcGxpY2F0aW9uLCBzZXRBcHBsaWNhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7IC8vIEN1cnJlbnRseSBlZGl0ZWQgYXBwbGljYXRpb25cbiAgY29uc3QgW2lzQWRkTW9kYWxPcGVuLCBzZXRJc0FkZE1vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7IC8vIFN0YXRlIGZvciBhZGRpbmdcbiAgY29uc3QgW2lzRWRpdE1vZGFsT3Blbiwgc2V0SXNFZGl0TW9kYWxPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTsgLy8gU3RhdGUgZm9yIGVkaXRpbmdcblxuICAvLyBPcGVuIG1vZGFsIGZvciBhZGRpbmcgYSBuZXcgYXBwbGljYXRpb25cbiAgY29uc3Qgb3Blbk1vZGFsRm9yQWRkID0gKCkgPT4ge1xuICAgIHNldElzQWRkTW9kYWxPcGVuKHRydWUpO1xuICAgIHNldEFwcGxpY2F0aW9uKHt9KTtcbiAgfTtcblxuICAvLyBPcGVuIG1vZGFsIGZvciBlZGl0aW5nIGFuIGFwcGxpY2F0aW9uXG4gIGNvbnN0IG9wZW5Nb2RhbEZvckVkaXQgPSAoYXBwbGljYXRpb24pID0+IHtcbiAgICBzZXRJc0VkaXRNb2RhbE9wZW4odHJ1ZSk7XG4gICAgc2V0QXBwbGljYXRpb24oYXBwbGljYXRpb24pO1xuICB9O1xuXG4gIC8vIENsb3NlIG1vZGFsXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNBZGRNb2RhbE9wZW4oZmFsc2UpO1xuICAgIHNldElzRWRpdE1vZGFsT3BlbihmYWxzZSk7XG4gICAgc2V0QXBwbGljYXRpb24oe30pO1xuICB9O1xuXG4gIC8vIEdldCBhbGwgYXBwbGljYXRpb25zXG4gIGNvbnN0IGdldEFwcGxpY2F0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtzZXJ2ZXJVcmx9L2FwcGxpY2F0aW9uc2ApO1xuICAgICAgc2V0QXBwbGljYXRpb25zKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgYXBwbGljYXRpb25zXCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIEVuc3VyZSBsb2FkaW5nIGlzIHNldCB0byBmYWxzZSBpbiB0aGUgZmluYWxseSBibG9ja1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgYSBzcGVjaWZpYyBhcHBsaWNhdGlvblxuICBjb25zdCBnZXRBcHBsaWNhdGlvbiA9IGFzeW5jIChhcHBsaWNhdGlvbklkKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGAke3NlcnZlclVybH0vYXBwbGljYXRpb24vJHthcHBsaWNhdGlvbklkfWBcbiAgICAgICk7XG5cbiAgICAgIHNldEFwcGxpY2F0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgYXBwbGljYXRpb25cIiwgZXJyb3IpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVBcHBsaWNhdGlvbiA9IGFzeW5jIChhcHBsaWNhdGlvbikgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7c2VydmVyVXJsfS9hcHBsaWNhdGlvbi9jcmVhdGVgLCBhcHBsaWNhdGlvbik7XG4gICAgICBjb25zb2xlLmxvZygnQXBwbGljYXRpb24gY3JlYXRlZCcsIHJlcy5kYXRhKTtcbiAgICAgIHNldEFwcGxpY2F0aW9ucyhbLi4uYXBwbGljYXRpb25zLCByZXMuZGF0YV0pO1xuICAgICAgdG9hc3Quc3VjY2VzcygnQXBwbGljYXRpb24gY3JlYXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYXBwbGljYXRpb246JywgZXJyb3IpOyAvLyBMb2cgdGhlIGZ1bGwgZXJyb3JcbiAgICAgIC8vIFNob3cgbW9yZSBkZXRhaWxlZCBlcnJvciBtZXNzYWdlXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICB0b2FzdC5lcnJvcihgRXJyb3I6ICR7ZXJyb3JNZXNzYWdlfWApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gRW5zdXJlIGxvYWRpbmcgaXMgc2V0IHRvIGZhbHNlIGluIHRoZSBmaW5hbGx5IGJsb2NrXG4gICAgfVxuICB9O1xuICBcblxuICAvLyBVcGRhdGUgYW4gZXhpc3RpbmcgYXBwbGljYXRpb25cbiAgY29uc3QgdXBkYXRlQXBwbGljYXRpb24gPSBhc3luYyAoYXBwbGljYXRpb24pID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wYXRjaChcbiAgICAgICAgYCR7c2VydmVyVXJsfS9hcHBsaWNhdGlvbi8ke2FwcGxpY2F0aW9uLl9pZH1gLFxuICAgICAgICBhcHBsaWNhdGlvblxuICAgICAgKTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBhcHBsaWNhdGlvbiBpbiB0aGUgYXBwbGljYXRpb25zIGFycmF5XG4gICAgICBjb25zdCBuZXdBcHBsaWNhdGlvbnMgPSBhcHBsaWNhdGlvbnMubWFwKChhcHApID0+IHtcbiAgICAgICAgcmV0dXJuIGFwcC5faWQgPT09IHJlcy5kYXRhLl9pZCA/IHJlcy5kYXRhIDogYXBwO1xuICAgICAgfSk7XG5cbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJBcHBsaWNhdGlvbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcblxuICAgICAgc2V0QXBwbGljYXRpb25zKG5ld0FwcGxpY2F0aW9ucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgdXBkYXRpbmcgYXBwbGljYXRpb25cIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyBEZWxldGUgYW4gYXBwbGljYXRpb25cbiAgY29uc3QgZGVsZXRlQXBwbGljYXRpb24gPSBhc3luYyAoYXBwbGljYXRpb25JZCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtzZXJ2ZXJVcmx9L2FwcGxpY2F0aW9uLyR7YXBwbGljYXRpb25JZH1gKTtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBhcHBsaWNhdGlvbiBmcm9tIHRoZSBhcHBsaWNhdGlvbnMgYXJyYXlcbiAgICAgIGNvbnN0IG5ld0FwcGxpY2F0aW9ucyA9IGFwcGxpY2F0aW9ucy5maWx0ZXIoXG4gICAgICAgIChhcHApID0+IGFwcC5faWQgIT09IGFwcGxpY2F0aW9uSWRcbiAgICAgICk7XG5cbiAgICAgIHNldEFwcGxpY2F0aW9ucyhuZXdBcHBsaWNhdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRlbGV0aW5nIGFwcGxpY2F0aW9uXCIsIGVycm9yKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBcHBsaWNhdGlvbnMoKTtcbiAgfSwgW3VzZXJJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcGxpY2F0aW9uc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGFwcGxpY2F0aW9ucyxcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgYXBwbGljYXRpb24sXG4gICAgICAgIGdldEFwcGxpY2F0aW9uLFxuICAgICAgICBjcmVhdGVBcHBsaWNhdGlvbixcbiAgICAgICAgdXBkYXRlQXBwbGljYXRpb24sXG4gICAgICAgIGRlbGV0ZUFwcGxpY2F0aW9uLFxuICAgICAgICBzZXRBcHBsaWNhdGlvbnMsXG4gICAgICAgIGdldEFwcGxpY2F0aW9ucywgLy8gRW5zdXJlIHRoaXMgaXMgaW5jbHVkZWQgaGVyZVxuICAgICAgICBvcGVuTW9kYWxGb3JBZGQsXG4gICAgICAgIG9wZW5Nb2RhbEZvckVkaXQsXG4gICAgICAgIGNsb3NlTW9kYWwsXG4gICAgICAgIGlzQWRkTW9kYWxPcGVuLFxuICAgICAgICBpc0VkaXRNb2RhbE9wZW4sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcGxpY2F0aW9uc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG4vLyBDdXN0b20gaG9vayB0byB1c2UgdGhlIEFwcGxpY2F0aW9uc0NvbnRleHRcbmV4cG9ydCBjb25zdCB1c2VBcHBsaWNhdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KEFwcGxpY2F0aW9uc0NvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVVzZXJDb250ZXh0IiwidG9hc3QiLCJBcHBsaWNhdGlvbnNDb250ZXh0Iiwic2VydmVyVXJsIiwiQXBwbGljYXRpb25zUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJJZCIsInVzZXIiLCJfaWQiLCJhcHBsaWNhdGlvbnMiLCJzZXRBcHBsaWNhdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYXBwbGljYXRpb24iLCJzZXRBcHBsaWNhdGlvbiIsImlzQWRkTW9kYWxPcGVuIiwic2V0SXNBZGRNb2RhbE9wZW4iLCJpc0VkaXRNb2RhbE9wZW4iLCJzZXRJc0VkaXRNb2RhbE9wZW4iLCJvcGVuTW9kYWxGb3JBZGQiLCJvcGVuTW9kYWxGb3JFZGl0IiwiY2xvc2VNb2RhbCIsImdldEFwcGxpY2F0aW9ucyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldEFwcGxpY2F0aW9uIiwiYXBwbGljYXRpb25JZCIsImNyZWF0ZUFwcGxpY2F0aW9uIiwicmVzIiwicG9zdCIsInN1Y2Nlc3MiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwidXBkYXRlQXBwbGljYXRpb24iLCJwYXRjaCIsIm5ld0FwcGxpY2F0aW9ucyIsIm1hcCIsImFwcCIsImRlbGV0ZUFwcGxpY2F0aW9uIiwiZGVsZXRlIiwiZmlsdGVyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUFwcGxpY2F0aW9ucyIsInVzZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/applicationContext.js\n"));

/***/ })

});