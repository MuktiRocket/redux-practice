const initialState = {};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, state: action.payload };
    default:
      return { state };
  }
};

export const getCityData = (state = initialState, action) => {
  switch (action.type) {
    case 'CITY':
      return { ...state, state: action.payload };
    default:
      return { state };
  }
};