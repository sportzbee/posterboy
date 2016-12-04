export function fbLogInAction(response) {
	return {
		type: "LOGIN_FULFILLED",
		payload: response.authResponse
	}	
}

export function fbLogoutAction() {
	return {
		type: "LOGOUT_FULFILLED",
		payload: {}
	}	
}