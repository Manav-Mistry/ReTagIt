import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Navbar.css"

import { useNavigate } from 'react-router-dom'
import { reset, logout } from '../features/auth/authSlice'
import { useSelector, useDispatch } from "react-redux"

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)

    function logoutUser() {
        dispatch(logout())
        dispatch(reset())
    }

    function loginUser() {
        navigate("/login")
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">

                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <Link class="nav-link" to="viewAllItems">All Items</Link>
                        <div>
                            {user
                                ? (
                                    <>
                                        {/* Hello {user.name} */}
                                        <div className='nav-link' onClick={logoutUser}>Logout</div>
                                    </>
                                )
                                : (
                                    <div className='nav-link' onClick={loginUser}>Login</div>
                                )}
                        </div>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Requests
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="#">Pending Requests</Link></li>
                                <li><Link class="dropdown-item" to="#">All Requests</Link></li>
                                {/* <li><hr class="dropdown-divider" /></li> */}
                                {/* <li><Link class="dropdown-item" to="#">Something else here</Link></li> */}
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar