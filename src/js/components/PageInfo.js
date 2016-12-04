import React from "react";
import { IndexLink } from "react-router";

import { Tooltip, OverlayTrigger } from "react-bootstrap";

import CreatePost from "../pages/CreatePost";

export default class PageInfo extends React.Component {
	render() {
		const pageURL = "/pages/" + this.props.pageID + "/posts";
		const permList = this.props.permissions.map((permission, index) => <li key={index}>{permission}</li>);
		const tooltip = (<Tooltip id="tooltip">View Posts</Tooltip>);
		return(
			<div>
				<table>
					<thead>
						<tr>
							<th>Page Id</th>
							<th>Category</th>
							<th>Permissions</th>
							<th>Manage Posts</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								{this.props.pageID}
							</td>
							<td>
								{this.props.category}
							</td>
							<td>
								<ul>{permList}</ul>
							</td>
							<td>
								<div class="page-manage-posts">
									<IndexLink to={pageURL}>
										<OverlayTrigger placement="left" overlay={tooltip}>
											<i class="fa fa-eye fa-lg" />
										</OverlayTrigger>
									</IndexLink>
									<CreatePost
										pageID={this.props.pageID}
										pageToken={this.props.pageToken}
									>
									</CreatePost>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
