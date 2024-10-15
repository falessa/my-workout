import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from './rootReducer';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['plans']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store =  createStore(persistedReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
    })
});

export const persistor = persistStore(store);