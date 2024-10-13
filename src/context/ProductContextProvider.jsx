import React, { createContext, useState } from "react";
import data from "../data.js";

const productContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [products] = useState(data);
  const[cart,setCart]=useState([])

   
  console.log(products)
  return (
    <>
      <productContext.Provider value={{products,cart,setCart}}>
        {children}
      </productContext.Provider>
    </>
  );
};

export default ProductContextProvider;
export {productContext}