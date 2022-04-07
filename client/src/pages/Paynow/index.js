import React, { Children } from 'react'
import { useNavigate } from 'react-router-dom';
import { generateOrder, makePayment } from "../../redux/api/index";

export default function Paynow() {


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

  async function displayRazorpay(e) {
    e.preventDefault();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    console.log(res);
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await generateOrder();
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
  return (
    <div className="fullscreen login p-100 d-flex justify-content-center align-items-center text-white font-48">
      <div className="form-bg">
        <div className="font-bold font-30 text-white text-center">Paynow</div>
        <form onSubmit={(e) => displayRazorpay(e)}>
          <div className="d-flex text-white justify-content-center">
            <input
              type="submit"
              className="input-btn mt-4 font-bold text-white font-18"
              value="Pay Now"
            />
          </div>
        </form>
      </div>
    </div>

  )
}
