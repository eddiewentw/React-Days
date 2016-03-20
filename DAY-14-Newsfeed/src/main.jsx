import { LeftColumn } from 'LeftColumn';
import { RightColumn } from 'RightColumn';

Parse.initialize("Y5Y5GWiu9OoS9hTAUUAXO6gJrM7Hdxf4uLapfpK6", "c4PlOlsrUoDxTT55AxALHRrNoEiLPf23o7SltcaT");
const userInfo = {
	name: 'Eddie Wen',
	job: 'Developer'
}

class Newswall extends React.Component {

	constructor() {
		super();
		this.state = { data: [] };

		const Newsfeed = Parse.Object.extend('Newsfeed_Prakhar');
		this.Newsfeed = Newsfeed;

		this.loadDataFromParse();
		this.savePost = this.savePost.bind(this);
	}

	loadDataFromParse() {
		let query  = new Parse.Query(this.Newsfeed);
			query.notEqualTo('user', '');
			query.descending('createdAt');

		query.find({
			success: (results) => {
				this.setState({ data: results });
			},
			error: (error) => {
				console.log(`ERROR: ${error}`);
			}
		});
	}

	savePost( content ) {
		let newsFeed = new this.Newsfeed();
		newsFeed.save({
			user: 		this.props.user.name,
			job: 		this.props.user.job,
			like: 		0,
			comment: 	0,
			share: 		0,
			content: 	content,
			timer: 		'Just now',
		}, {
			success: (feed) => {
				let newData = this.state.data;
					newData.splice(0,0,feed);
				this.setState({ data: newData });
			},
			error: (feed, error) => {
				alert(`Failed to create new object, with error code: ${error.message}`);
			}
		});
	}

	render() {
		return (
			<div id="posts">
				<LeftColumn savePostMethod={this.savePost} user={this.props.user} data={this.state.data} /><RightColumn data={this.state.data} />
			</div>
		);
	}

}

ReactDOM.render(
	<Newswall user={userInfo} />, document.getElementById('react-container')
);
