import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodCard from '../FoodCard'

const FoodDisplay = ({category,searchText}) => {
 const {foodList}= useContext(StoreContext)
 const filterFood=foodList.filter((food)=>(
  (category==='All' || food.category===category) &&
  food.name.toLowerCase().includes(searchText.toLowerCase())
  
 ))
  return (
    <div className="container">
      <div className="row">
         {filterFood.length>0?(
       filterFood.map((food,index)=>(
        <FoodCard key={index} name={food.name} imageUrl={food.imageUrl} description={food.description} price={food.price} id={food.id}/>
       ))
         ):(
             <div className="tex-center mt-4">
             <h1>No Food found</h1>
         </div>
          )}
      </div>
    </div>
  )
}

export default FoodDisplay
