import { reducer } from "react-redux";

const defPagesState = {
    pages: [],
    pagesError: {}
};

export default function pagesReducer(state=defPagesState, action) {
    switch (action.type) {
        case "FETCH_PAGES_REJECTED": {
            return {
                ...state, 
                pagesError: action.payload
            }
        }
        case "FETCH_PAGES_FULFILLED": {
            return {
                ...state,
                pages: action.payload,
            }
        }
        case "LOGOUT_FULFILLED": {
            return defPagesState
        }
    }

    return state;
}