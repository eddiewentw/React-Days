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
		this.handlePost = this.handlePost.bind(this);
	}

	handleTextareaChange(event) {
		this.setState({ content: event.target.value });
	}

	handlePost() {
		let Newsfeed = Parse.Object.extend('Newsfeed_Prakhar');
		let newFeed = new Newsfeed();
			newFeed.set('user', this.props.user.name);
			newFeed.set('job', this.props.user.job);
			newFeed.set('like', 0);
			newFeed.set('comment', 0);
			newFeed.set('share', 0);
			newFeed.set('content', this.state.content);
			newFeed.set('timer', 'Just now');

		newFeed.save(null, {
			success: (feed) => {
				alert(`New object created with objectId: ${feed.id}`);
			},
			error: (feed, error) => {
				alert(`Failed to create new object, with error code: ${error.message}`);
			}
		});
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
					<div className="share-btn" onClick={this.handlePost}>Share</div>
				</div>
			</div>
		);
	}

}

class LeftColumn extends React.Component {

	render() {
		let postArray = [];
		if( this.props.data.length > 0 ) {
			postArray = this.props.data.map( (data, index) => {
				if( index%2 == 1 ) {
					let postContent = [];
					postContent.push(
						<div className="text">
							{data.get('content')}
						</div>
					);
					if( data.get('image') != undefined ) {
						postContent.push(
							<div className="picture">
								<img src={`images/posted/${data.get('image')}.png`} />
							</div>
						);
					}
					return (
						<div className="post" key={index}>
							<div className="owner">
								<div className="sticker">
									<img src={`images/sticker/${data.get('user')}.png`} />
								</div>
								<div className="info">
									<h4>{data.get('user')}</h4>
									<div className="job">{data.get('job')}</div>
								</div>
								<div className="time">{data.get('timer')}</div>
							</div>
							<div className="content">
								{postContent}
							</div>
							<div className="action-bar">
								<div className="action like">
									<i className="fa fa-thumbs-up"></i>
									<div className="num">{data.get('like')}</div>
								</div>
								<div className="action comment">
									<i className="fa fa-comment"></i>
									<div className="num">{data.get('comment')}</div>
								</div>
								<div className="action share">
									<i className="fa fa-share-alt"></i>
									<div className="num">{data.get('share')}</div>
								</div>
							</div>
							<div className="add-comment">Add Comment</div>
						</div>
					);
				}
			});
		}
		return (
			<div className="column left">
				<PostBox user={this.props.user} />
				{postArray}
			</div>
		);
	}

}

class RightColumn extends React.Component {

	render() {
		let postArray = [];
		if( this.props.data.length > 0 ) {
			postArray = this.props.data.map( (data, index) => {
				if( index%2 == 0 ) {
					let postContent = [];
					postContent.push(
						<div className="text">
							{data.get('content')}
						</div>
					);
					if( data.get('image') != undefined ) {
						postContent.push(
							<div className="picture">
								<img src={`images/posted/${data.get('image')}.png`} />
							</div>
						);
					}
					return (
						<div className="post" key={index}>
							<div className="owner">
								<div className="sticker">
									<img src={`images/sticker/${data.get('user')}.png`} />
								</div>
								<div className="info">
									<h4>{data.get('user')}</h4>
									<div className="job">{data.get('job')}</div>
								</div>
								<div className="time">{data.get('timer')}</div>
							</div>
							<div className="content">
								{postContent}
							</div>
							<div className="action-bar">
								<div className="action like">
									<i className="fa fa-thumbs-up"></i>
									<div className="num">{data.get('like')}</div>
								</div>
								<div className="action comment">
									<i className="fa fa-comment"></i>
									<div className="num">{data.get('comment')}</div>
								</div>
								<div className="action share">
									<i className="fa fa-share-alt"></i>
									<div className="num">{data.get('share')}</div>
								</div>
							</div>
							<div className="add-comment">Add Comment</div>
						</div>
					);
				}
			});
		}
		return (
			<div className="column right">
				{postArray}
			</div>
		);
	}

}

class Posts extends React.Component {

	constructor() {
		super();
		this.state = { data: [] };

		let Newsfeed = Parse.Object.extend('Newsfeed_Prakhar');
		let query  = new Parse.Query(Newsfeed);
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

	render() {
		return (
			<div id="posts">
				<LeftColumn user={this.props.user} data={this.state.data} /><RightColumn data={this.state.data} />
			</div>
		);
	}

}

Parse.initialize("Y5Y5GWiu9OoS9hTAUUAXO6gJrM7Hdxf4uLapfpK6", "c4PlOlsrUoDxTT55AxALHRrNoEiLPf23o7SltcaT");
let userInfo = {
	name: 'Eddie Wen',
	job: 'Developer'
}

ReactDOM.render(
	<Posts user={userInfo} />, document.getElementById('react-container')
);
