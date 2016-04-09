/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Number = __webpack_require__(1);

	var _Number2 = _interopRequireDefault(_Number);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var All = function (_React$Component) {
		_inherits(All, _React$Component);

		function All() {
			_classCallCheck(this, All);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(All).apply(this, arguments));
		}

		_createClass(All, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'h2',
						null,
						'每一小時就有'
					),
					React.createElement(_Number2.default, { DataValue: 3600, Interval: 0.02 }),
					React.createElement(
						'h2',
						null,
						'秒過去。'
					)
				);
			}
		}]);

		return All;
	}(React.Component);

	ReactDOM.render(React.createElement(All, null), document.getElementById('container'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Number = function (_React$Component) {
		_inherits(Number, _React$Component);

		function Number() {
			_classCallCheck(this, Number);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Number).call(this));

			_this.state = { current: 2841, numClass: '' };
			return _this;
		}

		_createClass(Number, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				var timer = setInterval(function () {
					if (_this2.props.DataValue == _this2.state.current) {
						clearInterval(timer);
					} else {
						_this2.setState({ current: _this2.state.current + 1 });
					}
				}, 1);
				var classTimer = setInterval(function () {
					if (_this2.props.DataValue == _this2.state.current) {
						clearInterval(classTimer);
					} else {
						var classNum = Math.floor(Math.random() * 4);
						switch (classNum) {
							case 0:
								_this2.setState({ numClass: ' left' });
								break;
							case 1:
								_this2.setState({ numClass: ' top' });
								break;
							case 2:
								_this2.setState({ numClass: ' right' });
								break;
							default:
								_this2.setState({ numClass: ' bottom' });
								break;
						}
					}
				}, 100);
			}
		}, {
			key: 'handleClass',
			value: function handleClass() {
				return 'num' + this.state.numClass;
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'numBox' },
					React.createElement(
						'div',
						{ className: this.handleClass() },
						this.state.current
					)
				);
			}
		}]);

		return Number;
	}(React.Component);

	exports.default = Number;

/***/ }
/******/ ]);