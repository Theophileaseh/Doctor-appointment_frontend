import axios from '../base/axios';

const ADD_DOCTORS = 'doctora/redux/ADD_DOCTORS';
// eslint-disable-next-line default-param-last
const doctorReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_DOCTORS:
      return action.payload;
    default:
      return state;
  }
};

export const addDoctors = (AddDoctors) => (dispatch) => {
  axios.post('auth/doctors', AddDoctors).then((res) => {
    dispatch({
      type: ADD_DOCTORS,
      payload: res.data,
    });
  });
};

export default doctorReducers;
