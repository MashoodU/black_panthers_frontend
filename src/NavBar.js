import React from 'react';
import { Link as ReactLink, useHistory } from 'react-router-dom';
import UserLogout from './LogOut';
import "./NavBar.css"
import "./Button.css"

function logOut() {
    localStorage.clear();

}


function NavBar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
            <div className="container px-4 px-lg-5">
                <img className="navbar-brand" href={props.logoimg}>{props.logoname}</img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <ReactLink className="nav-item" className="nav-link active" aria-current="page" to="/">Home</ReactLink>
                        <ReactLink className="nav-item" className="nav-link active" aria-current="page" to="/register">Registration</ReactLink>
                        <ReactLink className="nav-item" className="nav-link active" aria-current="page" to="/login">Login</ReactLink>
                        <ReactLink className="nav-item" className="nav-link active" aria-current="page"to="/profile">Profile</ReactLink>
                        <ReactLink className="nav-item" className="nav-link active" aria-current="page"to="/aboutUs">About Us</ReactLink>
                        <li className="nav-item dropdown">
                            
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <ReactLink className="dropdown-item" to="/allBooks">All Books</ReactLink>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Books</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                <li><a className="dropdown-item" href="#!">On Sale</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge text-light ms-1">0</span>
                        </button>
                        <UserLogout/>
                    </form>
                </div>
            </div>
        </nav>

    )
};

export default NavBar;
