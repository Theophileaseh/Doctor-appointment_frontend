import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import appointmentModalReducer from './appointmentModal';
import doctorReducer from './doctor';
import appointmentReducer from './appointment';

export default configureStore({
  reducer: {
    appointmentModal: appointmentModalReducer,
    doctor: doctorReducer,
    appointment: appointmentReducer,
  },
  middleware: [logger, thunk],
});
