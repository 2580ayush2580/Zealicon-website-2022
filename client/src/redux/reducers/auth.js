import { REGISTER } from "../actionType/index";

const authReducer = (state = { auth: null }, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        auth: action?.data,
      };
    default:
      return state;
  }
};
export default authReducer;
