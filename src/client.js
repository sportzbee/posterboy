import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from "react-redux";
import store from "./store";

/*
 * Pages & Components
 */
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Pages from "./pages/Pages";
import PosterboyApp from "./pages/PosterboyApp";
import Posts from "./pages/Posts";

window.fbAsyncInit = function() {
	FB.init({
		appId	: '317073972028031',
		cookie  : true,  // enable cookies to allow the server to access the session
		xfbml   : true,  // parse social plugins on this page
		version : 'v2.8', // use graph api version 2.8
		status	: true
	});
	
	ReactDOM.render((
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={PosterboyApp}>
					<IndexRoute component={Home} />
			      	<Route path="/pages" component={Pages} />
			        <Route path="/pages/:pageId/posts" component={Posts} />
			      	<Route path="*" component={NoMatch} />
			    </Route>
			</Router> 
		</Provider>
		),
		document.getElementById('react-app-root')
	);
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
