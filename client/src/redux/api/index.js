import axios from "axios";

const url = "https://api.zealicon.in";

export const register = async (formData) => {
  const { data } = await axios({
    method: "post",
    url: `${url}/accounts/`,
    data: formData,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
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
  return data;
}

export const loginZeal = async (formData) => {
  try{
    const { data } = await axios({
      method: "GET",
      url: `${url}/accounts/users/`,
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    // localStorage.setItem("jwt-token", data.access);
    return data;
  } catch (error) {
    console.log(error)
    return error.response.data;
  }
}
// /accounts/get_zeal_id/


export const generateOrder = async () => {

var config = {
  method: 'get',
  url: `${url}/payment/`,
  headers: {
    "Content-Type": "application/json",
  },
};
const {data} = await axios(config)
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
      }
    })
    console.log('make payment',data);
    localStorage.setItem('admission_number', data.email)
    return data;
  } catch (error) {
    console.log(error)
    return error.response.data;
  }
}

export const handleFeildsCheck = async (query) => {
  const {admission_no, email, college, fullname, contact_no} = query
  try {
    const { data } = await axios({
      method: "GET",
      url: `${url}/accounts/validate_user_details/?admission_no=${admission_no}&email=${email}&fullname=${fullname}&college=${college}&contact_no=${contact_no}`,
      headers: {
        "Content-Type": `application/json`,
      }
    })
    return data;
  } catch (error) {
    let obj = error.response.data;
    return Object.entries(obj)[0];
  }
}

export const fetchZealID = async (query) => {
  console.log(query)
  try {
    const { data } = await axios({
      method: "GET",
      url: `${url}/accounts/users/?query=${query}`,
      headers: {
        "Content-Type": `application/json`,
      }
    })
    console.log(data);
    if(data.admission_no) {localStorage.setItem("admission_number",data.email)}
    return data;
  } catch (error) {
    console.log(error)
    return error.response.data;
  }
}