import axios from '../base/axios';

const GET_APPOINTMENTS = 'doctora/redux/GET_APPOINTMENTS';
const ADD_APPOINTMENTS = 'doctora/redux/ADD_APPOINTMENTS';

const appointmentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_APPOINTMENTS:
      return action.payload;

      case ADD_APPOINTMENTS:
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

export const addAppointments = () => (dispatch) => {
  axios.get('appointments').then((res) => {
    dispatch({
      type: ADD_APPOINTMENTS,
      payload: res.data,
    });
  });
};


export default appointmentReducer;
