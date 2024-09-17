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

/***/ "(app-pages-browser)/./context/applicationContext.js":
/*!***************************************!*\
  !*** ./context/applicationContext.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApplicationsProvider: function() { return /* binding */ ApplicationsProvider; },\n/* harmony export */   useApplications: function() { return /* binding */ useApplications; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./context/userContext.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n// Create the ApplicationsContext\nconst ApplicationsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Define the server URL\nconst serverUrl = \"http://localhost:8000/api/v1\";\nconst ApplicationsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const userId = (0,_userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext)().user._id;\n    // State management\n    const [applications, setApplications] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [application, setApplication] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({}); // Currently edited application\n    const [isEditing, setIsEditing] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [modalMode, setModalMode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [activeApplication, setActiveApplication] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const openModalForAdd = ()=>{\n        console.log(\"Opening modal for add\");\n        setModalMode(\"add\");\n        setIsEditing(true);\n        setApplication({});\n    };\n    const openModalForEdit = (application)=>{\n        console.log(\"Application to edit\", application);\n        setModalMode(\"edit\");\n        setIsEditing(true);\n        setApplication(application);\n        setActiveApplication(application);\n    };\n    const closeModal = ()=>{\n        setIsEditing(false);\n        setModalMode(\"\");\n        setActiveApplication(null);\n        setApplication({});\n    };\n    const handleInput = (name)=>(e)=>{\n            if (name === \"setApplication\") {\n                setApplication(e);\n            } else {\n                setApplication({\n                    ...application,\n                    [name]: e.target.value\n                });\n            }\n        };\n    // Get all applications\n    const getApplications = async ()=>{\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(serverUrl, \"/applications\"));\n            setApplications(response.data);\n        } catch (error) {\n            console.log(\"Error getting applications\", error);\n        } finally{\n            setLoading(false); // Ensure loading is set to false in the finally block\n        }\n    };\n    // Get a specific application\n    const getApplication = async (applicationId)=>{\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(serverUrl, \"/application/\").concat(applicationId));\n            setApplication(response.data);\n        } catch (error) {\n            console.log(\"Error getting application\", error);\n        }\n        setLoading(false);\n    };\n    const createApplication = async (application)=>{\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(serverUrl, \"/application/create\"), application);\n            console.log(\"Application created\", res.data);\n            setApplications([\n                ...applications,\n                res.data\n            ]);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Application created successfully\");\n        } catch (error) {\n            var _error_response_data, _error_response;\n            console.error(\"Error creating application:\", error); // Log the full error\n            // Show more detailed error message\n            const errorMessage = ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || \"An unexpected error occurred\";\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Error: \".concat(errorMessage));\n        } finally{\n            setLoading(false); // Ensure loading is set to false in the finally block\n        }\n    };\n    // Update an existing application\n    const updateApplication = async (application)=>{\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"\".concat(serverUrl, \"/application/\").concat(application._id), application);\n            // Update the application in the applications array\n            const newApplications = applications.map((app)=>{\n                return app._id === res.data._id ? res.data : app;\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Application updated successfully\");\n            setApplications(newApplications);\n        } catch (error) {\n            console.log(\"Error updating application\", error);\n        }\n        setLoading(false);\n    };\n    // Delete an application\n    const deleteApplication = async (applicationId)=>{\n        setLoading(true);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"\".concat(serverUrl, \"/application/\").concat(applicationId));\n            // Remove the application from the applications array\n            const newApplications = applications.filter((app)=>app._id !== applicationId);\n            setApplications(newApplications);\n        } catch (error) {\n            console.log(\"Error deleting application\", error);\n        }\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getApplications();\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApplicationsContext.Provider, {\n        value: {\n            applications,\n            loading,\n            application,\n            getApplication,\n            createApplication,\n            updateApplication,\n            deleteApplication,\n            setApplications,\n            getApplications,\n            openModalForAdd,\n            openModalForEdit,\n            closeModal,\n            handleInput,\n            isEditing,\n            modalMode,\n            activeApplication\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alext\\\\Desktop\\\\ApplicationTracker\\\\client\\\\context\\\\applicationContext.js\",\n        lineNumber: 146,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ApplicationsProvider, \"MGqABUKxIxN01h6eCJc+paXdJNY=\", false, function() {\n    return [\n        _userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext\n    ];\n});\n_c = ApplicationsProvider;\n// Custom hook to use the ApplicationsContext\nconst useApplications = ()=>{\n    _s1();\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ApplicationsContext);\n};\n_s1(useApplications, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ApplicationsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvYXBwbGljYXRpb25Db250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDOEI7QUFDVDtBQUNYO0FBRXBDLGlDQUFpQztBQUNqQyxNQUFNTSxvQ0FBc0JKLG9EQUFhQTtBQUV6Qyx3QkFBd0I7QUFDeEIsTUFBTUssWUFBWTtBQUVYLE1BQU1DLHVCQUF1QjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDL0MsTUFBTUMsU0FBU04sNERBQWNBLEdBQUdPLElBQUksQ0FBQ0MsR0FBRztJQUV4QyxtQkFBbUI7SUFDbkIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2IscURBQWMsQ0FBQyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIscURBQWMsQ0FBQztJQUM3QyxNQUFNLENBQUNpQixhQUFhQyxlQUFlLEdBQUdsQixxREFBYyxDQUFDLENBQUMsSUFBSSwrQkFBK0I7SUFFekYsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIscURBQWMsQ0FBQztJQUNqRCxNQUFNLENBQUNxQixXQUFXQyxhQUFhLEdBQUd0QixxREFBYyxDQUFDO0lBQ2pELE1BQU0sQ0FBQ3VCLG1CQUFtQkMscUJBQXFCLEdBQUd4QixxREFBYyxDQUFDO0lBRWpFLE1BQU15QixrQkFBa0I7UUFDdEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaTCxhQUFhO1FBQ2JGLGFBQWE7UUFDYkYsZUFBZSxDQUFDO0lBQ2xCO0lBRUEsTUFBTVUsbUJBQW1CLENBQUNYO1FBQ3hCUyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCVjtRQUNuQ0ssYUFBYTtRQUNiRixhQUFhO1FBQ2JGLGVBQWVEO1FBQ2ZPLHFCQUFxQlA7SUFDdkI7SUFFQSxNQUFNWSxhQUFhO1FBQ2pCVCxhQUFhO1FBQ2JFLGFBQWE7UUFDYkUscUJBQXFCO1FBQ3JCTixlQUFlLENBQUM7SUFDbEI7SUFFQSxNQUFNWSxjQUFjLENBQUNDLE9BQVMsQ0FB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OEI7WUFHdkI1QixnQkFBZ0JxQztRQUNsQixFQUFFLE9BQU9YLE9BQU87WUFDZGIsUUFBUUMsR0FBRyxDQUFDLDhCQUE4Qlk7UUFDNUM7UUFDQXZCLFdBQVc7SUFDYjtJQUVBZCxnREFBU0EsQ0FBQztRQUNSaUM7SUFDRixHQUFHO1FBQUMxQjtLQUFPO0lBRVgscUJBQ0UsOERBQUNKLG9CQUFvQm1ELFFBQVE7UUFDM0J0QixPQUFPO1lBQ0x0QjtZQUNBRztZQUNBRTtZQUNBdUI7WUFDQUU7WUFDQU07WUFDQUs7WUFDQXhDO1lBQ0FzQjtZQUNBVjtZQUNBRztZQUNBQztZQUNBQztZQUNBWDtZQUNBRTtZQUNBRTtRQUNGO2tCQUVDZjs7Ozs7O0FBR1AsRUFBRTtHQTdKV0Q7O1FBQ0lKLHdEQUFjQTs7O0tBRGxCSTtBQStKYiw2Q0FBNkM7QUFDdEMsTUFBTWtELGtCQUFrQjs7SUFDN0IsT0FBT3pELHVEQUFnQixDQUFDSztBQUMxQixFQUFFO0lBRldvRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2FwcGxpY2F0aW9uQ29udGV4dC5qcz84ZmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSBcIi4vdXNlckNvbnRleHRcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbi8vIENyZWF0ZSB0aGUgQXBwbGljYXRpb25zQ29udGV4dFxuY29uc3QgQXBwbGljYXRpb25zQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuLy8gRGVmaW5lIHRoZSBzZXJ2ZXIgVVJMXG5jb25zdCBzZXJ2ZXJVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjFcIjtcblxuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aW9uc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSB1c2VVc2VyQ29udGV4dCgpLnVzZXIuX2lkO1xuXG4gIC8vIFN0YXRlIG1hbmFnZW1lbnRcbiAgY29uc3QgW2FwcGxpY2F0aW9ucywgc2V0QXBwbGljYXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYXBwbGljYXRpb24sIHNldEFwcGxpY2F0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTsgLy8gQ3VycmVudGx5IGVkaXRlZCBhcHBsaWNhdGlvblxuXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb2RhbE1vZGUsIHNldE1vZGFsTW9kZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FjdGl2ZUFwcGxpY2F0aW9uLCBzZXRBY3RpdmVBcHBsaWNhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvcGVuTW9kYWxGb3JBZGQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJPcGVuaW5nIG1vZGFsIGZvciBhZGRcIik7XG4gICAgc2V0TW9kYWxNb2RlKFwiYWRkXCIpO1xuICAgIHNldElzRWRpdGluZyh0cnVlKTtcbiAgICBzZXRBcHBsaWNhdGlvbih7fSk7XG4gIH1cblxuICBjb25zdCBvcGVuTW9kYWxGb3JFZGl0ID0gKGFwcGxpY2F0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBcHBsaWNhdGlvbiB0byBlZGl0XCIsIGFwcGxpY2F0aW9uKTtcbiAgICBzZXRNb2RhbE1vZGUoXCJlZGl0XCIpO1xuICAgIHNldElzRWRpdGluZyh0cnVlKTtcbiAgICBzZXRBcHBsaWNhdGlvbihhcHBsaWNhdGlvbik7XG4gICAgc2V0QWN0aXZlQXBwbGljYXRpb24oYXBwbGljYXRpb24pO1xuICB9XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgIHNldE1vZGFsTW9kZShcIlwiKTtcbiAgICBzZXRBY3RpdmVBcHBsaWNhdGlvbihudWxsKTtcbiAgICBzZXRBcHBsaWNhdGlvbih7fSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVJbnB1dCA9IChuYW1lKSA9PiAoZSkgPT4ge1xuICAgIGlmIChuYW1lID09PSBcInNldEFwcGxpY2F0aW9uXCIpIHtcbiAgICAgIHNldEFwcGxpY2F0aW9uKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBcHBsaWNhdGlvbih7IC4uLmFwcGxpY2F0aW9uLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cbiAgfTtcbiAgXG4gIC8vIEdldCBhbGwgYXBwbGljYXRpb25zXG4gIGNvbnN0IGdldEFwcGxpY2F0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtzZXJ2ZXJVcmx9L2FwcGxpY2F0aW9uc2ApO1xuICAgICAgc2V0QXBwbGljYXRpb25zKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgYXBwbGljYXRpb25zXCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIEVuc3VyZSBsb2FkaW5nIGlzIHNldCB0byBmYWxzZSBpbiB0aGUgZmluYWxseSBibG9ja1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgYSBzcGVjaWZpYyBhcHBsaWNhdGlvblxuICBjb25zdCBnZXRBcHBsaWNhdGlvbiA9IGFzeW5jIChhcHBsaWNhdGlvbklkKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGAke3NlcnZlclVybH0vYXBwbGljYXRpb24vJHthcHBsaWNhdGlvbklkfWBcbiAgICAgICk7XG5cbiAgICAgIHNldEFwcGxpY2F0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgYXBwbGljYXRpb25cIiwgZXJyb3IpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVBcHBsaWNhdGlvbiA9IGFzeW5jIChhcHBsaWNhdGlvbikgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7c2VydmVyVXJsfS9hcHBsaWNhdGlvbi9jcmVhdGVgLCBhcHBsaWNhdGlvbik7XG4gICAgICBjb25zb2xlLmxvZygnQXBwbGljYXRpb24gY3JlYXRlZCcsIHJlcy5kYXRhKTtcbiAgICAgIHNldEFwcGxpY2F0aW9ucyhbLi4uYXBwbGljYXRpb25zLCByZXMuZGF0YV0pO1xuICAgICAgdG9hc3Quc3VjY2VzcygnQXBwbGljYXRpb24gY3JlYXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYXBwbGljYXRpb246JywgZXJyb3IpOyAvLyBMb2cgdGhlIGZ1bGwgZXJyb3JcbiAgICAgIC8vIFNob3cgbW9yZSBkZXRhaWxlZCBlcnJvciBtZXNzYWdlXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICB0b2FzdC5lcnJvcihgRXJyb3I6ICR7ZXJyb3JNZXNzYWdlfWApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gRW5zdXJlIGxvYWRpbmcgaXMgc2V0IHRvIGZhbHNlIGluIHRoZSBmaW5hbGx5IGJsb2NrXG4gICAgfVxuICB9O1xuICBcblxuICAvLyBVcGRhdGUgYW4gZXhpc3RpbmcgYXBwbGljYXRpb25cbiAgY29uc3QgdXBkYXRlQXBwbGljYXRpb24gPSBhc3luYyAoYXBwbGljYXRpb24pID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wYXRjaChcbiAgICAgICAgYCR7c2VydmVyVXJsfS9hcHBsaWNhdGlvbi8ke2FwcGxpY2F0aW9uLl9pZH1gLFxuICAgICAgICBhcHBsaWNhdGlvblxuICAgICAgKTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBhcHBsaWNhdGlvbiBpbiB0aGUgYXBwbGljYXRpb25zIGFycmF5XG4gICAgICBjb25zdCBuZXdBcHBsaWNhdGlvbnMgPSBhcHBsaWNhdGlvbnMubWFwKChhcHApID0+IHtcbiAgICAgICAgcmV0dXJuIGFwcC5faWQgPT09IHJlcy5kYXRhLl9pZCA/IHJlcy5kYXRhIDogYXBwO1xuICAgICAgfSk7XG5cbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJBcHBsaWNhdGlvbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcblxuICAgICAgc2V0QXBwbGljYXRpb25zKG5ld0FwcGxpY2F0aW9ucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgdXBkYXRpbmcgYXBwbGljYXRpb25cIiwgZXJyb3IpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICAvLyBEZWxldGUgYW4gYXBwbGljYXRpb25cbiAgY29uc3QgZGVsZXRlQXBwbGljYXRpb24gPSBhc3luYyAoYXBwbGljYXRpb25JZCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtzZXJ2ZXJVcmx9L2FwcGxpY2F0aW9uLyR7YXBwbGljYXRpb25JZH1gKTtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBhcHBsaWNhdGlvbiBmcm9tIHRoZSBhcHBsaWNhdGlvbnMgYXJyYXlcbiAgICAgIGNvbnN0IG5ld0FwcGxpY2F0aW9ucyA9IGFwcGxpY2F0aW9ucy5maWx0ZXIoXG4gICAgICAgIChhcHApID0+IGFwcC5faWQgIT09IGFwcGxpY2F0aW9uSWRcbiAgICAgICk7XG5cbiAgICAgIHNldEFwcGxpY2F0aW9ucyhuZXdBcHBsaWNhdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRlbGV0aW5nIGFwcGxpY2F0aW9uXCIsIGVycm9yKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBcHBsaWNhdGlvbnMoKTtcbiAgfSwgW3VzZXJJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcGxpY2F0aW9uc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGFwcGxpY2F0aW9ucyxcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgYXBwbGljYXRpb24sXG4gICAgICAgIGdldEFwcGxpY2F0aW9uLFxuICAgICAgICBjcmVhdGVBcHBsaWNhdGlvbixcbiAgICAgICAgdXBkYXRlQXBwbGljYXRpb24sXG4gICAgICAgIGRlbGV0ZUFwcGxpY2F0aW9uLFxuICAgICAgICBzZXRBcHBsaWNhdGlvbnMsXG4gICAgICAgIGdldEFwcGxpY2F0aW9ucywgLy8gRW5zdXJlIHRoaXMgaXMgaW5jbHVkZWQgaGVyZVxuICAgICAgICBvcGVuTW9kYWxGb3JBZGQsXG4gICAgICAgIG9wZW5Nb2RhbEZvckVkaXQsXG4gICAgICAgIGNsb3NlTW9kYWwsXG4gICAgICAgIGhhbmRsZUlucHV0LFxuICAgICAgICBpc0VkaXRpbmcsXG4gICAgICAgIG1vZGFsTW9kZSxcbiAgICAgICAgYWN0aXZlQXBwbGljYXRpb24sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcGxpY2F0aW9uc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG4vLyBDdXN0b20gaG9vayB0byB1c2UgdGhlIEFwcGxpY2F0aW9uc0NvbnRleHRcbmV4cG9ydCBjb25zdCB1c2VBcHBsaWNhdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KEFwcGxpY2F0aW9uc0NvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVVzZXJDb250ZXh0IiwidG9hc3QiLCJBcHBsaWNhdGlvbnNDb250ZXh0Iiwic2VydmVyVXJsIiwiQXBwbGljYXRpb25zUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJJZCIsInVzZXIiLCJfaWQiLCJhcHBsaWNhdGlvbnMiLCJzZXRBcHBsaWNhdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYXBwbGljYXRpb24iLCJzZXRBcHBsaWNhdGlvbiIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsIm1vZGFsTW9kZSIsInNldE1vZGFsTW9kZSIsImFjdGl2ZUFwcGxpY2F0aW9uIiwic2V0QWN0aXZlQXBwbGljYXRpb24iLCJvcGVuTW9kYWxGb3JBZGQiLCJjb25zb2xlIiwibG9nIiwib3Blbk1vZGFsRm9yRWRpdCIsImNsb3NlTW9kYWwiLCJoYW5kbGVJbnB1dCIsIm5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRBcHBsaWNhdGlvbnMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImdldEFwcGxpY2F0aW9uIiwiYXBwbGljYXRpb25JZCIsImNyZWF0ZUFwcGxpY2F0aW9uIiwicmVzIiwicG9zdCIsInN1Y2Nlc3MiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwidXBkYXRlQXBwbGljYXRpb24iLCJwYXRjaCIsIm5ld0FwcGxpY2F0aW9ucyIsIm1hcCIsImFwcCIsImRlbGV0ZUFwcGxpY2F0aW9uIiwiZGVsZXRlIiwiZmlsdGVyIiwiUHJvdmlkZXIiLCJ1c2VBcHBsaWNhdGlvbnMiLCJ1c2VDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/applicationContext.js\n"));

/***/ })

});