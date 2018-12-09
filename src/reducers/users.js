const initialState = {
    coworkers: [],


}


export const users = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COWORKERS':

            const coworkers = [];
            let i = 0;
            for (let prop in action.payload) {

                coworkers[i] = action.payload[prop]

                i++;
            }

            return { ...state, coworkers };
        default:
            return state;

    }
}