import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { reset, logout } from '../features/auth/authSlice'

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  function logoutUser() {
    dispatch(logout())
    dispatch(reset())
  }

  function loginUser() {
    navigate("/login")
  }

  return (
    <>
      <div>Home</div>
      {user 
        ? (
          <>
            <button onClick={logoutUser}>Logout</button>
          </>
        )
        : (
          <button onClick={loginUser}>Login</button>
        )}
    </>

  )
}

export default Home