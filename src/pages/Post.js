import React from "react";
import { connect } from "react-redux";

import { OverlayTrigger, Popover } from "react-bootstrap";

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

	viewPostCounts() {
		this.props.dispatch(postActions.getPostViewCounts(this.props.postId, this.props.pageToken));
	}

	render() {
		const publishedText = this.props.isPublished ? "Yes" : "No";
		const postViewCount = this.props.viewCount > 0 ? this.props.viewCount : 0;
		const popover = (
			<Popover id="post-view-count-popover" title="Post View Count">
		    	{postViewCount}
		  	</Popover>
		);

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
				    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
						<a class="btn" onClick={this.viewPostCounts.bind(this)} aria-label="View Post Counts">
						  <i class="fa fa-line-chart fa-lg" aria-hidden="true"></i>
						</a>
					</OverlayTrigger>
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
