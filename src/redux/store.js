import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import appointmentModalReducer from './appointmentModal';

export default configureStore({
  reducer: {
    appointmentModal: appointmentModalReducer,
  },
  middleware: [logger, thunk],
});
