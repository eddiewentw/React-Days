'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

		_this.state = { focus: false, mail: '', btnClass: '' };
		_this.handleFocus = _this.handleFocus.bind(_this);
		_this.handleLostFocus = _this.handleLostFocus.bind(_this);
		_this.handleMail = _this.handleMail.bind(_this);
		_this.handleBtnClick = _this.handleBtnClick.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'focusClassName',
		value: function focusClassName() {
			return this.state.focus ? 'focused' : '';
		}
	}, {
		key: 'handleFocus',
		value: function handleFocus() {
			var _this2 = this;

			if (this.state.focus == false && this.state.btnClass != 'clicked') {
				console.log('click');
				this.setState({ focus: true }, function () {
					_this2.refs.mailInput.getDOMNode().focus();
				});
			}
		}
	}, {
		key: 'handleLostFocus',
		value: function handleLostFocus() {
			this.setState({ focus: false });
		}
	}, {
		key: 'handleMail',
		value: function handleMail(e) {
			this.setState({
				mail: e.target.value,
				btnClass: e.target.value != '' ? 'clickable' : ''
			});
		}
	}, {
		key: 'btnClassName',
		value: function btnClassName() {
			return 'btn ' + this.state.btnClass;
		}
	}, {
		key: 'handleBtnClick',
		value: function handleBtnClick() {
			if (this.state.btnClass == 'clickable') {
				this.setState({ focus: true, btnClass: 'clicked' });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ id: 'subscribe', className: this.focusClassName(), onClick: this.handleFocus },
				React.createElement('input', { ref: 'mailInput', type: 'text', onBlur: this.handleLostFocus, onChange: this.handleMail }),
				React.createElement('div', { className: this.btnClassName(), onClick: this.handleBtnClick })
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));