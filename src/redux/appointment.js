import axios from '../base/axios';

const GET_APPOINTMENTS = 'doctora/redux/GET_APPOINTMENTS';
const ADD_APPOINTMENTS = 'doctora/redux/ADD_APPOINTMENTS';
const REMOVE_APPOINTMENTS = 'doctora/redux/REMOVE_APPOINTMENTS';

// eslint-disable-next-line default-param-last
const appointmentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_APPOINTMENTS:
      return action.payload;

    case ADD_APPOINTMENTS:
      return action.payload;

    case REMOVE_APPOINTMENTS:
      return action.payload;

    default:
      return state;
  }
};

export const getAppointments = () => (dispatch) => {
  axios.get('appointments').then((res) => {
    dispatch({
      type: GET_APPOINTMENTS,
      payload: res.data,
    });
  });
};

export const addAppointments = (doctorId, addsAppointments) => (dispatch) => {
  axios.post(`doctors/${doctorId}/appointments`, addsAppointments).then((res) => {
    dispatch({
      type: ADD_APPOINTMENTS,
      payload: res.data,
    });
  });
};

export const removeAppointments = (removedAppointment, id, doctorId) => (dispatch) => {
  axios.delete(`doctors/${doctorId}/appointments/${id}`, removedAppointment).then((res) => {
    dispatch({
      type: REMOVE_APPOINTMENTS,
      payload: res.data,
    });
  });
};

export default appointmentReducer;
