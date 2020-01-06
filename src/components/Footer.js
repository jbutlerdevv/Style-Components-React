import React, { Component } from 'react';
import Navlink from '../elements/nav/Navlink';

const Footer = props => {
    return (
        <div>
            <footer className="footer">
                <nav className="navbar bg-dark">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}

                    {/* Navigation */}
                    <div className="row col-md-12 d-flex justify-content-around">
                        <ul className="navbar-nav mb-5">
                            <li className="nav-item m-1">
                                <Navlink className="nav-link" href="#">Home <span className="sr-only">(current)</span></Navlink>
                            </li>
                            <li className="nav-item m-1">
                                <Navlink className="nav-link" href="#">About</Navlink>
                            </li>
                            <li className="nav-item m-1">
                                <Navlink className="nav-link" href="#">Contact</Navlink>
                            </li>
                            <li className="nav-item m-1">
                                <Navlink className="nav-link" href="#">Stuff</Navlink>
                            </li>
                        </ul>
                        {/* END Navigation */}

                        {/* Social Media */}
                        <ul className="navbar-nav mb-5">
                            <li className="nav-item">
                                <Navlink className="nav-link" href="#">
                                    <i className="fab fa-github fa-2x"></i>
                                    <span className="ml-2">Github</span>
                                </Navlink>
                            </li>
                            <li className="nav-item">
                                <Navlink className="nav-link" href="#">
                                    <i className="fab fa-twitter fa-2x"></i>
                                    <span className="ml-2">Twitter</span>
                                </Navlink>
                            </li>
                            <li className="nav-item">
                                <Navlink className="nav-link" href="#">
                                    <i className="fab fa-facebook-f fa-2x"></i>
                                    <span className="ml-2">Facebook</span>
                                </Navlink>
                            </li>
                            <li className="nav-item">
                                <Navlink className="nav-link" href="#">
                                    <i className="fab fa-snapchat-ghost fa-2x"></i>
                                    <span className="ml-2">Snapchat</span>
                                </Navlink>
                            </li>

                        </ul>
                    </div>
                    {/* END Social Media */}

                    {/* Trademark & Created By */}
                    <div className="row col-md-12 justify-content-around">
                        <p className="text-muted">This web application was created and is maintained by
                     <em> JB-Coding&trade;</em>
                        </p>
                    </div>
                    <div className="row col-md-12 justify-content-around">
                        <p className="text-muted">Contact us by navigating to the
                                <Navlink href="/contact">
                                    <em> Contact </em>
                                </Navlink>
                            page
                        </p>
                    </div>
                    {/* END Trademark & Created By */}

                </nav>
                
            </footer>

        </div>
    )
}

export default Footer;