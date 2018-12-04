import { LOGGED_IN, LOGGED_OUT } from './types';
import { auth } from '../firebase';

export const loggedIn = user => {
    return {
        type: LOGGED_IN,
        user
    }
}
export const loggedOut = () => {
    return {
        type: LOGGED_OUT
    }
}
export const initAuthUserSync = () => async dispatch => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                dispatch(loggedIn(user));
            }
            else {
                dispatch(loggedOut());
            }
        }
    )
}
export const logOut = () => () => {
    auth.signOut();
}
export const createUser = (email, password) => async dispatch => {
    auth.createUserWithEmailAndPassword(email, password)
        .then(user => dispatch(loggedIn(user)))
        .catch(error => console.log(error));
}
export const logInByMailAndPass = (email, password) => async dispatch => {
    auth.signInWithEmailAndPassword(email, password)
        .then(user => dispatch(loggedIn(user)))
        .catch(error => console.log(error))
}