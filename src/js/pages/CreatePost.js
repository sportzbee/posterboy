import React from "react";
import { connect } from "react-redux";

import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";

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
		const tooltip = (<Tooltip id={this.props.pageID}>Create Post</Tooltip>);

		return (
			<div class="post-create">
				<OverlayTrigger placement="bottom" overlay={tooltip}>
					<a onClick={this.open.bind(this)}>
						<i class="fa fa-plus fa-lg" />
					</a>
				</OverlayTrigger>
				<Modal bsSize="small" show={this.state.showModal} onHide={this.close.bind(this)}>
		        	<Modal.Header>
		            	<Modal.Title>Create a Post</Modal.Title>
		          	</Modal.Header>
		        	<Modal.Body>
						<div>
							<textarea
								id="post-create-textarea"
								rows="10"
								cols="34"
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
		        		<label id="post-create-draft-label">
							<input id="post-create-draft-checkbox" type="checkbox" ref={(checked) => this.checkbox = checked} />Is Draft
						</label>
						<button id="post-publish" type="button" onClick={this.postMessage.bind(this)}>Post</button>
		        	</Modal.Footer>
		        </Modal>
			</div>
		)
	}
}
