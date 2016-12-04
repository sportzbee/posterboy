import React from "react";
import { IndexLink } from "react-router";

import CreatePost from "../pages/CreatePost";

export default class PageInfo extends React.Component {
	render() {
		const pageURL = "/pages/" + this.props.pageID + "/posts";
		const permList = this.props.permissions.map((permission, index) => <li key={index}>{permission}</li>)
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
										<button type="button">
											<i class="fa fa-eye" /> View Posts
										</button>
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
