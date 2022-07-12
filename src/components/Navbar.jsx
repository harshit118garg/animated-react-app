import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link exact className="navbar-brand" to="/">PRODEVS</Link>
                                <div className="">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link exact activeClassName="menu_active" className="nav-link" to="/service">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link exact activeClassName="menu_active" className="nav-link" to="/about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
