import React from "react";
import { connect } from "react-redux";

import { Modal } from "react-bootstrap";

import { getPagesAction } from "../actions/pagesActions";
import { postMessageAction } from "../actions/postsActions";

@connect((store) => {
	return {
		pages: store.pagesReducer.pages,
		actionStatus: store.postsReducer.actionStatus
	}
})
export default class CreatePost extends React.Component {
	constructor(props) {
		super(props);
    	this.state = { showModal: false };
  	}

  	close() {
    	this.setState({ showModal: false });
  	}

  	open() {
    	this.setState({ showModal: true });
  	}

	postMessage() {
		this.props.dispatch(
			postMessageAction(
				this.props.pageID,
				this.textarea.value,
				this.props.pageToken,
				this.checkbox.checked
			)
		);
		this.setState({showModal: false});
	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.open.bind(this)}>
					<i class="fa fa-plus" /> Create a Post
				</button>
				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
		        	<Modal.Header closeButton>
		            	<Modal.Title>Create a Post</Modal.Title>
		          	</Modal.Header>
		        	<Modal.Body>
						<div>
							<textarea
								rows="5"
								cols="50"
								maxLength="200"
								placeholder="Enter your message to Post here."
								required="true"
								wrap="hard"
								ref={(input) => this.textarea = input}
							>
							</textarea>
						</div>
		        	</Modal.Body>
		        	<Modal.Footer>
		        		<label>
							<input type="checkbox" ref={(checked) => this.checkbox = checked} />Is Draft
						</label>
						<button id="post-publish" type="button" onClick={this.postMessage.bind(this)}>Post</button>
		        	</Modal.Footer>
		        </Modal>
			</div>
		)
	}
}
