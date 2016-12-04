import React from "react";
import { IndexLink } from "react-router";

export default class PageInfo extends React.Component {
	handleClick() {
		const postURL = "/pages/page/" + this.props.id + "/post/create";
		this.props.router.push(postURL);
	}

	render() {
		const pageURL = "/pages/" + this.props.id + "/posts";
		const permList = this.props.permissions.map((permission, index) => <li key={index}>{permission}</li>)
		return(
			<tr>
				<td>
					{this.props.id}
				</td>
				<td>
					{this.props.category}
				</td>
				<td>
					{this.props.name}
				</td>
				<td>
					<ul>{permList}</ul>
				</td>
				<td>
					<div class="page-manage-posts">
						<IndexLink to={pageURL}>
							<button type="button" onClick={this.handleClick.bind(this)}>
								<i class="fa fa-eye" /> View Posts
							</button>
						</IndexLink>

						<button type="button" onClick={this.handleClick.bind(this)}>
							<i class="fa fa-plus" /> Create a Post
						</button>
					</div>
				</td>
			</tr>
		);
	}
}