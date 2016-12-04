import { reducer } from "react-redux";

const defPostsState = {
    posts: {
    	published: [],
    	unpublished: []
    },
    actionStatus: ''
};

export default function postsReducer(state=defPostsState, action) {
    switch (action.type) {
        case "FETCH_PUBLISHED_POSTS_REJECTED": {
            return {
                ...state, 
                actionStatus: action.payload
            }
        }
        case "FETCH_PUBLISHED_POSTS_FULFILLED": {
            return {
                ...state,
                posts: {
                    ...state.posts, 
                    published: action.payload
                }
            }
        }
        case "FETCH_UNPUBLISHED_POSTS_REJECTED": {
            return {
                ...state, 
                actionStatus: action.payload
            }
        }
        case "FETCH_UNPUBLISHED_POSTS_FULFILLED": {
            return {
                ...state,
                posts: {
                    ...state.posts,
                    unpublished: action.payload
                }
            }
        }
        case "POST_MESSAGE_REJECTED": {
            return {
                ...state, 
                actionStatus: 'Failed to Create Post'
            }
        }
        case "POST_MESSAGE_FULFILLED": {
            return {
                ...state, 
                actionStatus: 'Post Created'
            }
        }
        case "POST_DELETE_FULFILLED": {
            const deletedPostId = action.payload;
            const publishedPosts = state.posts.published.filter((post) => post.id !== deletedPostId);
            const unPublishedPosts = state.posts.unpublished.filter((post) => post.id !== deletedPostId);
            
            return {
                ...state,
                posts: {
                    ...state.posts,
                    published: publishedPosts,
                    unpublished: unPublishedPosts
                }
            }
        }
        case "POST_DELETE_REJECTED": {
            return {
                ...state, 
                actionStatus: 'Failed to delete Post'
            }
        }
        case "LOGOUT_FULFILLED": {
            return defPostsState
        }
    }

    return state;
}