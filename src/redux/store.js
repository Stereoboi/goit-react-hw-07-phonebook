import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { 
  persistStore, 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import {devToolsEnhancer} from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";
// const enhancer = devToolsEnhancer();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);