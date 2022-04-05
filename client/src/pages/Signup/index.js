import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../redux/actions/auth";

export default function Signup() {
  const dispatch = useDispatch();
  let history = useNavigate();

  const initialData = {
    first_name: "",
    last_name: "",
    contact_no: "",
    email: "",
    admission_no: "",
    password: "",
    year: "",
    branch: "",
    college: "",
    re_password: "",
  };

  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("contact_no", user.contact_no);
    formData.append("email", user.email);
    formData.append("admission_no", user.admission_no);
    formData.append("password", user.password);
    formData.append("year", user.year);
    formData.append("branch", user.branch);
    formData.append("college", user.college);
    formData.append("re_password", user.re_password);
    console.log(user);
    dispatch(RegisterUser(formData)).then((res) => {
      setUser(initialData);
      history("/login");
    });
  };

  return (
    <div className="fullscreen login d-flex justify-content-center align-items-center text-white font-48">
      <div className="form-bg">
        <div className="font-regular font-16 text-white">Welcome</div>
        <div className="font-bold font-30 text-white">Register now</div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-4">
              First name
            </div>
            <input
              onChange={handleChange}
              name="first_name"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder={"John"}
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-4">
              Last name
            </div>
            <input
              onChange={handleChange}
              name="last_name"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder={"Snow"}
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
              Year
            </div>
            <input
              onChange={handleChange}
              name="year"
              className="input-container font-regular font-14 text-white mt-1"
              type={"number"}
              placeholder="ex:- 2"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-3">
              Branch
            </div>
            <input
              onChange={handleChange}
              name="branch"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder="CS"
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
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-3">
              Re-enter Password
            </div>
            <input
              onChange={handleChange}
              name="re_password"
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
