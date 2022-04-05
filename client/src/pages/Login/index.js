import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../redux/actions/auth";

export default function Login() {
  const dispatch = useDispatch();
  let history = useNavigate();

  const initialState = {
    email: "",
    password: "",
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
    formData.append("password", user.password);
    dispatch(LoginUser(formData)).then((res) => {
      setUser(initialState);
      history("/paynow");
      console.log(res);
    });
  };

  return (
    <div className="fullscreen login p-100 d-flex justify-content-center align-items-center text-white font-48">
      <div className="form-bg">
        <div className="font-bold font-30 text-white">Sign in</div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-5">
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
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-baseline">
              <div className="font-regular font-16 text-labelColor mt-4">
                Password
              </div>
              <Link to="/forgot-password" className="text-decoration-none">
                <div className="font-demi font-16 text-formColor">
                  Forgot Password ?
                </div>
              </Link>
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
              value="SIGN IN"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
