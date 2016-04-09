import PostArea from 'PostArea';

export default class PostBox extends React.Component {

	constructor() {
		super();
		this.state = { content: '' };

		this.handleTextareaChange = this.handleTextareaChange.bind(this);
		this.handleSaveBtnClick = this.handleSaveBtnClick.bind(this);
	}

	handleTextareaChange(event) {
		this.setState({ content: event.target.value });
	}

	handleSaveBtnClick() {
		this.props.savePostMethod(this.state.content);
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
					<div className="share-btn" onClick={this.handleSaveBtnClick}>Share</div>
				</div>
			</div>
		);
	}

}
