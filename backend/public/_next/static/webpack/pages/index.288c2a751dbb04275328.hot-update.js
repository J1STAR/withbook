webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _recoil_book__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../recoil/book */ \"./recoil/book.ts\");\n/* harmony import */ var _components_Book__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Book */ \"./components/Book.tsx\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api */ \"./api/index.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/chanho/Desktop/chris/withbook/frontend/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"pages__Container\",\n  componentId: \"sc-1f2s933-0\"\n})([\"display:flex;width:100%;max-width:1320px;padding:40px;height:100%;flex-direction:column;align-items:center;.index-title{font-size:24px;}.book-add-container{input{margin-right:20px;}}.booklist-container{display:flex;flex-wrap:wrap;width:100%;.book-container{display:flex;background-color:#eeeeee;justify-content:space-between;border-radius:5px;width:200px;padding:5px 10px;margin:10px;&:hover{background-color:#eeeeee;}.book{display:flex;width:150px;word-break:break-all;justify-content:flex-start;}.book-delete-button{display:flex;height:25px;width:27px;margin-left:5px;background-color:#ffffff;border-radius:3px;padding:4px 8px;color:#ff5252;border:1px solid #ff5252;cursor:pointer;transition:color 200ms ease,background-color 200ms ease;&:hover{color:#ffd3d3;background-color:#ff5252;}}}}\"]);\n_c = Container;\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_6__[\"useRecoilState\"])(_recoil_book__WEBPACK_IMPORTED_MODULE_8__[\"bookListState\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_useRecoilState, 2),\n      bookList = _useRecoilState2[0],\n      setBookList = _useRecoilState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(''),\n      bookName = _useState[0],\n      setBookName = _useState[1];\n\n  var bookNameInput = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var addNewBook = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var newBook;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(bookNameInput.current.value === '')) {\n                _context.next = 2;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 2:\n              _context.next = 4;\n              return _api__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Book.addBook({\n                title: bookName.substr(0, 45)\n              });\n\n            case 4:\n              newBook = _context.sent;\n              setBookList([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(bookList), [newBook]));\n              bookNameInput.current.value = '';\n              setBookName('');\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addNewBook() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var setBookNameAction = function setBookNameAction(event) {\n    var newBookName = event.target.value;\n    setBookName(newBookName);\n  };\n\n  var initBook = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(function () {});\n  initBook.current = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    var res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _api__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Book.fetchAllBooks();\n\n          case 2:\n            res = _context2.sent;\n            setBookList(res);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {// initBook.current()\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h1\", {\n        children: \"WithBook\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      className: \"book-add-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n        ref: bookNameInput,\n        onChange: function onChange(e) {\n          return setBookNameAction(e);\n        },\n        placeholder: \"\\uCC45 \\uC81C\\uBAA9\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC694\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return addNewBook();\n        },\n        children: \"\\uC0C8 \\uCC45 \\uCD94\\uAC00\\uD558\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      className: \"booklist-container\",\n      children: bookList.map(function (book) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_components_Book__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          book: book\n        }, book.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 18\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"+pDmWb6ovEJ6IGXel8tlr6xDQgI=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_6__[\"useRecoilState\"]];\n});\n\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSG9tZSIsInVzZVJlY29pbFN0YXRlIiwiYm9va0xpc3RTdGF0ZSIsImJvb2tMaXN0Iiwic2V0Qm9va0xpc3QiLCJ1c2VTdGF0ZSIsImJvb2tOYW1lIiwic2V0Qm9va05hbWUiLCJib29rTmFtZUlucHV0IiwidXNlUmVmIiwiYWRkTmV3Qm9vayIsImN1cnJlbnQiLCJ2YWx1ZSIsIkFQSSIsIkJvb2siLCJhZGRCb29rIiwidGl0bGUiLCJzdWJzdHIiLCJuZXdCb29rIiwic2V0Qm9va05hbWVBY3Rpb24iLCJldmVudCIsIm5ld0Jvb2tOYW1lIiwidGFyZ2V0IiwiaW5pdEJvb2siLCJmZXRjaEFsbEJvb2tzIiwicmVzIiwidXNlRWZmZWN0IiwiZSIsIm1hcCIsImJvb2siLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4eEJBQWY7S0FBTUYsUztBQTBEUyxTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ0dDLDZEQUFjLENBQWFDLDBEQUFiLENBRGpCO0FBQUE7QUFBQSxNQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxXQURZOztBQUFBLGtCQUVHQyxzREFBUSxDQUFTLEVBQVQsQ0FGWDtBQUFBLE1BRXRCQyxRQUZzQjtBQUFBLE1BRVpDLFdBRlk7O0FBRzdCLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sQ0FBbUIsSUFBbkIsQ0FBNUI7O0FBQ0EsTUFBTUMsVUFBVTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNiRixhQUFhLENBQUNHLE9BQWQsQ0FBc0JDLEtBQXRCLEtBQWdDLEVBRG5CO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFFS0MsNkNBQUcsQ0FBQ0MsSUFBSixDQUFTQyxPQUFULENBQWlCO0FBQUVDLHFCQUFLLEVBQUVWLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixDQUFoQixFQUFtQixFQUFuQjtBQUFULGVBQWpCLENBRkw7O0FBQUE7QUFFWEMscUJBRlc7QUFHakJkLHlCQUFXLHdHQUFLRCxRQUFMLElBQWVlLE9BQWYsR0FBWDtBQUNBViwyQkFBYSxDQUFDRyxPQUFkLENBQXNCQyxLQUF0QixHQUE4QixFQUE5QjtBQUNBTCx5QkFBVyxDQUFDLEVBQUQsQ0FBWDs7QUFMaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkcsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFPQSxNQUFNUyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBMEM7QUFDbEUsUUFBTUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYVYsS0FBakM7QUFDQUwsZUFBVyxDQUFDYyxXQUFELENBQVg7QUFDRCxHQUhEOztBQUtBLE1BQU1FLFFBQVEsR0FBR2Qsb0RBQU0sQ0FBQyxZQUFNLENBQUUsQ0FBVCxDQUF2QjtBQUNBYyxVQUFRLENBQUNaLE9BQVQsaU1BQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0NFLDZDQUFHLENBQUNDLElBQUosQ0FBU1UsYUFBVCxFQUREOztBQUFBO0FBQ1hDLGVBRFc7QUFFakJyQix1QkFBVyxDQUFDcUIsR0FBRCxDQUFYOztBQUZpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFuQjtBQUtBQyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDRSxxRUFBQyxTQUFEO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUVsQixhQURQO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ21CLENBQUQ7QUFBQSxpQkFBT1IsaUJBQWlCLENBQUNRLENBQUQsQ0FBeEI7QUFBQSxTQUZaO0FBR0UsbUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1qQixVQUFVLEVBQWhCO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVlFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsZ0JBQ0dQLFFBQVEsQ0FBQ3lCLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDdEIsNEJBQU8scUVBQUMsd0RBQUQ7QUFBb0IsY0FBSSxFQUFFQTtBQUExQixXQUFXQSxJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQTdDdUI5QixJO1VBQ1VDLHFEOzs7TUFEVkQsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGJvb2tMaXN0U3RhdGUgfSBmcm9tICcuLi9yZWNvaWwvYm9vaydcbmltcG9ydCBCb29rIGZyb20gJy4uL2NvbXBvbmVudHMvQm9vaydcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpJ1xuaW1wb3J0IHR5cGUgeyBCb29rVHlwZSB9IGZyb20gJy4uL3R5cGVzJ1xuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTMyMHB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5pbmRleC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5ib29rLWFkZC1jb250YWluZXIge1xuICAgIGlucHV0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG4gIH1cblxuICAuYm9va2xpc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuYm9vay1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICAgICAgfVxuICAgICAgLmJvb2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuICAgICAgLmJvb2stZGVsZXRlLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgd2lkdGg6IDI3cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgY29sb3I6ICNmZjUyNTI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjUyNTI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZDNkMztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYm9va0xpc3QsIHNldEJvb2tMaXN0XSA9IHVzZVJlY29pbFN0YXRlPEJvb2tUeXBlW10+KGJvb2tMaXN0U3RhdGUpXG4gIGNvbnN0IFtib29rTmFtZSwgc2V0Qm9va05hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgY29uc3QgYm9va05hbWVJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKVxuICBjb25zdCBhZGROZXdCb29rID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChib29rTmFtZUlucHV0LmN1cnJlbnQudmFsdWUgPT09ICcnKSByZXR1cm5cbiAgICBjb25zdCBuZXdCb29rID0gYXdhaXQgQVBJLkJvb2suYWRkQm9vayh7IHRpdGxlOiBib29rTmFtZS5zdWJzdHIoMCwgNDUpIH0pXG4gICAgc2V0Qm9va0xpc3QoWy4uLmJvb2tMaXN0LCBuZXdCb29rXSlcbiAgICBib29rTmFtZUlucHV0LmN1cnJlbnQudmFsdWUgPSAnJ1xuICAgIHNldEJvb2tOYW1lKCcnKVxuICB9XG4gIGNvbnN0IHNldEJvb2tOYW1lQWN0aW9uID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG5ld0Jvb2tOYW1lID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgc2V0Qm9va05hbWUobmV3Qm9va05hbWUpXG4gIH1cblxuICBjb25zdCBpbml0Qm9vayA9IHVzZVJlZigoKSA9PiB7fSlcbiAgaW5pdEJvb2suY3VycmVudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBBUEkuQm9vay5mZXRjaEFsbEJvb2tzKClcbiAgICBzZXRCb29rTGlzdChyZXMpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGluaXRCb29rLmN1cnJlbnQoKVxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPldpdGhCb29rPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLWFkZC1jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtib29rTmFtZUlucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Qm9va05hbWVBY3Rpb24oZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLssYUg7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXG4gICAgICAgID48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZE5ld0Jvb2soKX0+7IOIIOyxhSDstpTqsIDtlZjquLA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAge2Jvb2tMaXN0Lm1hcCgoYm9vaykgPT4ge1xuICAgICAgICAgIHJldHVybiA8Qm9vayBrZXk9e2Jvb2suaWR9IGJvb2s9e2Jvb2t9IC8+XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})