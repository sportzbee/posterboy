export function profilePictureAction(userID) {
	return function(dispatch) {
		const query = '/' + userID + '/picture';
		FB.api(query, function(response) {
			dispatch({
				type: "UPDATE_USER_PICTURE",
				payload: response.data
			});
		});
	}
}