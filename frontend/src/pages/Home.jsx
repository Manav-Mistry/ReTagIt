import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { reset, logout } from '../features/auth/authSlice'
import Items from '../components/Items'

import "../style/home.css"
import Footer from "../components/Footer"

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
        {/* <Items /> */}
        <section className='intro-1'>
          <div className="intro-1-desc">
            <div className="title-slogan">ReTagIt</div>
            <div className="title-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, assumenda.</div>
          </div>
          <div className="intro-1-img">
            <img src='./img/intro-1.svg' width={550}/>
          </div>
        </section>


        <section className='intro-2-sec'>
          <div className='intro-2'>
            <div className="intro-2-desc">
              <div className="slogan">ReTagIt</div>
              <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, assumenda.</div>
            </div>
            <div className="intro-2-img">
              <img src='./img/intro-2.svg' width={450}/>
            </div>
          </div>
        </section>

        <section className='intro-sec-3'>
          <div className="card">
            <img src='./img/card-1.svg' width={250} height={280}/>
            <div className="card-title">ReTag your item</div>
            <div className="card-desc"></div>
          </div>
          <div className="card">
            <img src='./img/card-2.svg' width={250} height={280}/>
            <div className="card-title">With Robust security</div>

            <div className="card-desc">  </div>
          </div>
          <div className="card">
            <img src='./img/card-3.svg' width={250} height={280}/>
            <div className="card-title">Make a request</div>

            <div className="card-desc"></div>
          </div>
        </section>

        <Footer />
</>

  )
}

export default Home
