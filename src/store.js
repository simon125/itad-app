import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import reduxThunk from 'redux-thunk'
import { initAuthUserSync } from './actions/actions'

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(reduxThunk)
);

store.dispatch(initAuthUserSync());