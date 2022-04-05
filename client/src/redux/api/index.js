import axios from "axios";

const url = "https://zealicon.pythonanywhere.com";

export const register = (data) =>
  axios({
    method: "post",
    url: `${url}/accounts/users/`,
    data: data,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });

export const login = (data) =>
  axios({
    method: "post",
    url: `${url}/accounts/jwt/create/`,
    data: data,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
