import { PostBox } from 'PostBox';
import { Post } from 'Post';

export class LeftColumn extends React.Component {

	render() {
		let postArray = [];
		if( this.props.data.length > 0 ) {
			postArray = this.props.data.map( (data, index) => {
				if( index%2 == 1 ) {
					return <Post postData={data} key={data._objCount} />;
				}
			});
		}
		return (
			<div className="column left">
				<PostBox savePostMethod={this.props.savePostMethod} user={this.props.user} />
				{postArray}
			</div>
		);
	}

}
