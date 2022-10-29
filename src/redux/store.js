import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import appointmentModalReducer from './appointmentModal';
import doctorReducer from './doctor';

export default configureStore({
  reducer: {
    appointmentModal: appointmentModalReducer,
    doctor: doctorReducer,
  },
  middleware: [logger, thunk],
});
