import { reducer } from "react-redux";

const defProfileState = {
    picture: null
};

export default function profileReducer(state=defProfileState, action) {
    switch (action.type) {
        case "UPDATE_USER_PICTURE": {
            return {
                ...state, 
                picture: action.payload
            }
        }        
        case "LOGOUT_FULFILLED": {
            return defProfileState
        }
    }

    return state;
}