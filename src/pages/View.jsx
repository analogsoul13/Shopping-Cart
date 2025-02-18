import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const View = () => {

  const [item,setItem]= useState({})

  const {id}=useParams();
  console.log(id)
  

  useEffect(()=>{
      const products = JSON.parse(localStorage.getItem('products'))
      setItem(products.find(pro=>pro.id==id))
  },[])
  
  console.log(item)
  
  
  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg aspect-square w-full">
            <img
              src={item.images}
              alt="Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className=" flex flex-col justify-center space-y-4">
            <div>
              <h1 className="text-xl sm:text-4xl font-bold">{item.title}</h1>
              <p className="text-2xl font-semibold mt-2 text-accent">
                ${item.price}
              </p>
            </div>

            <p className="text-sm sm:text-lg text-base-content">{item.description}</p>

            <button className='btn btn-neutral w-28'>
              <i className="fa-solid fa-cart-shopping fa-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default View