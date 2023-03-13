import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { reset, logout } from '../features/auth/authSlice'
import Items from '../components/Items'

function Home() {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const {user} = useSelector((state) => state.auth)

  // function logoutUser() {
  //   dispatch(logout())
  //   dispatch(reset())
  // }

  // function loginUser() {
  //   navigate("/login")
  // }

  return (
    <>
        <Items />
    </>

  )
}

export default Home