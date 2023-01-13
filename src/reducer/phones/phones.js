import api from '../../api/phoneApi';

const PHONES_GETTED = 'PHONES_GETTED';
const DETAILS_GETTED = 'DETAILS_GETTED';
const PHONES_FILTRED = 'PHONES_FILTRED';
let initialState = [];

export const getPhonesAction = (id) => async (dispatch) => {
  const allPhones = await api.getBrandPhones(id);
  dispatch({
    type: PHONES_GETTED,
    payload: allPhones,
  });
};

export const filtrePhonesAction = (partname) => ({
  type: PHONES_FILTRED,
  payload: partname,
});

export const getDetailsAction = () => async (dispatch, slug) => {
  const phoneDetails = await api.getPhoneDetails(slug);
  dispatch({
    type: DETAILS_GETTED,
    payload: phoneDetails,
  });
};

const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHONES_GETTED: {
      initialState = action.payload;
      return action.payload;
    }
    case DETAILS_GETTED: return (state === initialState) ? action.payload : state;
    case PHONES_FILTRED: {
      const newstate = initialState.filter((phone) => {
        const b = action.payload.toLowerCase();
        return phone.name.toLowerCase().includes(b);
      });
      return newstate;
    }
    default: return state;
  }
};

export default phonesReducer;