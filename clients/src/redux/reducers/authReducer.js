import ACTIONS from "../actions/index";

const initialState = {
  user: [],
  isLogged: false,
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        isLogged: true,
      };
      case ACTIONS.GET_USER:
      return {
        ...state,
        isAdmin: action.payload.isAdmin,
        user: action.payload.user,
      };
    default: 
    return state;
  }
}

export default authReducer;