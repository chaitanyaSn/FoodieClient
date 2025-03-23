import React from 'react'
import { categories } from '../../assets/assets'
import './Explore.css'
const Explore = ({category,setCategory}) => {
  return (
    <div className='explore-menu position-relative'>
      <h1 className='d-flex align-items-center justify-content-between'>
        Explore our menu
   
      <div className='d-flex'>
        <i className='bi bi-arrow-left-circle small-icon'></i>
        <i className='bi bi-arrow-right-circle small-icon'></i>
      </div>
      </h1>
      <p></p>
      <div className="d-flex justify-content-between gap-4 overflow-auto explore- menu-list">
        {categories.map((item,index)=>{
            return(
                <div className='text-center explore-menu-list-item' onClick={() => setCategory(prev => prev === item.category ? "All" : item.category)}
>
                    <img src={item.icon} alt="" className={item.category===category?"rounded-circle active":"rounded-circle"} height={128} width={128}/>
                    <p className='mt-2 fw-bold'>{item.category}</p>

                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Explore
