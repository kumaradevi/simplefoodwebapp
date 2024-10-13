import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContextProvider";


const Product = ({product}) => {
 const {cart,setCart} =useContext(productContext)

  //adding item to the cart
  const addCart=()=>{
    setCart([...cart,product])
  }
  //removing item form the cart
  const removeCart=()=>{
   const filteredData=cart.filter((p)=>p.id!==product.id)
   setCart(filteredData)
  }

 
console.log("selected item",cart)
 const productName=product?.name.length>15?product.name.substring(0,15)+"..":product.name
  return (
    <>
      <div className="w-[250px] h-[340px] shadow-md p-3">
        <div className="w-[100%] h-[200px]">
          <img src={product.img} alt={product.id}  className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="flex justify-center flex-col items-center gap-1">
          <h3 className="text-lg font-semibold mt-3">{productName}</h3>
          <p className="text-gray-700">Rs.{product.price}</p>
         {cart.includes(product)?(<button className="bg-red-700 px-5 py-2 text-white rounded-md" onClick={removeCart}>remove from cart</button>): (<button className="bg-green-700 px-5 py-2 text-white rounded-md" onClick={addCart}>Add to Cart</button>)}
        </div>
      </div>
    </>
  );
};

export default Product;
