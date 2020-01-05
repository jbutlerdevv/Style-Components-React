import React from "react";
import Navlink from "../elements/Navlink";

const Navbar = props => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-dark'>
        <a href='#' className='navbar-brand'>
          <Navlink className='fas fa-barcode fa-2x'></Navlink>
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
              <Navlink as="a" className="nav-link" href="#">Home</Navlink>
            </li>
            <li className="nav-item">
              <Navlink as="a" className="nav-link" href="#">About</Navlink>
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
              <Navlink as="a" className="nav-link" href="#">Contact</Navlink>
            </li>
            <li className="nav-item">
              <Navlink as="a" className="nav-link" href="#">Stuff</Navlink>
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