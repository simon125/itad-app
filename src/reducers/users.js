const initialState = {
    coworkers: [],
    tasks: [],
    loggedCoworker: null
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
        case 'GET_TASKS':
            const tasks = [];
            let j = 0;
            for (let prop in action.payload) {
                const assignedTasks = action.payload[prop].assignedTasks
                const coworkerNick = action.payload[prop].nickName
                tasks[j] = { coworkerNick, assignedTasks };
                j++
            }
            console.log(tasks)
            return { ...state, tasks }
        case 'SET_SINGLE_COWORKER':
            const loggedCoworker = action.payload
            return { ...state, loggedCoworker }
        default:
            return state;

    }
}