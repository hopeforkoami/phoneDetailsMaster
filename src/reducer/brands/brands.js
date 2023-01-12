import api from '../../api/phoneApi';

const BRANDS_GETTED = 'BRANDS_GETTED';
const initialState = [];

export const getBrandsAction = () => async (dispatch) => {
  const allBrands = await api.getBrands();
  console.log(allBrands);
  dispatch({
    type: BRANDS_GETTED,
    payload: allBrands,
  });
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BRANDS_GETTED: return (state === initialState) ? action.payload : state;
    default: return state;
  }
};

export default brandsReducer;