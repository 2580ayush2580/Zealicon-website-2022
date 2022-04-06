import axios from "axios";

const url = "https://zealicon.pythonanywhere.com";

export const register = async (formData) => {
  const { data } = await axios({
    method: "post",
    url: `${url}/accounts/users/`,
    data: formData,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
  console.log(data)
  localStorage.setItem("jwt-token", data.access);
  return data;
}

export const login = async (formData) => {
  const { data } = await axios({
    method: "post",
    url: `${url}/accounts/jwt/create/`,
    data: formData,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
  localStorage.setItem("jwt-token", data.access);
  return data;
}


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
    const { data } = await axios({
      method: "POST",
      url: `${url}/payment/`,
      data: formData,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      }
    })
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
    return error.response.data;
  }
}

export const fetchZealID = async () => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `${url}/accounts/users/me/`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      }
    })
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
    return error.response.data;
  }
}