import { Test } from 'Test';
import { Ending } from 'Ending';

// Space area
var Space = () => <div className='space'></div>

class All extends React.Component {

	render() {
		return (
			<div>
				<Space />
				<Test />
				<Space />
				<Ending />
			</div>
		);
	}

}

ReactDOM.render(
	<All />, document.getElementById('container')
);
