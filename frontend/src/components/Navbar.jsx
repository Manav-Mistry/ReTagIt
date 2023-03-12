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
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <Link className="nav-link" to="viewAllItems">All Items</Link>
                        <Link className="nav-link" to="addItem">Add Item</Link>
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
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Requests
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="#">Pending Requests</Link></li>
                                <li><Link className="dropdown-item" to="#">All Requests</Link></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                {/* <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar