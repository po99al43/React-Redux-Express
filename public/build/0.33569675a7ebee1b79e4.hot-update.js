webpackHotUpdate(0,{

/***/ 177:
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./public/javascripts/board/components/Header.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"header\",\n        null,\n        React.createElement(\n          \"h1\",\n          null,\n          this.props.title\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(React.Component);\n\nmodule.exports = Header;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 52)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTc3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3B1YmxpYy9qYXZhc2NyaXB0cy9ib2FyZC9jb21wb25lbnRzL0hlYWRlci5qcz9mNGIzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2phdmFzY3JpcHRzL2JvYXJkL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTs7OztBQVBBO0FBQ0E7QUFRQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 178:
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./public/javascripts/board/board.jsx ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 80);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Header = __webpack_require__(/*! ./components/Header */ 177);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// class HelloMessage extends React.Component {\n//   render() {\n//     return <div>Hello {this.props.name}</div>;\n//   }\n// }\n// ReactDOM.render(<HelloMessage name=\"Jane\" />,\n//   document.getElementById('main')\n// );\n//\n\nvar Board = function (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));\n  }\n\n  _createClass(Board, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'alert alert-info', role: 'alert' },\n        _react2.default.createElement(\n          'strong',\n          null,\n          'Heads up!'\n        ),\n        ' This alert needs your attention, but it\\'s not super important.'\n      );\n    }\n  }]);\n\n  return Board;\n}(_react2.default.Component);\n\n_reactDom2.default.render(_react2.default.createElement(_Header2.default, { title: '\\u7559\\u8A00\\u677F' }), document.getElementById('main'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTc4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3B1YmxpYy9qYXZhc2NyaXB0cy9ib2FyZC9ib2FyZC5qc3g/YWMwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcclxuLy8gY2xhc3MgSGVsbG9NZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICByZXR1cm4gPGRpdj5IZWxsbyB7dGhpcy5wcm9wcy5uYW1lfTwvZGl2PjtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gUmVhY3RET00ucmVuZGVyKDxIZWxsb01lc3NhZ2UgbmFtZT1cIkphbmVcIiAvPixcclxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXHJcbi8vICk7XHJcbi8vXHJcblxyXG5jbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPjxzdHJvbmc+SGVhZHMgdXAhPC9zdHJvbmc+IFRoaXMgYWxlcnQgbmVlZHMgeW91ciBhdHRlbnRpb24sIGJ1dCBpdCdzIG5vdCBzdXBlciBpbXBvcnRhbnQuPC9kaXY+O1xyXG4gIH1cclxufVxyXG5SZWFjdERPTS5yZW5kZXIoPEhlYWRlciB0aXRsZT1cIueVmeiogOadv1wiIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcclxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2phdmFzY3JpcHRzL2JvYXJkL2JvYXJkLmpzeCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})