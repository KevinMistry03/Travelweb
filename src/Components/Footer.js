import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>

            <footer className="py-3 bg-dark mt-5">
                <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2 text-muted">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link px-2 text-muted">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/TravelPackage" className="nav-link px-2 text-muted">
                            Travel Package
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/TravellerHistory" className="nav-link px-2 text-muted">
                            Traveller History
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ContactUs" className="nav-link px-2 text-muted">
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-muted">© 2022 Company, Inc</p>
            </footer>


        </>
    );
};

export default Footer;
