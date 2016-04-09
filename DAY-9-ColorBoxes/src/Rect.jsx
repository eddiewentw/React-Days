export default class Rect extends React.Component {

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
