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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../speakerData */ \"./speakerData.js\");\n\nvar _this = undefined;\n\n\nvar Session = function(param) {\n    var title = param.title, room = param.room;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = Session;\nvar Sessions = function(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, sessions[0]), void 0, false, {\n            fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Sessions;\nvar SpeakerImage = function(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = SpeakerImage;\nvar SpeakerDemographics = function(param) {\n    var first = param.first, last = param.last, bio = param.bio, twitterHandle = param.twitterHandle, favorite = param.favorite;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        bio,\n                        company,\n                        twitterHandle,\n                        favorite\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_c3 = SpeakerDemographics;\nvar IndexPage = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _speakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company1 = speaker.company, sessions = speaker.sessions;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-122 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-height p-4 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                                id: id,\n                                first: first,\n                                last: last\n                            }, void 0, false, {\n                                fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, speaker), void 0, false, {\n                                fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                                sessions: sessions\n                            }, void 0, false, {\n                                fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 15\n                    }, _this)\n                }, id, false, {\n                    fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/pages/index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_c4 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerDemographics\");\n$RefreshReg$(_c4, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVWLHFCQUNFLDhEQUFDQyxLQUFHO29CQUVGTCxTQUFTLEVBQUMsNERBQTREOzhCQUV0RSw0RUFBQ0ssS0FBRzt3QkFBQ0wsU0FBUyxFQUFDLDJCQUEyQjs7MENBQ3hDLDhEQUFDTSxZQUFZO2dDQUFDQyxFQUFFLEVBQUVBLEVBQUU7Z0NBQUVDLEtBQUssRUFBRUEsS0FBSztnQ0FBRUMsSUFBSSxFQUFFQSxJQUFJOzs7OztxQ0FBSTswQ0FDbEQsOERBQUNLLG1CQUFtQixxRkFBS1MsT0FBTzs7OztxQ0FBSTswQ0FFcEMsOERBQUNwQixRQUFRO2dDQUFDQyxRQUFRLEVBQUVBLFFBQVE7Ozs7O3FDQUFJOzs7Ozs7NkJBQzVCO21CQVJERyxFQUFFOzs7O3lCQVNILENBQ047WUFDSixDQUFDLENBQUM7Ozs7O2lCQUNFOzs7OzthQUNGLENBQ047QUFDSixDQUFDO0FBaENLYyxNQUFBQSxTQUFTO0FBaUNmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uL3NwZWFrZXJEYXRhXCI7XG5cbmNvbnN0IFNlc3Npb24gPSAoeyB0aXRsZSwgcm9vbSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxuICAgICAge3RpdGxlfVxuICAgICAgPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5jb25zdCBTZXNzaW9ucyA9ICh7IHNlc3Npb25zIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxuICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU3BlYWtlckltYWdlID0gKHsgaWQsIGZpcnN0LCBsYXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNwZWFrZXJEZW1vZ3JhcGhpY3MgPSAoe2ZpcnN0LGxhc3QsYmlvLHR3aXR0ZXJIYW5kbGUsZmF2b3JpdGV9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cbiAgICAgICAgICB7Zmlyc3R9XG4gICAgICAgICAge2xhc3R9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtiaW99XG4gICAgICAgICAge2NvbXBhbnl9XG4gICAgICAgICAge3R3aXR0ZXJIYW5kbGV9XG4gICAgICAgICAge2Zhdm9yaXRlfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7ZGF0YS5tYXAoKHNwZWFrZXIpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGJpbyxcbiAgICAgICAgICAgIGZpcnN0LFxuICAgICAgICAgICAgbGFzdCxcbiAgICAgICAgICAgIGZhdm9yaXRlLFxuICAgICAgICAgICAgdHdpdHRlckhhbmRsZSxcbiAgICAgICAgICAgIGNvbXBhbnksXG4gICAgICAgICAgICBzZXNzaW9ucyxcbiAgICAgICAgICB9ID0gc3BlYWtlcjtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XG4gICAgICAgICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cbiAgICAgICAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyB7Li4uc3BlYWtlcn0gLz5cblxuICAgICAgICAgICAgICAgIDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwibmFtZXMiOlsiZGF0YSIsIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsInR3aXR0ZXJIYW5kbGUiLCJmYXZvcml0ZSIsImgzIiwicCIsImNvbXBhbnkiLCJJbmRleFBhZ2UiLCJtYXAiLCJzcGVha2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});