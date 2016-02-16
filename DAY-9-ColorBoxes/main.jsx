class Rect extends React.Component {

	constructor() {
		super();

		this._mouseEnter = this._mouseEnter.bind(this); // cool
		this.state = {
			rr: 0, gg: 0, aa: 0
		};
	}

	_randomColor() {
		return parseInt(Math.random()*255);
	}

	_mouseEnter() {
		this.setState({
			rr: this._randomColor(), gg: this._randomColor(), aa: this._randomColor()
		});
	}

	render() {
		let rectBackgroundStyle = { backgroundColor: `rgb( ${this.state.rr}, ${this.state.gg}, ${this.state.aa} )` };
		return <div className='rect' onMouseEnter={this._mouseEnter} onTouchEnd={this._mouseEnter} style={rectBackgroundStyle}></div>;
	}

}

class Playground extends React.Component {

	_getCleanNumber(origin) {
		return parseInt( origin/100 )*100-100;
	}

	render() {
		let pgStyle = {
			width: this._getCleanNumber(document.width),
			height: this._getCleanNumber(document.height)
		};
		let Rects = [];
		for( let i = 0; i < pgStyle.width/100*pgStyle.height/100; i++ ) {
			Rects.push( <Rect /> );
		}
		return (
			<div id='playground' style={pgStyle}>
				{Rects}
			</div>
		);
	}

}

ReactDOM.render(
	<Playground />, document.getElementById('container')
);