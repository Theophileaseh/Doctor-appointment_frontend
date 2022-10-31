import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './user';

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [logger, thunk],
});
