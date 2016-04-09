import Rect from 'Rect';

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
			Rects.push( <Rect key={i}/> );
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
