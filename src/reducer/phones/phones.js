import api from '../../api/phoneApi';

const PHONES_GETTED = 'PHONES_GETTED';
const DETAILS_GETTED = 'DETAILS_GETTED';
const initialState = [];

export const getPhonesAction = (id) => async (dispatch) => {
  console.log(`console 3 ${id}`);
  const allPhones = await api.getBrandPhones(id);
  dispatch({
    type: PHONES_GETTED,
    payload: allPhones,
  });
};

export const getDetailsAction = () => async (dispatch, slug) => {
  const phoneDetails = await api.getPhoneDetails(slug);
  dispatch({
    type: DETAILS_GETTED,
    payload: phoneDetails,
  });
};

const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHONES_GETTED: return (state === initialState) ? action.payload : state;
    case DETAILS_GETTED: return (state === initialState) ? action.payload : state;
    default: return state;
  }
};

export default phonesReducer;