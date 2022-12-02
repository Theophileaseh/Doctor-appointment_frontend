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

export const setDoctor = (singleDoctor) => (dispatch) => {
  dispatch({
    type: SET_DOCTOR,
    payload: singleDoctor,
  });
};

export default setDoctorReducer;
