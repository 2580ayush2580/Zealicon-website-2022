import { REGISTER, LOGIN } from "../actionType/index";

const authReducer = (state = { register: null, login: null }, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        register: action?.data,
      };
    case LOGIN:
      return {
        ...state,
        login: action?.data,
      };
    default:
      return state;
  }
};
export default authReducer;
