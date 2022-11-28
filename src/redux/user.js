import axios from '../base/axios';

const LOGIN_USER = 'doctora/redux/LOGIN_USER';
const ADD_USERS = 'doctora/redux/ADD_USERS';

// eslint-disable-next-line default-param-last
const userReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;

    case ADD_USERS:
      return action.payload;

    default:
      return state;
  }
};

export const loginusers = (loginUser) => (dispatch) => {
  axios.post('../../login', loginUser).then((res) => {
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
  });
};

export const addUsers = (newUser) => (dispatch) => {
  axios.post('users', newUser).then((res) => {
    dispatch({
      type: ADD_USERS,
      payload: res.data,
    });
  });
};

export default userReducer;
