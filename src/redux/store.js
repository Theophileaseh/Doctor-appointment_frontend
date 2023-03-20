import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appointmentModalReducer from './appointmentModal';
import doctorReducer from './doctor';
import setDoctorReducer from './setDoctor';
import appointmentReducer from './appointment';

import userReducer from './user';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducers = combineReducers({
  appointmentModal: appointmentModalReducer,
  doctor: doctorReducer,
  setDoctor: setDoctorReducer,
  appointment: appointmentReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer, middleware: [logger, thunk],
});

export const persistor = persistStore(store);

export default store;
