class PostArea extends React.Component {

	constructor() {
		super();
		this.state = { height: '75px' };
		this.handleAreaHeight = this.handleAreaHeight.bind(this);
	}

	handleAreaHeight(event) {
		this.setState({ height: event.target.scrollHeight + 'px' });
	}

	render() {
		return (
			<textarea style={this.state} placeholder="Write Something..." onChange={this.handleAreaHeight} />
		);
	}

}

class PostBox extends React.Component {

	render() {
		return (
			<div id="input" className="post">
				<PostArea />
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

class Posts extends React.Component {

	render() {
		return (
			<div id="posts">
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
				</div><div className="column right">
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
			</div>
		);
	}

}

ReactDOM.render(
	<Posts user="Eddie" />, document.getElementById('react-container')
);
