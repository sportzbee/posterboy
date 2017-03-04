import React from "react";
import { connect } from "react-redux";
import { Jumbotron } from 'react-bootstrap';

import { fbLogInAction, fbLogoutAction } from "../actions/loginActions";
import { profilePictureAction } from "../actions/profileActions";

@connect((store) => {
	return{
		loggedIn: store.loginReducer.loggedIn,
		userID: store.loginReducer.user.userID
	}
})
export default class Login extends React.Component {
	componentWillMount() {
		FB.Event.subscribe('auth.login', this.onLogIn.bind(this));
		FB.Event.subscribe('auth.logout', this.onLogOut.bind(this));		
	}

	onLogIn(response) {
		if(this.props.loggedIn === false) {
			this.props.dispatch(fbLogInAction(response));
		}

		this.props.dispatch(profilePictureAction(this.props.userID));
	}

	onLogOut(response) {
		if(this.props.loggedIn === true) {
			this.props.dispatch(fbLogoutAction(response));
		}
	}

	render() {
		return (
		 	<Jumbotron>
		 		<div><h2>Manage Facebook Pages with...<strong>Posterboy</strong></h2>
				<h4>Posterboy helps you to manage all your pages in one place.</h4>
				<ul>
					<li>View a list of the Pages that you manage</li>
					<li>
						Select any page to then manage posts on the page. Interact with your pages to create:
						<ol>
							<li>Publish posts</li>
							<li>Unplublished posts</li>
						</ol>
					</li>
				</ul></div>
				<div className="fb-login-button"
					data-max-row="1"
					data-size="xlarge" 
					data-show-faces="false" 
					data-auto-logout-link="true"
					data-scope="manage_pages,publish_pages,pages_show_list,read_insights"				
				>
					Login
				</div>
			</Jumbotron>
		)
	};
}
