import { Test } from './Test.jsx';
import { Ending } from './Ending.jsx';

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