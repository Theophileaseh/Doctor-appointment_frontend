import axios from '../base/axios';

const GET_COUNTRIES = 'covid19updates/redux/GET_COUNTRIES';
const SELECT_COUNTRY = 'covid19updates/redux/SELECT_COUNTRY';
const REMOVE_SELECTED_COUNTRY = 'covid19updates/redux/REMOVE_SELECTED_COUNTRY';

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    case SELECT_COUNTRY:
      return action.payload;
    case REMOVE_SELECTED_COUNTRY:
      return {};

    default:
      return state;
  }
};

export const getCountries = () => (dispatch) => {
  axios.get('summary').then((res) => {
    dispatch({
      type: GET_COUNTRIES,
      payload: res.data,
    });
  });
};

export const selectedcountry = () => (dispatch) => {
  axios.get('summary').then((res) => {
    dispatch({
      type: SELECT_COUNTRY,
      payload: res.data,
    });
  });
};

export const removeSelectedCountry = () => ({
  type: REMOVE_SELECTED_COUNTRY,
});

export default countryReducer;
