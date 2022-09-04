// import * as reducers from './reducers'
import { createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from './rootReducer'

// export default createStore(combineReducers({
//     ...reducers
// }))

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['plans']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const myStore = () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

export const store =  createStore(persistedReducer);

export const persistor = persistStore(store);

// export default myStore;