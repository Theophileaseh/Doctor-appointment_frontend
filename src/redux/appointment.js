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
      return { ...state.appointment.filter((appoint) => appoint !== action.payload) };

    default:
      return state;
  }
};

export const getAppointments = (userToken) => (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: userToken,
  };
  axios.get('appointments', { headers }).then((res) => {
    dispatch({
      type: GET_APPOINTMENTS,
      payload: res.data,
    });
  });
};

export const addAppointments = (addsAppointments) => (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: addsAppointments.token,
  };

  axios.post('appointments', addsAppointments, { headers }).then((res) => {
    dispatch({
      type: ADD_APPOINTMENTS,
      payload: res.data,
    });
  });
};

export const removeAppointments = (removedAppointment) => (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: removedAppointment.token,
  };
  axios.delete(`appointments/${removedAppointment.id}`, { headers }).then((res) => {
    dispatch({
      type: REMOVE_APPOINTMENTS,
      payload: res.data,
    });
  });
};

export default appointmentReducer;
