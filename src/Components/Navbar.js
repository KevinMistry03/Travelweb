import React from 'react';
import { Link } from "react-router-dom";
import DarkMode from '../Components/DarkMode';


const Navbar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-transperant">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">
                        Travel
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active text-white" aria-current="page" to="/">
                                <span>Home</span>
                            </Link>
                            <Link className="nav-link text-white" to="/About">
                                <span>About</span>
                            </Link>
                            <Link className="nav-link text-white" to="/TravelPackage">
                                <span>Travel Package</span>
                            </Link>
                            <Link className="nav-link text-white" to="/TravellerHistory">
                                <span>Traveller History</span>
                            </Link>
                            <Link className="nav-link text-white" to="/ContactUs">
                                <span>Contact Us</span>
                            </Link>

                            <DarkMode />

                        </div>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar