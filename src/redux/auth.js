import { firebase, googleAuthProvider } from "../firebase/firebase";

/** Auth Action types */
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

/** Auth Action creators */
export const login = uid => ({ type: LOGIN, uid });
export const logout = () => ({ type: LOGOUT });

/** Auth Async Action creators */
export const startLogin = () => dispatch => {
	return firebase.auth().signInWithPopup(googleAuthProvider);
};
export const startLogout = () => dispatch => {
	return firebase.auth().signOut();
};

/** Auth Reducer */
export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case "LOGIN":
			return { uid: action.uid };
		case "LOGOUT":
			return {};
		default:
			return state;
	}
};

export default authReducer;
