export function getPagesAction(user) {
    return function(dispatch) {
        const query = '/' + user.userID + '/accounts';
        FB.api(query, function(response) {
            if(response.error) {
                dispatch({
                    type: "FETCH_PAGES_REJECTED",
                    payload: response
                });
            }
            else {
                dispatch({
                    type: "FETCH_PAGES_FULFILLED",
                    payload: response.data
                });
            }
        });
    }
}