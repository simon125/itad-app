const initialState = {
    user: null,
    isLoggedIn: false,
    position: null

}


export const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGGED_IN':

            return { user: action.user, isLoggedIn: true, position: action.position };
        case 'LOGGED_OUT':
            return { user: null, isLoggedIn: false, position: null };
        default:
            return state;

    }
}