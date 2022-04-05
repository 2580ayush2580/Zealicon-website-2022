import * as api from "../../api";
import { REGISTER } from "../../actionType/index";

export const RegisterUser = (formData) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: REGISTER, data });
  } catch (e) {
    console.log(e);
  }
};
