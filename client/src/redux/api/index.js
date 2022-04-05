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

export const generateOrder = async () => {
  const { data } = await axios({
    method: "GET",
    url: `${url}/payment/`,
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
    }
  })


  return data;
}

export const makePayment = async (formData) => {
  try {
    const { data } = await axios.post("/payment/", formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
    return error.response.data;
  }
}