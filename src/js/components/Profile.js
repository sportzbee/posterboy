import React from "react";
import { connect } from "react-redux";

import { profilePictureAction } from "../actions/profileActions";

@connect((store) => {
	return {
		userID: store.loginReducer.user.userID,
		picture: store.profileReducer.picture
	}
})
export default class Profile extends React.Component{
	componentWillMount() {
		if(this.props.picture === undefined) {
			this.props.dispatch(profilePictureAction(this.props.userID));
		}
	}

	render() {
		const pic = this.props.picture ? <div id="app-profile-pic-container">
											<img id="app-profile-pic" src={this.props.picture.url} />
										</div>
										: null;
		
		return( pic );
	}
}