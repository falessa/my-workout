import * as reducers from './reducers'
import { combineReducers } from '@reduxjs/toolkit'

// we'll invoke configureStore at store.js, we just combine here
const rootReducer = combineReducers({
    ...reducers
});

export default rootReducer