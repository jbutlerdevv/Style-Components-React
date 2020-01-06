import React from "react";
import Navlink from "../elements/nav/Navlink";
import Navbrand from "../elements/nav/Navbrand";

const Navbar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <a href="#" className="navbar-brand" data-toggle="tooltip" data-placement="bottom" title="JB-Coding&trade;">
          <Navbrand className='fas fa-barcode fa-2x'></Navbrand>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
            <Navlink as="i" className="fas fa-bars"></Navlink>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-around w-100">
            <li className="nav-item">
              <Navlink as="a" className="nav-link" href="/">Home</Navlink>
            </li>
            <li className="nav-item">
              <Navlink as="a" className="nav-link" href="/about">About</Navlink>
            </li>
            <li>
              <form className="form-inline d-none d-lg-block">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search" />
                <button className="btn btn-outline-danger" type="submit">Search</button>
              </form>
            </li>
            <li className="nav-item">
              <Navlink as="a" className="nav-link" href="/contact">Contact</Navlink>
            </li>
            <li className="nav-item">
              <Navlink as="a" className="nav-link" href="/stuff">Stuff</Navlink>
            </li>
          </ul>
          <div className="form-inline input-group p-0 d-lg-none col-md-8">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search" />
            <div className="input-group-append">
              <Navlink as="button" className="btn" type="submit">Search</Navlink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;