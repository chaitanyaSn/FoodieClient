import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const FoodCard = ({name,price,imageUrl,id,description}) => {
  const{quantity,increaseOty,decreaseQty}=useContext(StoreContext)
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4d-flex justify-content-center">
    <div className="card" style={{"max-width": "320px"}}>
<img src={imageUrl} className="card-img-top" alt="Product Image"/>
<div className="card-body">
<h5 className="card-title">{name}</h5>
<p className="card-text">{description.split(" ").slice(0, 5).join(" ")}</p>
<div className="d-flex justify-content-between align-items-center">
    <span className="h5 mb-0">${price}</span>
    <div>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-half text-warning"></i>
        <small className="text-muted">(4.5)</small>
    </div>
</div>
</div>
<div className="card-footer d-flex justify-content-between bg-light">
<button className="btn btn-primary btn-sm" onClick={()=>increaseOty(id)}>Add to Cart</button>
{quantity[id]>0?(
  <div className='d-flex align-item-center gap-2'>
    <button className='btn btn-danger btn-sm' onClick={()=>decreaseQty(id)}><i className="bi bi-dash-circle"></i></button>
    <span className='fw-bold'>{quantity[id]}</span>
    <button className='btn btn-success btn-sm ' onClick={()=>increaseOty(id)}><i className="bi bi-plus-circle"></i></button>
  </div>
):(
  <button className='btn btn-success btn-sm' onClick={()=>increaseOty(id)}><i className="bi bi-plus-circle"></i></button>
)}

</div>
</div>
  </div>
  )
}

export default FoodCard
