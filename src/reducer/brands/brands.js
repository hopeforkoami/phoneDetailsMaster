import api from '../../api/phoneApi';

const BRANDS_GETTED = 'BRANDS_GETTED';
const BRANDS_FILTRED = 'BRANDS_FILTRED';
let initialState = [];

export const getBrandsAction = () => async (dispatch) => {
  const allBrands = await api.getBrands();
  dispatch({
    type: BRANDS_GETTED,
    payload: allBrands,
  });
};

export const filtreBrandsAction = (partname) => ({
  type: BRANDS_FILTRED,
  payload: partname,
});

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BRANDS_GETTED: {
      initialState = action.payload;
      return action.payload;
    }
    case BRANDS_FILTRED: {
      const newstate = initialState.filter((brand) => {
        const b = action.payload.toLowerCase();
        return brand.name.toLowerCase().includes(b);
      });
      console.log(newstate);
      console.log(state);
      return newstate;
      //  return state.filter((brand) => !brand.name.includes(action.payload));
    }
    default: return state;
  }
};

export default brandsReducer;