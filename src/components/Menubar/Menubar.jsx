import React, { useContext } from "react";
import "./Menubar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Menubar = () => {
  const { quantity, token, setToken,setQuantity } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/login');
    setQuantity({})
  };

  const totalCartItems = Object.values(quantity).filter(qty => qty > 0).length;

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
              <Link className="nav-link" aria-current="page" to="/">
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
          <div className="d-flex align-items-center gap-3">
            <Link className="position-relative text-decoration-none" to="/cart">
              <i className="bi bi-cart fs-4"></i>
              {totalCartItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  {totalCartItems}
                </span>
              )}
            </Link>

            {!token ? (
              <div className="d-flex gap-2">
                <Link to="/register">
                  <button className="btn btn-outline-success">Register</button>
                </Link>
                <Link to="/login">
                  <button className="btn btn-outline-success">Login</button>
                </Link>
              </div>
            ) : (
              <div className="dropdown">
                <button 
                  className="btn btn-link nav-link dropdown-toggle" 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img 
                    src="https://via.placeholder.com/32" 
                    alt="Profile" 
                    className="rounded-circle" 
                    width={32} 
                    height={32}
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={() => navigate('/myorders')}
                    >
                      My Orders
                    </button>
                  </li>
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;