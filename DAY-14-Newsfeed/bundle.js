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

	var _LeftColumn = __webpack_require__(1);

	var _LeftColumn2 = _interopRequireDefault(_LeftColumn);

	var _RightColumn = __webpack_require__(5);

	var _RightColumn2 = _interopRequireDefault(_RightColumn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	Parse.initialize("Y5Y5GWiu9OoS9hTAUUAXO6gJrM7Hdxf4uLapfpK6", "c4PlOlsrUoDxTT55AxALHRrNoEiLPf23o7SltcaT");
	var userInfo = {
		name: 'Eddie Wen',
		job: 'Developer'
	};

	var Newswall = function (_React$Component) {
		_inherits(Newswall, _React$Component);

		function Newswall() {
			_classCallCheck(this, Newswall);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Newswall).call(this));

			_this.state = { data: [] };

			var Newsfeed = Parse.Object.extend('Newsfeed_Prakhar');
			_this.Newsfeed = Newsfeed;

			_this.loadDataFromParse();
			_this.savePost = _this.savePost.bind(_this);
			return _this;
		}

		_createClass(Newswall, [{
			key: 'loadDataFromParse',
			value: function loadDataFromParse() {
				var _this2 = this;

				var query = new Parse.Query(this.Newsfeed);
				query.notEqualTo('user', '');
				query.descending('createdAt');

				query.find({
					success: function success(results) {
						_this2.setState({ data: results });
					},
					error: function error(_error) {
						console.log('ERROR: ' + _error);
					}
				});
			}
		}, {
			key: 'savePost',
			value: function savePost(content) {
				var _this3 = this;

				var newsFeed = new this.Newsfeed();
				newsFeed.save({
					user: this.props.user.name,
					job: this.props.user.job,
					like: 0,
					comment: 0,
					share: 0,
					content: content,
					timer: 'Just now'
				}, {
					success: function success(feed) {
						var newData = _this3.state.data;
						newData.splice(0, 0, feed);
						_this3.setState({ data: newData });
					},
					error: function error(feed, _error2) {
						alert('Failed to create new object, with error code: ' + _error2.message);
					}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ id: 'posts' },
					React.createElement(_LeftColumn2.default, { savePostMethod: this.savePost, user: this.props.user, data: this.state.data }),
					React.createElement(_RightColumn2.default, { data: this.state.data })
				);
			}
		}]);

		return Newswall;
	}(React.Component);

	ReactDOM.render(React.createElement(Newswall, { user: userInfo }), document.getElementById('react-container'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _PostBox = __webpack_require__(2);

	var _PostBox2 = _interopRequireDefault(_PostBox);

	var _Post = __webpack_require__(4);

	var _Post2 = _interopRequireDefault(_Post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LeftColumn = function (_React$Component) {
		_inherits(LeftColumn, _React$Component);

		function LeftColumn() {
			_classCallCheck(this, LeftColumn);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(LeftColumn).apply(this, arguments));
		}

		_createClass(LeftColumn, [{
			key: 'render',
			value: function render() {
				var postArray = [];
				if (this.props.data.length > 0) {
					postArray = this.props.data.map(function (data, index) {
						if (index % 2 == 1) {
							return React.createElement(_Post2.default, { postData: data, key: data._objCount });
						}
					});
				}
				return React.createElement(
					'div',
					{ className: 'column left' },
					React.createElement(_PostBox2.default, { savePostMethod: this.props.savePostMethod, user: this.props.user }),
					postArray
				);
			}
		}]);

		return LeftColumn;
	}(React.Component);

	exports.default = LeftColumn;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _PostArea = __webpack_require__(3);

	var _PostArea2 = _interopRequireDefault(_PostArea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PostBox = function (_React$Component) {
		_inherits(PostBox, _React$Component);

		function PostBox() {
			_classCallCheck(this, PostBox);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PostBox).call(this));

			_this.state = { content: '' };

			_this.handleTextareaChange = _this.handleTextareaChange.bind(_this);
			_this.handleSaveBtnClick = _this.handleSaveBtnClick.bind(_this);
			return _this;
		}

		_createClass(PostBox, [{
			key: 'handleTextareaChange',
			value: function handleTextareaChange(event) {
				this.setState({ content: event.target.value });
			}
		}, {
			key: 'handleSaveBtnClick',
			value: function handleSaveBtnClick() {
				this.props.savePostMethod(this.state.content);
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ id: 'input', className: 'post' },
					React.createElement(_PostArea2.default, { onChange: this.handleTextareaChange }),
					React.createElement(
						'div',
						{ className: 'tool-bar' },
						React.createElement(
							'div',
							{ className: 'icon' },
							React.createElement('i', { className: 'fa fa-picture-o' })
						),
						React.createElement(
							'div',
							{ className: 'icon' },
							React.createElement('i', { className: 'fa fa-video-camera' })
						),
						React.createElement(
							'div',
							{ className: 'icon' },
							React.createElement('i', { className: 'fa fa-map-marker' })
						),
						React.createElement(
							'div',
							{ className: 'share-btn', onClick: this.handleSaveBtnClick },
							'Share'
						)
					)
				);
			}
		}]);

		return PostBox;
	}(React.Component);

	exports.default = PostBox;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PostArea = function (_React$Component) {
		_inherits(PostArea, _React$Component);

		function PostArea() {
			_classCallCheck(this, PostArea);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(PostArea).apply(this, arguments));
		}

		_createClass(PostArea, [{
			key: 'handleAreaHeight',
			value: function handleAreaHeight(event) {
				var element = event.target;
				element.style.height = '5px';
				element.style.height = element.scrollHeight + 'px';
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement('textarea', { style: this.state, placeholder: 'Write Something...', onKeyUp: this.handleAreaHeight, onChange: this.props.onChange });
			}
		}]);

		return PostArea;
	}(React.Component);

	exports.default = PostArea;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Post = function (_React$Component) {
		_inherits(Post, _React$Component);

		function Post() {
			_classCallCheck(this, Post);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Post).call(this));

			_this.state = { LikeNumber: 0 };
			_this._handleLikeClick = _this._handleLikeClick.bind(_this);
			return _this;
		}

		_createClass(Post, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.setState({ LikeNumber: this.props.postData.get('like') });
			}
		}, {
			key: '_handleLikeClick',
			value: function _handleLikeClick() {
				var _this2 = this;

				this.setState({ LikeNumber: this.state.LikeNumber + 1 });

				var Newsfeed = Parse.Object.extend('Newsfeed_Prakhar');
				var query = new Parse.Query(Newsfeed);
				query.get(this.props.postData.id, {
					success: function success(post) {
						post.set('like', _this2.state.LikeNumber);
						post.save();
					}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var data = this.props.postData;
				var postContent = [];
				// Push text element
				postContent.push(React.createElement(
					'div',
					{ className: 'text', key: '1' },
					data.get('content')
				));
				// If there is image file, push it
				if (data.get('image') != undefined) {
					postContent.push(React.createElement(
						'div',
						{ className: 'picture', key: '2' },
						React.createElement('img', { src: 'images/posted/' + data.get('image') + '.png' })
					));
				}
				return React.createElement(
					'div',
					{ className: 'post', key: data._objCount },
					React.createElement(
						'div',
						{ className: 'owner' },
						React.createElement(
							'div',
							{ className: 'sticker' },
							React.createElement('img', { src: 'images/sticker/' + data.get('user') + '.png' })
						),
						React.createElement(
							'div',
							{ className: 'info' },
							React.createElement(
								'h4',
								null,
								data.get('user')
							),
							React.createElement(
								'div',
								{ className: 'job' },
								data.get('job')
							)
						),
						React.createElement(
							'div',
							{ className: 'time' },
							data.get('timer')
						)
					),
					React.createElement(
						'div',
						{ className: 'content' },
						postContent
					),
					React.createElement(
						'div',
						{ className: 'action-bar' },
						React.createElement(
							'div',
							{ className: 'action like', onClick: this._handleLikeClick },
							React.createElement('i', { className: 'fa fa-thumbs-up' }),
							React.createElement(
								'div',
								{ className: 'num' },
								this.state.LikeNumber
							)
						),
						React.createElement(
							'div',
							{ className: 'action comment' },
							React.createElement('i', { className: 'fa fa-comment' }),
							React.createElement(
								'div',
								{ className: 'num' },
								data.get('comment')
							)
						),
						React.createElement(
							'div',
							{ className: 'action share' },
							React.createElement('i', { className: 'fa fa-share-alt' }),
							React.createElement(
								'div',
								{ className: 'num' },
								data.get('share')
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'add-comment' },
						'Add Comment'
					)
				);
			}
		}]);

		return Post;
	}(React.Component);

	exports.default = Post;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Post = __webpack_require__(4);

	var _Post2 = _interopRequireDefault(_Post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RightColumn = function (_React$Component) {
		_inherits(RightColumn, _React$Component);

		function RightColumn() {
			_classCallCheck(this, RightColumn);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(RightColumn).apply(this, arguments));
		}

		_createClass(RightColumn, [{
			key: "render",
			value: function render() {
				var postArray = [];
				if (this.props.data.length > 0) {
					postArray = this.props.data.map(function (data, index) {
						if (index % 2 == 0) {
							return React.createElement(_Post2.default, { postData: data, key: data._objCount });
						}
					});
				}
				return React.createElement(
					"div",
					{ className: "column right" },
					postArray
				);
			}
		}]);

		return RightColumn;
	}(React.Component);

	exports.default = RightColumn;

/***/ }
/******/ ]);