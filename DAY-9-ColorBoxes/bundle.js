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

	var _Rect = __webpack_require__(1);

	var _Rect2 = _interopRequireDefault(_Rect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Playground = function (_React$Component) {
		_inherits(Playground, _React$Component);

		function Playground() {
			_classCallCheck(this, Playground);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Playground).apply(this, arguments));
		}

		_createClass(Playground, [{
			key: '_getCleanNumber',
			value: function _getCleanNumber(origin) {
				return parseInt(origin / 100) * 100 - 100;
			}
		}, {
			key: 'render',
			value: function render() {
				var pgStyle = {
					width: this._getCleanNumber(document.width),
					height: this._getCleanNumber(document.height)
				};
				var Rects = [];
				for (var i = 0; i < pgStyle.width / 100 * pgStyle.height / 100; i++) {
					Rects.push(React.createElement(_Rect2.default, { key: i }));
				}
				return React.createElement(
					'div',
					{ id: 'playground', style: pgStyle },
					Rects
				);
			}
		}]);

		return Playground;
	}(React.Component);

	ReactDOM.render(React.createElement(Playground, null), document.getElementById('container'));

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

	var Rect = function (_React$Component) {
		_inherits(Rect, _React$Component);

		function Rect() {
			_classCallCheck(this, Rect);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rect).call(this));

			_this._mouseEnter = _this._mouseEnter.bind(_this); // cool
			_this.state = {
				rr: 0, gg: 0, aa: 0
			};
			return _this;
		}

		_createClass(Rect, [{
			key: '_randomColor',
			value: function _randomColor() {
				return parseInt(Math.random() * 255);
			}
		}, {
			key: '_mouseEnter',
			value: function _mouseEnter() {
				this.setState({
					rr: this._randomColor(), gg: this._randomColor(), aa: this._randomColor()
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var rectBackgroundStyle = { backgroundColor: 'rgb( ' + this.state.rr + ', ' + this.state.gg + ', ' + this.state.aa + ' )' };
				return React.createElement('div', { className: 'rect', onMouseEnter: this._mouseEnter, onTouchEnd: this._mouseEnter, style: rectBackgroundStyle });
			}
		}]);

		return Rect;
	}(React.Component);

	exports.default = Rect;

/***/ }
/******/ ]);