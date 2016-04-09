export default class Ending extends React.Component {

	constructor() {
		super();
		this.state = { scroll: false };
		this._handleScrollEvent = this._handleScrollEvent.bind(this);
	}

	componentDidMount() {
		window.addEventListener( 'scroll', this._handleScrollEvent );
	}

	_scrollClass() {
		return this.state.scroll ? 'animated rubberBand' : '';
	}

	_handleScrollEvent() {

		if( document.body.scrollTop >= document.getElementById('ending').offsetTop-200 ) {
			this.setState({ scroll: true });
			window.removeEventListener( 'scroll', this._handleScrollEvent );
		}

	}

	render() {
		return (
			<div id="ending" className="v-mid">
				<h1 className={this._scrollClass()}>Scroll Event</h1>
			</div>
		);
	}

}
