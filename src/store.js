import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import reduxThunk from 'redux-thunk'

export const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(reduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()))