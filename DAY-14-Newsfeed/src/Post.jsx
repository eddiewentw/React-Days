export default class Post extends React.Component {

	constructor() {
		super();
		this.state = { LikeNumber: 0 };
		this._handleLikeClick = this._handleLikeClick.bind(this);
	}

	componentDidMount() {
		this.setState({ LikeNumber: this.props.postData.get('like') });
	}

	_handleLikeClick() {
		this.setState({ LikeNumber: this.state.LikeNumber+1 });

		const Newsfeed = Parse.Object.extend('Newsfeed_Prakhar');
		let query = new Parse.Query(Newsfeed);
		query.get(this.props.postData.id, {
			success: (post) => {
				post.set('like', this.state.LikeNumber);
				post.save();
			}
		})
	}

	render() {
		let data = this.props.postData;
		let postContent = [];
		// Push text element
		postContent.push(
			<div className="text" key="1">
				{data.get('content')}
			</div>
		);
		// If there is image file, push it
		if( data.get('image') != undefined ) {
			postContent.push(
				<div className="picture" key="2">
					<img src={`images/posted/${data.get('image')}.png`} />
				</div>
			);
		}
		return (
			<div className="post" key={data._objCount}>
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
					<div className="action like" onClick={this._handleLikeClick}>
						<i className="fa fa-thumbs-up"></i>
						<div className="num">{this.state.LikeNumber}</div>
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

}
