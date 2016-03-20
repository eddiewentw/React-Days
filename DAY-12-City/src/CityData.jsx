export class CityData extends React.Component {

	_handleData() {
		if( this.props.data == null )
			return '';
		else
			return `lat: ${this.props.data.lat}, lon: ${this.props.data.lon}, city: ${this.props.data.city}`
	}

	render() {
		return (
			<div className="data">{this._handleData()}</div>
		);
	}

}
