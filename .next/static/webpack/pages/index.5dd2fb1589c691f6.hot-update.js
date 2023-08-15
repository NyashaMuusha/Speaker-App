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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                lineNumber: 6,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, sessions[0]), void 0, false, {\n            fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    var favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: onFavoriteToggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this),\n            \" \",\n            \"Favorite\",\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    var speaker = param.speaker, showSessions = param.showSessions;\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, speaker), void 0, false, {\n                        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n                lineNumber: 87,\n                columnNumber: 31\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nip/Desktop/ReactWeek3/src/components/Speaker.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQywyQkFBMkI7O2tDQUN4Qyw4REFBQ00sWUFBWTt3QkFBQ0MsRUFBRSxFQUFFQSxFQUFFO3dCQUFFQyxLQUFLLEVBQUVBLEtBQUs7d0JBQUVDLElBQUksRUFBRUEsSUFBSTs7Ozs7NEJBQUk7a0NBQ2xELDhEQUFDVSxtQkFBbUIscUZBQUtTLE9BQU87Ozs7NEJBQUk7Ozs7OztvQkFDaEM7WUFDTEMsWUFBWSxLQUFLLElBQUksaUJBQUUsOERBQUMxQixRQUFRO2dCQUFDQyxRQUFRLEVBQUVBLFFBQVE7Ozs7O29CQUFJLEdBQUcsSUFBSTs7Ozs7O1lBRTNELENBQ047QUFDSixDQUFDO0FBWlF1QixNQUFBQSxPQUFPO0FBY2hCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2Vzc2lvbnMoeyBzZXNzaW9ucyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9uc1swXX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckltYWdlKHsgaWQsIGZpcnN0LCBsYXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckZhdm9yaXRlICh7ZmF2b3JpdGUsIG9uRmF2b3JpdGVUb2dnbGV9KXtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9uIHBhZEIxJz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgb25DbGljaz17b25GYXZvcml0ZVRvZ2dsZX0+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtmYXZvcml0ZSA9PT0gdHJ1ZT8gJ2ZhIGZhLXN0YXIgb3JhbmdlJyA6ICdmYSBmYS1zdGFyLW8gb3JhbmdlJ30vPlxuICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgRmF2b3JpdGV7JyAnfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3Moe1xuICBmaXJzdCxcbiAgbGFzdCxcbiAgYmlvLFxuICBjb21wYW55LFxuICB0d2l0dGVySGFuZGxlLFxuICBmYXZvcml0ZSxcbiAgb25GYXZvcml0ZVRvZ2dsZVxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNwZWFrZXJGYXZvcml0ZSBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfS8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XG4gICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XG4gICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cbiAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyKHsgc3BlYWtlciAsIHNob3dTZXNzaW9uc30pIHtcbiAgY29uc3QgeyBpZCwgZmlyc3QsIGxhc3QsIHNlc3Npb25zIH0gPSBzcGVha2VyO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cbiAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cbiAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3Mgey4uLnNwZWFrZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWU/IDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+IDogbnVsbH1cbiAgICAgIFxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwiU3BlYWtlckltYWdlIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsIlNwZWFrZXJGYXZvcml0ZSIsImZhdm9yaXRlIiwib25GYXZvcml0ZVRvZ2dsZSIsIm9uQ2xpY2siLCJpIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});