import React from "react";
import { connect } from "react-redux";

import * as postActions from "../actions/postsActions";

import Post from "../pages/Post";

@connect((store) => {
	return {
		loggedIn: store.loginReducer.loggedIn,
		posts: store.postsReducer.posts,
		pages: store.pagesReducer.pages
	}
})
export default class Posts extends React.Component {
	componentWillMount() {
		if(this.props.loggedIn === false) {
			this.props.router.push("/");
		}

		this.props.dispatch(postActions.getPublishedPostsAction(this.props.params.pageId));
		this.props.dispatch(postActions.getUnPublishedPostsAction(this.props.params.pageId));
	}

	getPosts(postList) {
		const selectedPage = this.props.pages.filter((page) => page.id === this.props.params.pageId)[0];
		
		let posts = null;
		if(postList.length) {
			posts = postList.map((post, index) => {
				const postMessage = post.story ? post.story : post.message;
				const postViewCount = post.viewCount ? post.viewCount : -1;

				return(
					<Post 
						key={index} 
						postId={post.id} 
						story={postMessage}
						isPublished={post.isPublished}
						viewCount={postViewCount}
						pageId={this.props.params.pageId}
						pageToken={selectedPage.access_token}
					/>
				)
			});
		}

		return posts;
	}

	render() {
		const { published, unpublished } = this.props.posts;
		const allPosts = [].concat(published).concat(unpublished);
		const postList = this.getPosts(allPosts);
		
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Post ID</th>
							<th>Story</th>
							<th>Is Published</th>
							<th>Post Views</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{postList}
					</tbody>
				</table>
			</div>
		)
	}
}