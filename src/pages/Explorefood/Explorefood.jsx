import React, { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


const Explorefood = () => {
    const[category,setCategory]=useState('All')
    const[searchText,setSearchText,]=useState("")
  return (
    <>
   <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form action="">
          <div className="input-group mb-3">
            <select className='mt-2 form-select' style={{"maxWidth":"150px"}} onChange={(e)=>setCategory(e.target.value)}>
            <option value="All">All</option>
              <option value="briyani">Briyani</option>
              <option value="burger">Burger</option>
              <option value="drinks">Drinks</option>
              <option value="salad">salad</option>
              <option value="pizza">Pizza</option>
            </select>
            <input type="text" className="form-control mt-2" placeholder='search' onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
            <button type='submit' className='btn btn-primary mt-2'>
              <i className='bi bi-search'></i>
            </button>

          </div>
        </form>
      </div>
    </div>
   </div>
   <FoodDisplay category={category} searchText={searchText}/>
   </>
  )
}

export default Explorefood
