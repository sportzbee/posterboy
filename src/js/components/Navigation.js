import React from "react";
import { IndexLink } from "react-router";

export default class Navigation extends React.Component {
	render() {
		const childRoutes = [
			{
				name: 'Home',
				path: '/'
			},
			{
				name: 'Pages',
				path: '/pages'
			}
		];
		
		const routeList = 	childRoutes.map((route, index) => 
								<span key={index}>
									<IndexLink class="nav-item" to={route.path}>
										{route.name}
									</IndexLink>
								</span> 
							);

		return (
			<span id="nav-routes">
		        {routeList}
	        </span>
		)
	}
}