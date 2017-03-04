import { reducer } from "react-redux";

const defLoginState = {
	loggedIn: false,	
	loginError: '',
	user: {}
};

export default function loginReducer(state=defLoginState, action) {
	switch(action.type) {		
		case "LOGIN_FULFILLED": {
			return {...state, 
				loggedIn: true,
				user: action.payload
			};
			break;
		}
		case "LOGIN_REJECTED": {
			return {
				...state,
				loggedIn: false,
				loginError: action.payload,
				user: {}
			};
			break;
		}
		case "LOGOUT_FULFILLED": {
			return {
				...state,
				loggedIn: false,
				user: {}
			}
		}
	}

	return state;
}