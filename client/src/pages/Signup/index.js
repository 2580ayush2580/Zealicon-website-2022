import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../redux/actions/auth";
import { generateOrder, login, makePayment, register } from "../../redux/api";

export default function Signup() {
  const initialData = {
    full_name: "",
    contact_no: "",
    email: "",
    admission_no: "",
    password: "",
    college: "",
  };

  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  
  let history = useNavigate();

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    console.log(res);
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // send user_identity in razorpay
    const formData = new FormData();
    formData.append("user_identity", user.email);
    console.log(formData)

    // function of razorpay
    const result = await generateOrder(formData);
    console.log("RESULTS: ", result);
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { key_id, amount, order_id, server_order_id } = result;

    const options = {
      key: key_id, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: "INR",
      name: "Tech Trek",
      description: "TechTrek registration fees",
      order_id: order_id,
      handler: async function (response) {
        console.log(response);
        const data = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          server_order_id,
        };

        const result = await makePayment(data);
        console.log('result',result);
        if(result.status === 'Payment Successful'){
          history("/user")
        }
        else{
          alert("Payment Failed")
        }
      },
      theme: {
        color: "#FD8D41",
        backdrop_color: "#231F2C",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    
    history("/paynow");
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", user.full_name);
    formData.append("contact_no", user.contact_no);
    formData.append("email", user.email);
    formData.append("admission_no", user.admission_no);
    formData.append("password", user.password);
    formData.append("college", user.college);
    register(formData).then((res) => {
      console.log(res)
      // const loginFormData = new FormData();
      // formData.append("email",user.email);
      // formData.append("password",user.password);
      // login(formData).then(() => {
        displayRazorpay()
      // })
    })
  };

  return (
    <div className="fullscreen login d-flex justify-content-center align-items-center text-white font-48">
      <div className="form-bg">
        <div className="font-regular font-16 text-white">Welcome</div>
        <div className="font-bold font-30 text-white">Register now</div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-4">
              Full name
            </div>
            <input
              onChange={handleChange}
              name="full_name"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder={"John"}
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-3">
              Phone
            </div>
            <input
              onChange={handleChange}
              name="contact_no"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder="8923xx2234"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-3">
              Email
            </div>
            <input
              onChange={handleChange}
              name="email"
              className="input-container font-regular font-14 text-white mt-1"
              type={"email"}
              placeholder="John.snow@gmail.com."
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-3">
              College
            </div>
            <input
              onChange={handleChange}
              name="college"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder="JSSATE Noida"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-3">
              Admission Number
            </div>
            <input
              onChange={handleChange}
              name="admission_no"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder="ex: 19CSE001"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-3">
              Create Password
            </div>
            <input
              onChange={handleChange}
              name="password"
              className="input-container font-regular font-14 text-white mt-1"
              type={"password"}
              placeholder="Password.."
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="input-btn mt-5 font-bold text-white font-18"
              type={"submit"}
              value="REGISTER NOW"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
