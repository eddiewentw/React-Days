'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Space area
var Space = function Space() {
	return React.createElement('div', { className: 'space' });
};

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

var Ending = function (_React$Component2) {
	_inherits(Ending, _React$Component2);

	function Ending() {
		_classCallCheck(this, Ending);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Ending).call(this));

		_this2.state = { scroll: false };
		_this2._handleScrollEvent = _this2._handleScrollEvent.bind(_this2);
		return _this2;
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

var All = function (_React$Component3) {
	_inherits(All, _React$Component3);

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
				React.createElement(Test, null),
				React.createElement(Space, null),
				React.createElement(Ending, null)
			);
		}
	}]);

	return All;
}(React.Component);

ReactDOM.render(React.createElement(All, null), document.getElementById('container'));