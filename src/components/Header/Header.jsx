import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/img/img-1.png' // Ensure this path is correct

const Header = () => {
  return (
    <div
      className='p-5 mb-4 rounded-3 mt-1'
      style={{
        backgroundImage: `url(${image})`, // Corrected syntax
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div className='container-fluid py-5'>
        <h1 className='display-5 fw-bold'>Order your favourite food here</h1>
        <p className='col-md-8 fs-4'>Discover the best Drinks and Beverages in Pune</p>
        <Link to="/explore" className="btn btn-lg btn-primary">Explore</Link>
      </div>
    </div>
  )
}

export default Header
