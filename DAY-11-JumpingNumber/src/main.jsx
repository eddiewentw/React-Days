import { Number } from 'Number';

class All extends React.Component {

	render() {
		return (
			<div>
				<h2>每一小時就有</h2>
				<Number DataValue={3600} Interval={0.02} />
				<h2>秒過去。</h2>
			</div>
		);
	}

}

ReactDOM.render(
	<All />, document.getElementById('container')
);
