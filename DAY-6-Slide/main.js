"use strict";

var slidePic = [{ id: 1, file: "handkerchief.png" }, { id: 2, file: "creeper.png" }, { id: 3, file: "db690a9.png" }, { id: 4, file: "programmer.png" }];

var PicBox = React.createClass({
	displayName: "PicBox",

	handleWrapperClass: function handleWrapperClass() {
		return this.props.moveClass == null ? "pic-wrapper" : "pic-wrapper " + this.props.moveClass;
	},
	render: function render() {
		var imgTag = [];
		var currentPicId = this.props.currentPic;
		// prev
		var prevId = currentPicId == 1 ? this.props.slidePic.length : currentPicId - 1;
		var path = "images/" + this.props.slidePic[prevId - 1].file;
		imgTag.push(React.createElement("img", { src: path, key: prevId }));
		// current
		var path = "images/" + this.props.slidePic[currentPicId - 1].file;
		imgTag.push(React.createElement("img", { src: path, key: currentPicId }));
		// next
		var nextId = currentPicId == this.props.slidePic.length ? 1 : currentPicId + 1;
		var path = "images/" + this.props.slidePic[nextId - 1].file;
		imgTag.push(React.createElement("img", { src: path, key: nextId }));

		return React.createElement(
			"div",
			{ className: "pic-box" },
			React.createElement(
				"div",
				{ className: this.handleWrapperClass() },
				imgTag
			)
		);
	}
});

var Controller = React.createClass({
	displayName: "Controller",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "controller" },
			React.createElement(
				"div",
				{ className: "arrow left", onClick: this.props.onClick.bind(null, "prev") },
				React.createElement("img", { src: "images/left-arrow.png" })
			),
			React.createElement(
				"div",
				{ className: "arrow right", onClick: this.props.onClick.bind(null, "next") },
				React.createElement("img", { src: "images/left-arrow.png" })
			)
		);
	}
});

var DotsWrapper = React.createClass({
	displayName: "DotsWrapper",

	render: function render() {
		var dots = [];
		for (var i = 0; i < this.props.sliderNumber; i++) {
			var dotClass = i == this.props.currentPic - 1 ? "dot active" : "dot";
			dots.push(React.createElement("div", { className: dotClass }));
		}
		return React.createElement(
			"div",
			{ className: "dots-wrapper" },
			dots
		);
	}
});

var Slide = React.createClass({
	displayName: "Slide",

	getInitialState: function getInitialState() {
		return {
			currentPicId: 1,
			slideMove: null
		};
	},
	handleSlide: function handleSlide(direction) {
		this.setState({ slideMove: direction });
		setTimeout(function () {
			var newPicId = this.state.currentPicId;
			if (direction == "prev") {
				newPicId = newPicId == 1 ? this.props.pic.length : newPicId - 1;
			} else {
				newPicId = newPicId == this.props.pic.length ? 1 : newPicId + 1;
			}
			this.setState({ currentPicId: newPicId, slideMove: null });
		}.bind(this), 700);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "slider" },
			React.createElement(PicBox, { moveClass: this.state.slideMove, slidePic: this.props.pic, currentPic: this.state.currentPicId }),
			React.createElement(Controller, { onClick: this.handleSlide }),
			React.createElement(DotsWrapper, { sliderNumber: this.props.pic.length, currentPic: this.state.currentPicId })
		);
	}
});

ReactDOM.render(React.createElement(Slide, { pic: slidePic }), document.getElementById('container'));