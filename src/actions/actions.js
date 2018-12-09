import { LOGGED_IN, LOGGED_OUT, SET_COWORKERS } from './types';
import { auth, db } from '../firebase';

export const loggedIn = (user, position) => {
    return {
        type: LOGGED_IN,
        user,
        position
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
            if (user !== null && user.hasOwnProperty('uid')) {
                db.ref('/users/' + user.uid).once('value').then(async snapshot => {
                    const position = await snapshot.val().position;
                    dispatch(loggedIn(user, position));
                }).catch(err => console.log(err))
            }
            else {
                dispatch(loggedOut());
            }
        }
    )
}
export const logOut = () => async (dispatch) => {
    auth.signOut().then(function () {
    }).catch(function (error) {
        console.log(error)
    });
}
export const createUser = (email, password, position, nickName) => async dispatch => {

    auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
            db.ref('/users/' + user.user.uid).set({
                position
            })
            if (position === 'coworker') {

                db.ref('/coworkers/' + user.user.uid).set({
                    nickName,
                    assignedTasks: 'No tasks'
                })
            }
        })
        .catch(error => console.log(error));

}
export const logInByMailAndPass = (email, password) => async dispatch => {
    auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            alert('Logged in success');
        })
        .catch(error => console.log(error))
}

export const setCoworkers = (coworkers) => {
    return ({
        type: SET_COWORKERS,
        payload: coworkers
    })
}


export const getCoworkers = () => async dispatch => {
    db.ref(`/coworkers`).once('value').then(snapshot => {
        dispatch(setCoworkers(snapshot.val()))
    }).catch((err) => {
        console.log(err)
    })
}