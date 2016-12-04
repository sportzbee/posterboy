import React from "react";
import { connect } from "react-redux";

import { Alert } from "react-bootstrap";

import { getPagesAction } from "../actions/pagesActions";
import { postMessageAction } from "../actions/postsActions";

import PageInfo from "../components/PageInfo";

@connect((store) => {
	return {
		loggedIn: store.loginReducer.loggedIn,
		user: store.loginReducer.user,
		pages: store.pagesReducer.pages,
		actionStatus: store.postsReducer.actionStatus
	}
})
export default class CreatePost extends React.Component {
	componentWillMount() {
		if(this.props.loggedIn === false) {
			this.props.router.push("/")
		}
		else {
			this.props.dispatch(getPagesAction(this.props.user));
		}
	}

	postMessage() {
		const selectedPage = this.props.pages.filter((page) => page.id === this.props.params.pageId)[0];
		this.props.dispatch(
			postMessageAction(
				selectedPage.id,
				this.textarea.value,
				selectedPage.access_token,
				this.checkbox.checked
			)
		);
	}

	resetActionStatus() {
		console.log('Will close action status');
		this.props.actionStatus = '';
		// this.props.dispatch(postsActions.);
	}

	alertMessage() {
		console.log(this.props.actionStatus);
		if(this.props.actionStatus !== '') {
			return( <Alert onDimiss={this.resetActionStatus}>{this.props.actionStatus}</Alert> );
		}
		else {
			return null;
		}
	}

	render() {
		const selectedPage = this.props.pages.filter((page) => page.id === this.props.params.pageId)[0];
		return (
			<div>
				{this.alertMessage()}
				<table>
					<thead>
						<tr>
							<th>Page Id</th>
							<th>Category</th>
							<th>Name</th>							
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								{selectedPage.id}
							</td>
							<td>
								{selectedPage.category}
							</td>
							<td>
								{selectedPage.name}
							</td>
						</tr>
					</tbody>
				</table>
				<div>
					<textarea
						rows="5"
						cols="75"
						maxLength="200"
						placeholder="Enter your message to Post here."
						required="true"
						wrap="hard"
						ref={(input) => this.textarea = input}
					>
					</textarea>
					<label>
						<input type="checkbox" ref={(checked) => this.checkbox = checked} />Is Draft
					</label>
					<button id="post-publish" type="button" onClick={this.postMessage.bind(this)}>Post</button>
				</div>
			</div>
		)
	}
}
