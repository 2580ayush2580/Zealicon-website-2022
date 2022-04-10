import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { LoginUser } from "../../redux/actions/auth";
import { loginZeal } from "../../redux/api";

export default function Login() {
  const dispatch = useDispatch();
  let history = useNavigate();

  const initialState = {
    query: "",
    // password: "",
  };
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", user.email);
    // formData.append("password", user.password);
    loginZeal(formData).then((res) => {
      setUser(initialState);
      history("/user");
      console.log(res);
    });
  };

  return (
    <div className="fullscreen login p-100 d-flex justify-content-center align-items-center text-white font-48">
      <div className="form-bg">
        <div className="font-bold font-30 text-white">Sign in</div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-3">
              Email
            </div>
            <input
              onChange={handleChange}
              name="email"
              className="input-container font-regular font-14 text-white mt-1"
              type={"email"}
              placeholder={"John.snow@gmail.com"}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="input-btn mt-5 font-bold text-white font-18"
              type={"submit"}
              value="SIGN IN"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
