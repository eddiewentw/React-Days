import city_json from 'city.json'; /* https://github.com/mahemoff/geodata */
import Box from 'Box';
import CityData from 'CityData';

class All extends React.Component {

	constructor() {
		super();
		this.state = {
			city: { "lat": -14.267, "lon": -170.7, "city": "Pago Pago" }
		};
		this._handleCityData = this._handleCityData.bind(this);
	}

	_handleCityData(city) {
		console.log(city_json);
		this.setState({ city: city_json[city] });
	}

	render() {
		return (
			<div>
				<Box onClick={this._handleCityData} />
				<CityData data={this.state.city} />
			</div>
		);
	}

}

ReactDOM.render(
	<All />, document.getElementById('container')
);
