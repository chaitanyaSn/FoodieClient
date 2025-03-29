import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [foodList, setFoodList] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [token, setToken] = useState("");
  const increaseOty = async(foodId) => {
    setQuantity((prev) => ({ ...prev, [foodId]: (prev[foodId] || 0) + 1 }));
    await axios.post('http://localhost:8080/api/cart',{foodId},{headers:{"Authorization":`Bearer ${token}`}})
  };

  const decreaseQty = async(foodId) => {
    setQuantity((prev) => ({
      ...prev,
      [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0,
    }));
    await axios.post('http://localhost:8080/api/cart/remove',{foodId},{headers:{"Authorization":`Bearer ${token}`}})
  };

  const fetchFoodList = async () => {
    const response = await axios.get("http://localhost:8080/api/foods");
    setFoodList(response.data);
  };

  const removeCart = (foodId) => {
    setQuantity((prev) => {
      const update = { ...prev };
      delete update[foodId];
      return update;
    });
  };

  const loadCartData=async(token)=>{
    const res=await axios.get('http://localhost:8080/api/cart',{headers:{"Authorization":`Bearer ${token}`}})
    setQuantity(res.data.items)
  }
  const contextValue = {
    foodList,
    increaseOty,
    decreaseQty,
    quantity,
    setQuantity,
    removeCart,
    token,
    loadCartData,
    setToken,
  };
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();

      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData();
  }, []);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
