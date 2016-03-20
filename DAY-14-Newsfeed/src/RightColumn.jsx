import { Post } from 'Post';

export class RightColumn extends React.Component {

	render() {
		let postArray = [];
		if( this.props.data.length > 0 ) {
			postArray = this.props.data.map( (data, index) => {
				if( index%2 == 0 ) {
					return <Post postData={data} key={data._objCount} />;
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
