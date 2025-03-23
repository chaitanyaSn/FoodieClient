import React, { useContext } from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Menubar = () => {
 const{quantity}= useContext(StoreContext)
 const totalCartItems = Object.values(quantity).filter(qty=>qty>0).length;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand mx-2" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
          <div className="menubar-right">
            <Link className="position-relative cart-container" to="/cart">
              <i className="bi bi-cart"></i>
              <span className="position-absolute cart-badge badge rounded-pill bg-warning">
                {totalCartItems}
              </span>
            </Link>

            <button className="btn btn-outline-primary">Login</button>
            <button className="btn btn-outline-success">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
