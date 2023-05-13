import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  authReducer,
  cartReducer,
  productDetailReducer,
  productsReducer,
} from './slices';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { persistConfig } from './reduxPersist';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        thunk: false,
        //@ts-ignore
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type IRootReducer = typeof rootReducer;
export type IStore = typeof store;
export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = IStore['dispatch'];
