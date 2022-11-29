import axios from '../base/axios';

const SET_DOCTOR = 'doctora/redux/SET_DOCTOR';

// eslint-disable-next-line default-param-last
const setDoctorReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DOCTOR:
      return action.payload;

    default:
      return state;
  }
};

export const getDoctors = () => (dispatch) => {
  axios.get('doctors').then((res) => {
    dispatch({
      type: GET_DOCTORS,
      payload: res.data,
    });
  });
};

export const setDoctor = (singleDoctor) => (dispatch) => {
  dispatch({
    type: SET_DOCTOR,
    payload: singleDoctor,
  });
};

export default setDoctorReducer;
