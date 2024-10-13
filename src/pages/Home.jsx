import React, { useContext, useState } from 'react'
import Product from '../components/Product'
import { productContext } from '../context/ProductContextProvider'




const Home = () => {
  const {products}=useContext(productContext)
 
  
  return (
    <>
   <div className='lg:w-full w-[90%] mx-auto my-[80px]'>
   <div className='flex flex-wrap gap-5 justify-center'>
    {products?.map((product)=>{
      return  <div key={product.id} >
      <Product product={product} />
      </div>
    })}
   
    
   </div>
   </div>
    </>
  )
}

export default Home