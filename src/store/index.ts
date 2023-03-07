import {configureStore} from '@reduxjs/toolkit';
import {CurriedGetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import logger from 'redux-logger';

import RootReducer from '../reducer';

const createDebugger = require('redux-flipper').default;

const getMiddlewares = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware().concat(logger).concat(createDebugger());

const store = configureStore({
  reducer: RootReducer,
  middleware: getMiddlewares,
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
