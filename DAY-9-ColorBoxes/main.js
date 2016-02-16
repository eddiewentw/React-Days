'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rect = function (_React$Component) {
	_inherits(Rect, _React$Component);

	function Rect() {
		_classCallCheck(this, Rect);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rect).call(this));

		_this.mouseEnter = _this.mouseEnter.bind(_this); // cool
		_this.state = {
			rr: 0, gg: 0, aa: 0
		};
		return _this;
	}

	_createClass(Rect, [{
		key: 'randomColor',
		value: function randomColor() {
			return parseInt(Math.random() * 255);
		}
	}, {
		key: 'mouseEnter',
		value: function mouseEnter() {
			this.setState({
				rr: this.randomColor(), gg: this.randomColor(), aa: this.randomColor()
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var rectBackgroundStyle = { backgroundColor: 'rgb( ' + this.state.rr + ', ' + this.state.gg + ', ' + this.state.aa + ' )' };
			return React.createElement('div', { className: 'rect', onMouseEnter: this.mouseEnter, onTouchEnd: this.mouseEnter, style: rectBackgroundStyle });
		}
	}]);

	return Rect;
}(React.Component);

var Playground = function (_React$Component2) {
	_inherits(Playground, _React$Component2);

	function Playground() {
		_classCallCheck(this, Playground);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Playground).apply(this, arguments));
	}

	_createClass(Playground, [{
		key: 'getCleanNumber',
		value: function getCleanNumber(origin) {
			return parseInt(origin / 100) * 100 - 100;
		}
	}, {
		key: 'render',
		value: function render() {
			var pgStyle = {
				width: this.getCleanNumber(document.width),
				height: this.getCleanNumber(document.height)
			};
			var Rects = [];
			for (var i = 0; i < pgStyle.width / 100 * pgStyle.height / 100; i++) {
				Rects.push(React.createElement(Rect, null));
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