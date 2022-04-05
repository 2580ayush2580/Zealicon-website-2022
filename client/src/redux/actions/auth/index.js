import * as api from "../../api";
import { REGISTER, LOGIN } from "../../actionType/index";

export const RegisterUser = (formData) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: REGISTER, data });
  } catch (e) {
    console.log(e);
  }
};

export const LoginUser = (formData) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, data });
  } catch (e) {
    console.log(e);
  }
};
