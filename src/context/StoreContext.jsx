import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext=createContext(null)

export const StoreContextProvider=(props)=>{

    const[foodList,setFoodList]=useState([])
    const[quantity,setQuantity]=useState({})
    const increaseOty=(foodId)=>{
        setQuantity((prev)=>({...prev,[foodId]:(prev[foodId] || 0) + 1}))
    }
    const decreaseQty=(foodId)=>{
        setQuantity((prev)=>({...prev,[foodId]:prev[foodId]>0 ? prev[foodId]-1:0}))
    }

    const fetchFoodList=async()=>{
        const response=await axios.get("http://localhost:8080/api/foods")
        setFoodList(response.data)
    }

    const removeCart=(foodId)=>{
        setQuantity((prev)=>{
            const update={...prev}
            delete update[foodId]
            return update;
        })
    }
    const contextValue={
        foodList,
        increaseOty,
        decreaseQty,
        quantity,
        removeCart
    }
    useEffect(()=>{
        async function loadData() {
            await fetchFoodList()
            
        }
        loadData()

    },[])


    return(
        <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>
    )
}