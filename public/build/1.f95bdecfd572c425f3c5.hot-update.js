webpackHotUpdate(1,{

/***/ 179:
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./public/javascripts/life/life.jsx ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 80);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MyComponent = function (_React$Component) {\n  _inherits(MyComponent, _React$Component);\n\n  function MyComponent(props) {\n    _classCallCheck(this, MyComponent);\n\n    var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this, props));\n\n    console.log('constructor');\n    _this.handleClick = _this.handleClick.bind(_this);\n    _this.state = {\n      name: 'Mark'\n    };\n    return _this;\n  }\n\n  _createClass(MyComponent, [{\n    key: 'handleClick',\n    value: function handleClick() {\n      this.setState({ 'name': 'Zuck' });\n    }\n  }, {\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      console.log('componentWillMount');\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log('componentDidMount');\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps() {\n      console.log('componentWillReceiveProps');\n    }\n  }, {\n    key: 'componentWillUpdate',\n    value: function componentWillUpdate() {\n      console.log('componentWillUpdate');\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      console.log('componentDidUpdate');\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      console.log('componentWillUnmount');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { onClick: this.handleClick },\n        'Hi, ',\n        this.state.name\n      );\n    }\n  }]);\n\n  return MyComponent;\n}(_react2.default.Component);\n\n_reactDom2.default.render(_react2.default.createElement(MyComponent, null), document.getElementById('app'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3B1YmxpYy9qYXZhc2NyaXB0cy9saWZlL2xpZmUuanN4PzhmYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcicpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICdNYXJrJyxcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsnbmFtZSc6ICdadWNrJ30pO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbE1vdW50Jyk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NvbXBvbmVudERpZE1vdW50Jyk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NvbXBvbmVudFdpbGxVcGRhdGUnKTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NvbXBvbmVudERpZFVwZGF0ZScpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnRXaWxsVW5tb3VudCcpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkhpLCB7dGhpcy5zdGF0ZS5uYW1lfTwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8TXlDb21wb25lbnQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9qYXZhc2NyaXB0cy9saWZlL2xpZmUuanN4Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQU9BO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7OztBQWxDQTtBQUNBO0FBb0NBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})