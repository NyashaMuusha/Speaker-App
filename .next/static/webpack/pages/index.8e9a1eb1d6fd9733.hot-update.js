"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../speakerData */ \"./speakerData.js\");\nvar _this = undefined;\n\n\nvar IndexPage = function() {\n    var ref = _speakerData__WEBPACK_IMPORTED_MODULE_1__.data[0], id = ref.id, bio = ref.bio, first = ref.first, last = ref.last, favorite = ref.favorite, twitterHandle = ref.twitterHandle, company = ref.company, sessions = ref.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-xs-12 col-sm-122 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-height p-4 mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"contain-fit\",\n                            src: \"/images/speaker-$-{id}.jpg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n            lineNumber: 7,\n            columnNumber: 6\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQW9DO0FBRXBDLElBQU1DLFNBQVMsR0FBRyxXQUFNO0lBQ3RCLElBQW9FRCxHQUFPLEdBQVBBLGlEQUFPLEVBQXBFRSxFQUFFLEdBQTJERixHQUFPLENBQXBFRSxFQUFFLEVBQUNDLEdBQUcsR0FBdURILEdBQU8sQ0FBakVHLEdBQUcsRUFBQ0MsS0FBSyxHQUFpREosR0FBTyxDQUE3REksS0FBSyxFQUFDQyxJQUFJLEdBQTRDTCxHQUFPLENBQXZESyxJQUFJLEVBQUNDLFFBQVEsR0FBbUNOLEdBQU8sQ0FBbERNLFFBQVEsRUFBQ0MsYUFBYSxHQUFxQlAsR0FBTyxDQUF6Q08sYUFBYSxFQUFDQyxPQUFPLEdBQWFSLEdBQU8sQ0FBM0JRLE9BQU8sRUFBQ0MsUUFBUSxHQUFJVCxHQUFPLENBQW5CUyxRQUFRO0lBQ2hFLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx5QkFBeUI7a0JBQ3ZDLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxLQUFLO3NCQUNuQiw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDREQUE0RDswQkFDekUsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7OEJBQ3hDLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsNkVBQTZFO2tDQUMxRiw0RUFBQ0MsS0FBRzs0QkFDSkQsU0FBUyxFQUFDLGFBQWE7NEJBQ3ZCRSxHQUFHLEVBQUcsNEJBQTBCOzs7OztpQ0FDOUI7Ozs7OzZCQUNFOzs7Ozt5QkFDRjs7Ozs7cUJBQ0Y7Ozs7O2lCQUVEOzs7OzthQUNELENBQ1A7QUFDSCxDQUFDO0FBbkJLWixLQUFBQSxTQUFTO0FBb0JmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RhdGF9IGZyb20gJy4uL3NwZWFrZXJEYXRhJztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7aWQsYmlvLGZpcnN0LGxhc3QsZmF2b3JpdGUsdHdpdHRlckhhbmRsZSxjb21wYW55LHNlc3Npb25zfSA9IGRhdGFbMF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBzcGVha2Vycy1saXN0Jz5cbiAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIGNvbC1zbS0xMjIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwJz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY29udGFpbi1maXQnXG4gICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJC17aWR9LmpwZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sIm5hbWVzIjpbImRhdGEiLCJJbmRleFBhZ2UiLCJpZCIsImJpbyIsImZpcnN0IiwibGFzdCIsImZhdm9yaXRlIiwidHdpdHRlckhhbmRsZSIsImNvbXBhbnkiLCJzZXNzaW9ucyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});