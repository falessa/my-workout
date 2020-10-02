import * as reducers from './reducers'
// import plansReducer from './plans'
import { combineReducers } from 'redux';

// we'll invoke createStore at store.js, we just combine here
const rootReducer = combineReducers({
    ...reducers
    // plansReducer,
});

export default rootReducer;