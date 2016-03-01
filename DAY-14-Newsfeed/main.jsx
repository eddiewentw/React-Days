class PostArea extends React.Component {

	handleAreaHeight(event) {
		let element = event.target;
		element.style.height = '5px';
		element.style.height = element.scrollHeight+'px';
	}

	render() {
		return (
			<textarea style={this.state} placeholder="Write Something..." onKeyUp={this.handleAreaHeight} onChange={this.props.onChange} />
		);
	}

}

class PostBox extends React.Component {

	constructor() {
		super();
		this.state = { content: '' };
		this.handleTextareaChange = this.handleTextareaChange.bind(this);
	}

	handleTextareaChange(event) {
		this.setState({ content: event.target.value });
	}

	render() {
		return (
			<div id="input" className="post">
				<PostArea onChange={this.handleTextareaChange} />
				<div className="tool-bar">
					<div className="icon">
						<i className="fa fa-picture-o"></i>
					</div>
					<div className="icon">
						<i className="fa fa-video-camera"></i>
					</div>
					<div className="icon">
						<i className="fa fa-map-marker"></i>
					</div>
					<div className="share-btn">Share</div>
				</div>
			</div>
		);
	}

}

class LeftColumn extends React.Component {

	render() {
		return (
			<div className="column left">
				<PostBox />
				<div className="post">
					<div className="owner">
						<div className="sticker">
							<img src="images/sticker/sticker-1.png" />
						</div>
						<div className="info">
							<h4>Jayda Pollock</h4>
							<div className="job">Designer</div>
						</div>
						<div className="time">8 hours</div>
					</div>
					<div className="content">
						<div className="text">
							Happy to get a row in fashion design by Twin Brothers
						</div>
					</div>
					<div className="action-bar">
						<div className="action like">
							<i className="fa fa-thumbs-up"></i>
							<div className="num">10</div>
						</div>
						<div className="action comment">
							<i className="fa fa-comment"></i>
							<div className="num">01</div>
						</div>
						<div className="action share">
							<i className="fa fa-share-alt"></i>
							<div className="num">01</div>
						</div>
					</div>
					<div className="add-comment">Add Comment</div>
				</div>
				<div className="post">
					<div className="owner">
						<div className="sticker">
							<img src="images/sticker/sticker-3.png" />
						</div>
						<div className="info">
							<h4>April</h4>
							<div className="job">Photographer</div>
						</div>
						<div className="time">18 hours</div>
					</div>
					<div className="content">
						<div className="picture">
							<img src="images/posted/Chelsea-Francis.png" />
						</div>
					</div>
					<div className="action-bar">
						<div className="action like">
							<i className="fa fa-thumbs-up"></i>
							<div className="num">15</div>
						</div>
						<div className="action comment">
							<i className="fa fa-comment"></i>
							<div className="num">03</div>
						</div>
						<div className="action share">
							<i className="fa fa-share-alt"></i>
							<div className="num">03</div>
						</div>
					</div>
					<div className="add-comment">Add Comment</div>
				</div>
			</div>
		);
	}

}

class RightColumn extends React.Component {

	render() {
		// if( this.props.data.length > 0 ) {
		// 	console.log( this.props.data[0].get('user') );
		// }
		return (
			<div className="column right">
				<div className="post">
					<div className="owner">
						<div className="sticker">
							<img src="images/sticker/sticker-2.png" />
						</div>
						<div className="info">
							<h4>Tahila Ntini</h4>
							<div className="job">Nature Lover</div>
						</div>
						<div className="time">5 hours</div>
					</div>
					<div className="content">
						<div className="picture">
							<img src="images/posted/Adam-Przewoski.png" />
						</div>
					</div>
					<div className="action-bar">
						<div className="action like">
							<i className="fa fa-thumbs-up"></i>
							<div className="num">26</div>
						</div>
						<div className="action comment">
							<i className="fa fa-comment"></i>
							<div className="num">05</div>
						</div>
						<div className="action share">
							<i className="fa fa-share-alt"></i>
							<div className="num">01</div>
						</div>
					</div>
					<div className="add-comment">Add Comment</div>
				</div>
				<div className="post">
					<div className="owner">
						<div className="sticker">
							<img src="images/sticker/sticker-4.png" />
						</div>
						<div className="info">
							<h4>Winter Martin</h4>
							<div className="job">Teacher</div>
						</div>
						<div className="time">12 hours</div>
					</div>
					<div className="content">
						<div className="text">
							Get a perfect weekend holidays 3 in a row to be with family, friends and my sweet little puppy
						</div>
					</div>
					<div className="action-bar">
						<div className="action like">
							<i className="fa fa-thumbs-up"></i>
							<div className="num">14</div>
						</div>
						<div className="action comment">
							<i className="fa fa-comment"></i>
							<div className="num">03</div>
						</div>
						<div className="action share">
							<i className="fa fa-share-alt"></i>
							<div className="num">02</div>
						</div>
					</div>
					<div className="add-comment">Add Comment</div>
				</div>
			</div>
		);
	}

}

class Posts extends React.Component {

	constructor() {
		super();
		this.state = { data: [] };

		Parse.initialize("Y5Y5GWiu9OoS9hTAUUAXO6gJrM7Hdxf4uLapfpK6", "c4PlOlsrUoDxTT55AxALHRrNoEiLPf23o7SltcaT");
		let Newsfeed = Parse.Object.extend('Newsfeed_Prakhar');
		let query  = new Parse.Query(Newsfeed);
		query.notEqualTo('user', '');
		query.find({
			success: (results) => {
				this.setState({ data: results });
			},
			error: (error) => {
				console.log(`ERROR: ${error}`);
			}
		});
	}

	render() {
		return (
			<div id="posts">
				<LeftColumn data={this.state.data} /><RightColumn data={this.state.data} />
			</div>
		);
	}

}

ReactDOM.render(
	<Posts user="Eddie" />, document.getElementById('react-container')
);