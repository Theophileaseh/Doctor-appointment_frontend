import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
<<<<<<< HEAD
import appointmentModalReducer from './appointmentModal';
import doctorReducer from './doctor';
import appointmentReducer from './appointment';

export default configureStore({
  reducer: {
    appointmentModal: appointmentModalReducer,
    doctor: doctorReducer,
    appointment: appointmentReducer,
=======
import userReducer from './user';

export default configureStore({
  reducer: {
    user: userReducer,
>>>>>>> eddcf0b07fc1e4547607a33e9d6a113788ab08b3
  },
  middleware: [logger, thunk],
});
