webpackHotUpdate(0,{

/***/ 178:
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./public/javascripts/board/board.jsx ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 80);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Header = __webpack_require__(/*! ./components/Header */ 177);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// class HelloMessage extends React.Component {\n//   render() {\n//     return <div>Hello {this.props.name}</div>;\n//   }\n// }\n// ReactDOM.render(<HelloMessage name=\"Jane\" />,\n//   document.getElementById('main')\n// );\n//\n\nvar Board = function (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));\n  }\n\n  _createClass(Board, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'alert alert-info', role: 'alert' },\n        _react2.default.createElement(\n          'strong',\n          null,\n          'Heads up!'\n        ),\n        ' This alert needs your attention, but it\\'s not super important.'\n      );\n    }\n  }]);\n\n  return Board;\n}(_react2.default.Component);\n\nvar Main = function (_React$Component2) {\n  _inherits(Main, _React$Component2);\n\n  function Main() {\n    _classCallCheck(this, Main);\n\n    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));\n  }\n\n  _createClass(Main, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(HeaderXXX, { title: '\\u7559\\u8A00\\u677F' }),\n        _react2.default.createElement(Board, null)\n      );\n    }\n  }]);\n\n  return Main;\n}(_react2.default.Component);\n\n_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('main'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTc4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3B1YmxpYy9qYXZhc2NyaXB0cy9ib2FyZC9ib2FyZC5qc3g/YWMwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEhlYWRlclhYIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG4vLyBjbGFzcyBIZWxsb01lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIHJldHVybiA8ZGl2PkhlbGxvIHt0aGlzLnByb3BzLm5hbWV9PC9kaXY+O1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBSZWFjdERPTS5yZW5kZXIoPEhlbGxvTWVzc2FnZSBuYW1lPVwiSmFuZVwiIC8+LFxyXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcclxuLy8gKTtcclxuLy9cclxuXHJcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+PHN0cm9uZz5IZWFkcyB1cCE8L3N0cm9uZz4gVGhpcyBhbGVydCBuZWVkcyB5b3VyIGF0dGVudGlvbiwgYnV0IGl0J3Mgbm90IHN1cGVyIGltcG9ydGFudC48L2Rpdj47XHJcbiAgfVxyXG59XHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2PjxIZWFkZXJYWFggdGl0bGU9XCLnlZnoqIDmnb9cIiAvPjxCb2FyZCAvPjwvZGl2PjtcclxuICB9XHJcbn1cclxuUmVhY3RET00ucmVuZGVyKDxNYWluIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcclxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2phdmFzY3JpcHRzL2JvYXJkL2JvYXJkLmpzeCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})