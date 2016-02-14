class Rect extends React.Component {

	constructor() {
		super();
		this.mouseEnter = this.mouseEnter.bind(this); // cool
		this.state = {
			rr: 0, gg: 0, aa: 0
		};
	}

	randomColor() {
		return parseInt(Math.random()*255);
	}

	mouseEnter() {
		this.setState({
			rr: this.randomColor(), gg: this.randomColor(), aa: this.randomColor()
		});
	}

	render() {
		var rectBackgroundStyle = { backgroundColor: "rgb( "+this.state.rr+", "+this.state.gg+", "+this.state.aa+" )" };
		return <div className="rect" onMouseEnter={this.mouseEnter} style={rectBackgroundStyle}></div>;
	}

}

class Playground extends React.Component {

	getCleanNumber(origin) {
		return parseInt( origin/100 )*100-100;
	}

	render() {
		var pgStyle = {
			width: this.getCleanNumber(document.width),
			height: this.getCleanNumber(document.height)
		};
		var Rects = [];
		for( var i = 0; i < pgStyle.width/100*pgStyle.height/100; i++ ) {
			Rects.push( <Rect /> );
		}
		return (
			<div id="playground" style={pgStyle}>
				{Rects}
			</div>
		);
	}

}

ReactDOM.render(
	<Playground />, document.getElementById('container')
);