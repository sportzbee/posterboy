export function getPublishedPostsAction(pageID) {
    return function(dispatch) {
        const query = '/' + pageID + '/promotable_posts';
        FB.api(query, {is_published: true}, function(response) {
            if(response.error) {
                dispatch({
                    type: "FETCH_PUBLISHED_POSTS_REJECTED",
                    payload: response
                });
            }
            else {
                const posts = response.data.map((post) => {
                    post.isPublished = true;
                    return post;
                });

                dispatch({
                    type: "FETCH_PUBLISHED_POSTS_FULFILLED",
                    payload: posts
                });
            }
        });
    }
}

export function getUnPublishedPostsAction(pageID) {
    return function(dispatch) {
        const query = '/' + pageID + '/promotable_posts';
        FB.api(query, "get", {is_published: false}, function(response) {
            if(response.error) {
                dispatch({
                    type: "FETCH_UNPUBLISHED_POSTS_REJECTED",
                    payload: response
                });
            }
            else {
                const posts = response.data.map((post) => {
                    post.isPublished = false;
                    return post;
                });

                dispatch({
                    type: "FETCH_UNPUBLISHED_POSTS_FULFILLED",
                    payload: posts
                });
            }
        });
    }
}

export function postMessageAction(pageID, message, access_token, isDraft) {
    return function (dispatch) {
        const query = '/' + pageID + '/feed';
        FB.api(query, "post", {
                message: message, 
                access_token: access_token,
                published: !isDraft
            }, 
            function(response) {
                if(response.error) {
                    dispatch({
                        type: "POST_MESSAGE_REJECTED",
                        payload: response
                    })
                }
                else {
                    dispatch({
                        type: "POST_MESSAGE_FULFILLED",
                        payload: response
                    })
                }
            }
        );
    }
}

export function deletePostAction(postID, pageToken) {
    return function(dispatch) {
        const query = "/" + postID;
        
        FB.api(query, "delete", {access_token: pageToken}, function(response){
            if(response.error) {
                dispatch({
                    type: "POST_DELETE_REJECTED",
                    payload: response
                });
            }
            else {
                dispatch({
                    type: "POST_DELETE_FULFILLED",
                    payload: postID
                });
            }
        });
    }
}
