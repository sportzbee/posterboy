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
					<PageInfo
						key={index}
						pageID={page.id}
						pageToken={page.access_token}
						category={page.category}
						permissions={page.perms}
					>
					</PageInfo>
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
