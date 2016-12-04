import React from "react";
import { connect } from "react-redux";

import * as postActions from "../actions/postsActions";

@connect((store) => {
	return {
	}
})
export default class Post extends React.Component {
	deletePost() {
		this.props.dispatch(postActions.deletePostAction(this.props.postId, this.props.pageToken));
		this.props.dispatch(postActions.getPublishedPostsAction(this.props.pageId));
		this.props.dispatch(postActions.getUnPublishedPostsAction(this.props.pageId));
	}

	render() {
		const publishedText = this.props.isPublished ? "Yes" : "No";

		return (
			<tr>
				<td>
					{this.props.postId}
				</td>
				<td>
					{this.props.story}
				</td>
				<td>
					{publishedText}
				</td>
				<td>
					<a class="btn" onClick={this.deletePost.bind(this)} aria-label="Delete">
					  <i class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
					</a>					
				</td>
			</tr>
		)
	}
}

// <button type="button" >
// 						<i class="fa fa-trash-o" aria-hidden="true"></i> Delete Post
// 					</button>