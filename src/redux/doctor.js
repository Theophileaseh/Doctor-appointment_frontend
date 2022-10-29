import axios from '../base/axios';

const GET_DOCTORS = 'doctora/redux/GET_DOCTORS';

const doctorReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DOCTORS:
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


export default doctorReducer;
