webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Book.tsx":
/*!*****************************!*\
  !*** ./components/Book.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ \"./api/index.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_book__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../recoil/book */ \"./recoil/book.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/chanho/Desktop/chris/withbook/frontend/components/Book.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Book__Container\",\n  componentId: \"r2v0q7-0\"\n})([\"display:flex;width:290px;height:360px;margin:20px;background:url(\", \");background-size:cover;background-repeat:no-repeat;background-position:center;background-color:#eeeeee;border-radius:5px;justify-content:space-between;position:relative;.book-info{position:absolute;bottom:0;width:100%;height:130px;display:flex;flex-direction:column;backdrop-filter:blur(15px);background-color:rgba(255,255,255,0.3);z-index:5;justify-content:center;align-items:center;&:hover{background-color:#eeeeee;}.book-title{display:flex;word-break:break-all;justify-content:flex-start;}.book-delete-button{display:flex;height:25px;width:27px;margin-left:5px;background-color:#ffffff;border-radius:3px;padding:4px 8px;color:#ff5252;border:1px solid #ff5252;cursor:pointer;transition:color 200ms ease,background-color 200ms ease;&:hover{color:#ffd3d3;background-color:#ff5252;}}}\"], function (props) {\n  return props.image;\n});\n_c = Container;\n\nvar Book = function Book(_ref) {\n  _s();\n\n  var book = _ref.book;\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_7__[\"useRecoilState\"])(_recoil_book__WEBPACK_IMPORTED_MODULE_8__[\"bookListState\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useRecoilState, 2),\n      bookList = _useRecoilState2[0],\n      setBookList = _useRecoilState2[1];\n\n  var deleteBookAction = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n      var res, newBookList;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Book.deleteBook(id);\n\n            case 2:\n              res = _context.sent;\n\n              if (res > 0) {\n                newBookList = bookList.filter(function (book) {\n                  return book.id !== id;\n                });\n                setBookList(newBookList);\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function deleteBookAction(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(Container, {\n    image: book.image,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: \"book-info\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: \"book-title\",\n        children: book.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: \"book-updatedAd\",\n        children: book.updatedAt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: \"book-userId\",\n        children: book.userId\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n        className: \"book-delete-button\",\n        onClick: function onClick() {\n          return deleteBookAction(book.id);\n        },\n        children: \"X\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Book, \"ak0ireM7SxRTjKcGXNXte2XWzjM=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_7__[\"useRecoilState\"]];\n});\n\n_c2 = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Book\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rLnRzeD9iMmE0Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaW1hZ2UiLCJCb29rIiwiYm9vayIsInVzZVJlY29pbFN0YXRlIiwiYm9va0xpc3RTdGF0ZSIsImJvb2tMaXN0Iiwic2V0Qm9va0xpc3QiLCJkZWxldGVCb29rQWN0aW9uIiwiaWQiLCJBUEkiLCJkZWxldGVCb29rIiwicmVzIiwibmV3Qm9va0xpc3QiLCJmaWx0ZXIiLCJ0aXRsZSIsInVwZGF0ZWRBdCIsInVzZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsODFCQUtLLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQWpCO0FBQUEsQ0FMTCxDQUFmO0tBQU1KLFM7O0FBd0ROLElBQU1LLElBQXFCLEdBQUcsU0FBeEJBLElBQXdCLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsd0JBQ1ZDLDZEQUFjLENBQWFDLDBEQUFiLENBREo7QUFBQTtBQUFBLE1BQ25DQyxRQURtQztBQUFBLE1BQ3pCQyxXQUR5Qjs7QUFHMUMsTUFBTUMsZ0JBQWdCO0FBQUEsaU1BQUcsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTEMsNENBQUcsQ0FBQ1IsSUFBSixDQUFTUyxVQUFULENBQW9CRixFQUFwQixDQURLOztBQUFBO0FBQ2pCRyxpQkFEaUI7O0FBRXZCLGtCQUFJQSxHQUFHLEdBQUcsQ0FBVixFQUFhO0FBQ0xDLDJCQURLLEdBQ1NQLFFBQVEsQ0FBQ1EsTUFBVCxDQUFnQixVQUFDWCxJQUFEO0FBQUEseUJBQVVBLElBQUksQ0FBQ00sRUFBTCxLQUFZQSxFQUF0QjtBQUFBLGlCQUFoQixDQURUO0FBRVhGLDJCQUFXLENBQUNNLFdBQUQsQ0FBWDtBQUNEOztBQUxzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQkwsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQVFBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBVyxTQUFLLEVBQUVMLElBQUksQ0FBQ0YsS0FBdkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxrQkFBNkJFLElBQUksQ0FBQ1k7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsa0JBQWlDWixJQUFJLENBQUNhO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsa0JBQThCYixJQUFJLENBQUNjO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQ0UsaUJBQVMsRUFBQyxvQkFEWjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNVCxnQkFBZ0IsQ0FBQ0wsSUFBSSxDQUFDTSxFQUFOLENBQXRCO0FBQUEsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBMUJEOztHQUFNUCxJO1VBQzRCRSxxRDs7O01BRDVCRixJO0FBMkJTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQm9vay50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQm9va1R5cGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpJ1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgeyBib29rTGlzdFN0YXRlIH0gZnJvbSAnLi4vcmVjb2lsL2Jvb2snXG5cbnR5cGUgQ29udGFpbmVyUHJvcHMgPSB7XG4gIGltYWdlOiBzdHJpbmdcbn1cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8Q29udGFpbmVyUHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgYmFja2dyb3VuZDogdXJsKCR7KHByb3BzKSA9PiBwcm9wcy5pbWFnZX0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5ib29rLWluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICB6LWluZGV4OiA1O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgfVxuICAgIC5ib29rLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5ib29rLWRlbGV0ZS1idXR0b24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAyN3B4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgY29sb3I6ICNmZjUyNTI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY1MjUyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZkM2QzO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYFxudHlwZSBQcm9wcyA9IHtcbiAgYm9vaz86IEJvb2tUeXBlXG59XG5jb25zdCBCb29rOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBib29rIH0pID0+IHtcbiAgY29uc3QgW2Jvb2tMaXN0LCBzZXRCb29rTGlzdF0gPSB1c2VSZWNvaWxTdGF0ZTxCb29rVHlwZVtdPihib29rTGlzdFN0YXRlKVxuXG4gIGNvbnN0IGRlbGV0ZUJvb2tBY3Rpb24gPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFQSS5Cb29rLmRlbGV0ZUJvb2soaWQpXG4gICAgaWYgKHJlcyA+IDApIHtcbiAgICAgIGNvbnN0IG5ld0Jvb2tMaXN0ID0gYm9va0xpc3QuZmlsdGVyKChib29rKSA9PiBib29rLmlkICE9PSBpZClcbiAgICAgIHNldEJvb2tMaXN0KG5ld0Jvb2tMaXN0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpbWFnZT17Ym9vay5pbWFnZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2staW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stdGl0bGVcIj57Ym9vay50aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLXVwZGF0ZWRBZFwiPntib29rLnVwZGF0ZWRBdH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLXVzZXJJZFwiPntib29rLnVzZXJJZH08L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvb2stZGVsZXRlLWJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQm9va0FjdGlvbihib29rLmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIFhcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQm9va1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Book.tsx\n");

/***/ })

})