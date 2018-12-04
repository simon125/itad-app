const initialState = {
    user: null
}


export const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGGED_IN':

            return { user: action.user };
        case 'LOGGED_OUT':
            return { user: null };
        default:
            return state;

    }
}