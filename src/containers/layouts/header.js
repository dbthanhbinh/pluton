import React from 'react'
import './header.scss'
const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-inner">
                <div className="container">
                    <a href="/" className="brand">
                        <img src="assets/images/logo.png" width="120" height="40" alt="Logo" />
                    </a>
                    <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <i className="icon-menu"></i>
                    </button>
                    <div className="nav-collapse collapse pull-right">
                        <ul className="nav" id="top-navigation">
                            <li className="active"><a href="#home">Home</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#clients">Clients</a></li>
                            <li><a href="#price">Price</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header