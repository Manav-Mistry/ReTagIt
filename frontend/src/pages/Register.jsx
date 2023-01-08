import React from "react";
import { useState, useEffect } from "react";
import { register, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if(isError) {
      console.log("errror");
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: "light",
      })
    }

    if(isSuccess || user) {
      // redirect to home
      navigate("/")
    }

    dispatch(reset())

  }, [isError, isSuccess, message, user, navigate, dispatch]) 

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password, password2);

    if (password !== password2) {
      toast.error("Passwords are not matching", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      });
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  return (
    <div className="container">
      <div className="header"> {user} </div>

      <div className="form">
        <div className="form-group">
          <form onSubmit={onSubmit}>
            {/* name */}
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
            />

            {/* email */}
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
            />

            {/* password */}
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password"
            />

            {/* password2 */}
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Match your password"
            />

            {/* button */}
            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
