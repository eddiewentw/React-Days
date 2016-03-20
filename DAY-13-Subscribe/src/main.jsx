class App extends React.Component {

	constructor() {
		super();
		this.state = { focus: false, mail: '', btnClass: '' };
		this.handleFocus = this.handleFocus.bind(this);
		this.handleLostFocus = this.handleLostFocus.bind(this);
		this.handleMail = this.handleMail.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}

	focusClassName() {
		return this.state.focus ? 'focused' : '';
	}

	handleFocus() {
		if( this.state.focus == false && this.state.btnClass != 'clicked' ) {
			console.log('click');
			this.setState({ focus: true }, () => {
				this.refs.mailInput.getDOMNode().focus();
			});
		}
	}

	handleLostFocus() {
		this.setState({ focus: false });
	}

	handleMail(e) {
		this.setState({
			mail: e.target.value,
			btnClass: e.target.value != '' ? 'clickable' : '',
		});
	}

	btnClassName() {
		return `btn ${this.state.btnClass}`;
	}

	handleBtnClick() {
		if( this.state.btnClass == 'clickable' ) {
			this.setState({ focus: true, btnClass: 'clicked' });
		}
	}

	render() {
		return (
			<div id="subscribe" className={this.focusClassName()} onClick={this.handleFocus}>
				<input ref="mailInput" type="text" onBlur={this.handleLostFocus} onChange={this.handleMail} />
				<div className={this.btnClassName()} onClick={this.handleBtnClick}></div>
			</div>
		)
	}

}

ReactDOM.render(
	<App />, document.getElementById('container')
);