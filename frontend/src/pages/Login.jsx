import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { login, reset } from "../features/auth/authSlice";
import {useSelector, useDispatch} from 'react-redux'
import { toast } from "react-toastify";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "" 
  });

  const { email, password } = formData;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isError, isLoading, isSuccess, message} = useSelector((state) => state.auth)

  // useEffect
  useEffect(() => {
    if(isError) {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: "light",
      })
    }

    if(isSuccess || user) {
      navigate("/")
    }

    dispatch(reset())
  }, [isSuccess, isError, message, navigate, user, dispatch])

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password, password2);
    const loginData = {
      email,
      password
    }
    // dispatch login
    dispatch(login(loginData))
  };

  return (
    <div className="container">
      {/* <div className="header"> {user} </div> */}

      <div className="form" >
        <div className="form-group">
          <form onSubmit={onSubmit}>           

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

            {/* button */}
            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Login
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login