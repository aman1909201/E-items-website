"use client";
import React from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Link from 'next/link';
import { useAppcontext } from '@/context/layout';
const Checkout = () => {
  const { cart, subtotal, removetocart, addtocart } = useAppcontext()
  return (
    <div className='container '>
      <h1 className='text-center text-3xl my-6 font-bold'>Checkout</h1>
      <h2 className='font-bold my-4'>1. Order details</h2>
      <div className='mx-auto flex'>
        <div className="px-2 w-1/2 ">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2 ">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="px-2 w-full ">
        <div className=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea id="address" cols={20} rows={4} name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className='mx-auto flex'>
        <div className="px-2 w-1/2 ">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone number</label>
            <input type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2 ">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">city</label>
            <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <h2>2. Review cart items</h2>
      <div className="  sidecart  bg-blue-400 my-4 p-6 text-center ">
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4'>no items is cart</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-3">
                <div className='bg-pink-400 '>{cart[k].name}</div>
                <div className='flex items-center justify-center w-1/3'><FaMinusCircle onClick={() => { removetocart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className=' cursor-pointer text-red-600 text-xl mx-1' />{cart[k].qty}<FaPlusCircle onClick={() => { addtocart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-red-600 text-xl mx-1' /></div>
              </div>
            </li>
          })}
          
          
        </ol>
        <span className="total font-bold absolute left-5 text-red-800">subtotal: {subtotal}</span>
      </div>
      <div className=" flex mx-3">
            <button className="flex mx-1  text-white bg-indigo-500 h-max px-2  hover:bg-indigo-600 rounded t">Pay ₹{subtotal} </button>
            
          </div>
    </div>
  )
}

export default Checkout