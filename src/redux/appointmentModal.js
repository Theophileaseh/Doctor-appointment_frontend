const SHOW_MODAL = 'doctora/redux/SHOW_MODAL';
const HIDE_MODAL = 'doctora/redux/HIDE_MODAL';

const appointmentModalReducer = (state = { show: false}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    case HIDE_MODAL:
      return action.payload;

    default:
      return state;
  }
};

export const showModal = () => ({
  type: SHOW_MODAL,
  payload: {show: true},
});

export const hideModal = () => ({
  type: HIDE_MODAL,
  payload: {show: false},
});

export default appointmentModalReducer;
