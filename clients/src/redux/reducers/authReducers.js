import ACTIONS from '../Actions/index'

const INITIAL_STATE = {
  user: [],
  isSignedIn: false,
  isAdmin: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { 
        ...state, 
        isSignedIn: true
      };
    case ACTIONS.GET_USER:
      return { 
        ...state, 
        user: action.payload.user,
        isAdmin: action.payload.isAdmin
      };
    default:
      return state;
  }
};

export default authReducer;
