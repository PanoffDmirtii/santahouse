import { TYPES } from "./action";

const initState = {
  user: null,
  products: [],
  popularProducts: [],
  stocks: [],
};

export const rootReducer = (state = initState, action) => {
  console.log(action);
  
  switch (action.type) {
    case TYPES.GET_VK_USER:
      return { ...state, user: action.payload };
    case TYPES.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case TYPES.GET_POPULAR_PRODUCTS:
      return { ...state, popularProducts: action.payload };
    case TYPES.GET_STOCKS:
      return { ...state, stocks: action.payload };
    default:
      return state;
  }
};
