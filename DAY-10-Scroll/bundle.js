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

	var _Test = __webpack_require__(1);

	var _Test2 = _interopRequireDefault(_Test);

	var _Ending = __webpack_require__(2);

	var _Ending2 = _interopRequireDefault(_Ending);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Space area
	var Space = function Space() {
		return React.createElement('div', { className: 'space' });
	};

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
					React.createElement(Space, null),
					React.createElement(_Test2.default, null),
					React.createElement(Space, null),
					React.createElement(_Ending2.default, null)
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

	var Test = function (_React$Component) {
		_inherits(Test, _React$Component);

		function Test() {
			_classCallCheck(this, Test);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Test).call(this));

			_this.state = { scroll: false };
			_this._handleScrollEvent = _this._handleScrollEvent.bind(_this);
			return _this;
		}

		_createClass(Test, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				window.addEventListener('scroll', this._handleScrollEvent);
			}
		}, {
			key: '_scrollClass',
			value: function _scrollClass() {
				var classname = 'test animated';
				if (this.state.scroll) {
					classname += ' flipInY';
				}

				return classname;
			}
		}, {
			key: '_handleScrollEvent',
			value: function _handleScrollEvent() {

				if (document.body.scrollTop >= document.getElementById('second').offsetTop - 200) {
					this.setState({ scroll: true });
					window.removeEventListener('scroll', this._handleScrollEvent);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ id: 'second', className: 'v-mid' },
					React.createElement(
						'div',
						{ className: this._scrollClass() },
						'React Test'
					)
				);
			}
		}]);

		return Test;
	}(React.Component);

	exports.default = Test;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Ending = function (_React$Component) {
		_inherits(Ending, _React$Component);

		function Ending() {
			_classCallCheck(this, Ending);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ending).call(this));

			_this.state = { scroll: false };
			_this._handleScrollEvent = _this._handleScrollEvent.bind(_this);
			return _this;
		}

		_createClass(Ending, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				window.addEventListener('scroll', this._handleScrollEvent);
			}
		}, {
			key: '_scrollClass',
			value: function _scrollClass() {
				return this.state.scroll ? 'animated rubberBand' : '';
			}
		}, {
			key: '_handleScrollEvent',
			value: function _handleScrollEvent() {

				if (document.body.scrollTop >= document.getElementById('ending').offsetTop - 200) {
					this.setState({ scroll: true });
					window.removeEventListener('scroll', this._handleScrollEvent);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ id: 'ending', className: 'v-mid' },
					React.createElement(
						'h1',
						{ className: this._scrollClass() },
						'Scroll Event'
					)
				);
			}
		}]);

		return Ending;
	}(React.Component);

	exports.default = Ending;

/***/ }
/******/ ]);