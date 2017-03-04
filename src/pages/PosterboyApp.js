import React from "react";
import { Link } from "react-router";

import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

export default class PosterboyApp extends React.Component {
	handleClick() {
		const currentLocation = this.props.router.getCurrentLocation();
		if(currentLocation.pathname !== "/") {
			this.props.router.push("/");
		}
	}

	render() {
		return(
			<div id="app-root">
				<div id="app-header">
					<span id="app-header-content">
						<div id="app-icon-container" onClick={this.handleClick.bind(this)} >
							<img id="app-icon" src="./dist/images/postit4.png" />
						</div>
						<div id="app-title" onClick={this.handleClick.bind(this)} >Poster Boy</div>
						<span id="nav-menu">
							<Navigation />
						</span>
						<Profile />
					</span>
				</div>
				<div id="app-body">
					{this.props.children}
				</div>				
		    </div>
		)
	}
}
