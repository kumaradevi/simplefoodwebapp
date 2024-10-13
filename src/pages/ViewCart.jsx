import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/ProductContextProvider";

const ViewCart = () => {
  const { cart, setCart } = useContext(productContext);
  const [total, setTotal] = useState(0);
  //adding total amout
  const getTotal = () => {
    const amt = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotal(amt);
  };

  const removeCart=(removeid)=>{
    setCart(cart.filter((c)=>c.id!==removeid))
  }
  useEffect(() => {
    getTotal();
  }, [cart]);

  console.log("cart items", cart);
  return (
    <>
      <div className="my-[80px] w-[90%] mx-auto">
        <h2 className="text-2xl font-semibold">Total Items in your Cart</h2>
        {cart?.map((c) => {
          return (
            <div key={c.id}>
              <div className="w-[80%] border border-gray-400 flex justify-between  px-5 py-3 m-3">
                <div className="flex gap-12">
                <div className="w-[140px] h-[100px]">
                  <img
                    src={c.img}
                    alt=""
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-3">
                  <h3 className="text-lg font-semibold mt-3">{c.name}</h3>
                  <p className="text-gray-700">{c.price}</p>
                </div>
                </div>
                <div className="w-[30px] h-[30px] bg-red-700 text-white rounded-full flex justify-center items-center text-lg font-semibold"><button onClick={()=>removeCart(c.id)}>x</button></div>
              </div>
            </div>
          );
        })}
        <h2 className="text-2xl font-semibold">Total Amount:{total}</h2>
      </div>
    </>
  );
};

export default ViewCart;
