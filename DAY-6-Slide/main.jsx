var slidePic = [
	{ id: 1, file: "handkerchief.png" },
	{ id: 2, file: "creeper.png" },
	{ id: 3, file: "db690a9.png" },
	{ id: 4, file: "programmer.png" }
];

var PicBox = React.createClass({
	handleWrapperClass: function() {
		return this.props.moveClass == null ? "pic-wrapper" : "pic-wrapper "+this.props.moveClass;
	},
	render: function() {
		var imgTag = [];
		var currentPicId = this.props.currentPic;
		// prev
		var prevId = currentPicId == 1 ? this.props.slidePic.length : currentPicId-1;
		var path = "images/"+this.props.slidePic[prevId-1].file;
		imgTag.push( <img src={path} key={prevId} /> );
		// current
		var path = "images/"+this.props.slidePic[currentPicId-1].file;
		imgTag.push( <img src={path} key={currentPicId} /> );
		// next
		var nextId = currentPicId == this.props.slidePic.length ? 1 : currentPicId+1;
		var path = "images/"+this.props.slidePic[nextId-1].file;
		imgTag.push( <img src={path} key={nextId} /> );

		return (
			<div className="pic-box">
				<div className={this.handleWrapperClass()}>
					{imgTag}
				</div>
			</div>
		);
	}
});

var Controller = React.createClass({
	render: function() {
		return (
			<div className="controller">
				<div className="arrow left" onClick={this.props.onClick.bind(null, "prev")}>
					<img src="images/left-arrow.png" />
				</div>
				<div className="arrow right" onClick={this.props.onClick.bind(null, "next")}>
					<img src="images/left-arrow.png" />
				</div>
			</div>
		);
	}
});

var DotsWrapper = React.createClass({
	render: function() {
		var dots = [];
		for( var i = 0; i < this.props.sliderNumber; i++ ) {
			var dotClass = i == this.props.currentPic-1 ? "dot active" : "dot";
			dots.push( <div className={dotClass}></div> );
		}
		return (
			<div className="dots-wrapper">
				{dots}
			</div>
		);
	}
});

var Slide = React.createClass({
	getInitialState: function() {
		return ({
			currentPicId: 1,
			slideMove: null
		});
	},
	handleSlide: function( direction ) {
		this.setState({ slideMove: direction });
		setTimeout( function(){
			var newPicId = this.state.currentPicId;
			if( direction == "prev" ) {
				newPicId = newPicId == 1 ? this.props.pic.length : newPicId-1;
			} else {
				newPicId = newPicId == this.props.pic.length ? 1 : newPicId+1;
			}
			this.setState({ currentPicId: newPicId, slideMove: null });
		}.bind(this), 700);
	},
	render: function() {
		return (
			<div className="slider">
				<PicBox moveClass={this.state.slideMove} slidePic={this.props.pic} currentPic={this.state.currentPicId} />
				<Controller onClick={this.handleSlide} />
				<DotsWrapper sliderNumber={this.props.pic.length} currentPic={this.state.currentPicId} />
			</div>
		);
	}
});

ReactDOM.render(
	<Slide pic={slidePic} />, document.getElementById('container')
);