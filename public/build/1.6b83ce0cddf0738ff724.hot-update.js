webpackHotUpdate(1,{

/***/ 190:
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./public/javascripts/chat/components/Header.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"header\",\n        null,\n        React.createElement(\n          \"h1\",\n          null,\n          this.props.title\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(React.Component);\n\nmodule.exports = Header;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 31)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3B1YmxpYy9qYXZhc2NyaXB0cy9jaGF0L2NvbXBvbmVudHMvSGVhZGVyLmpzPzFmNDIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvamF2YXNjcmlwdHMvY2hhdC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7Ozs7QUFQQTtBQUNBO0FBUUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 220:
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./public/javascripts/chat/containers/App.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Header = __webpack_require__(/*! ../components/Header */ 190);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Board = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./containers/Board\\\"\"); e.code = 'MODULE_NOT_FOUND';; throw e; }()));\n\nvar _Board2 = _interopRequireDefault(_Board);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_Header2.default, { title: '\\u7559\\u8A00\\u677F' }),\n        React.createElement(_Board2.default, null)\n      );\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nmodule.exports = App;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 31)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3B1YmxpYy9qYXZhc2NyaXB0cy9jaGF0L2NvbnRhaW5lcnMvQXBwLmpzPzk5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuL2NvbnRhaW5lcnMvQm9hcmQnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj48SGVhZGVyIHRpdGxlPVwi55WZ6KiA5p2/XCIgLz48Qm9hcmQgLz48L2Rpdj47XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvamF2YXNjcmlwdHMvY2hhdC9jb250YWluZXJzL0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFJQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})