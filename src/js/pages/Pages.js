import React from "react";
import { connect } from "react-redux";
import { Accordion, Panel, Button } from "react-bootstrap";

import { getPagesAction } from "../actions/pagesActions";

import PageInfo from "../components/PageInfo";

@connect((store) => {
	return {
		loggedIn: store.loginReducer.loggedIn,
		user: store.loginReducer.user,
		pages: store.pagesReducer.pages
	}
})
export default class Pages extends React.Component {
	componentWillMount() {
		if(this.props.loggedIn === false) {
			this.props.router.push("/")
		}

		this.props.dispatch(getPagesAction(this.props.user));
	}

	render() {
		const pageList = this.props.pages.map((page, index) => {
			return (
				<Panel
					collapsible
					defaultExpanded
					header={page.name}
					eventKey={index}
					key={index}
					bsClass="page-header"
				>
					<table>
						<thead>
							<tr>
								<th>Page Id</th>
								<th>Category</th>
								<th>Page Name</th>
								<th>Permissions</th>
								<th>Manage Posts</th>
							</tr>
						</thead>
						<tbody>
							<PageInfo 
								key={page.access_token}
								id={page.id}
								name={page.name}
								category={page.category}
								router={this.props.router}
								permissions={page.perms}
							>
							</PageInfo>
						</tbody>
					</table>
				</Panel>
			);
		});

		return(
			<Accordion>
				{pageList}
			</Accordion>
		);
	}
}
