"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useRef } from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useAppcontext } from '@/context/layout';
const Navbar = () => {
  const ref = useRef<any>()
  const togglecart = () => {
    if (ref.current) {
      if (ref.current.classList.contains('translate-x-full')) {
        ref.current.classList.remove('translate-x-full');
        ref.current.classList.add('translate-x-0');
      } else {
        ref.current.classList.remove('translate-x-0');
        ref.current.classList.add('translate-x-full');
      }
    }
  }
  const { cart, clearcart, removetocart, addtocart } = useAppcontext()
  return (
    <>
      <div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-xl'>
        <div className="logo mx-2">
          <Link href={'/'}><Image src="/logo.png" alt="" width={90} height={40} /></Link>
        </div>
        <div className="nav">
          <ul className='flex items-center space-x-2 font-bold md:text-xl'>
            <Link href={'/laptop'}><li>Laptops</li></Link>
            <Link href={'/mouse'}><li>mouses</li></Link>
            <Link href={'/Keyboard'}><li>keyboard</li></Link>
          </ul>
        </div>
        <div onClick={togglecart} className="cursor-pointer cart absolute right-0 top-2 mx-5">
          <CiShoppingCart />
        </div>
      </div>

      {/* shopping cart */}
      <div ref={ref} className=" w-72 sidecart absolute top-0 right-0 bg-blue-400 p-9 transform transition-transform translate-x-full">
        <h2 className='font-bold text-xl'>shopping cart</h2>
        <span onClick={togglecart} className=' absolute top-2 right-2 cursor-pointer text-xl'><IoMdClose /></span>

        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4'>no items is cart</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-3">
                <div className='bg-pink-400 '>{cart[k].name}</div>
                <div className='flex items-center justify-center w-1/3'><FaMinusCircle onClick={()=>{removetocart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className=' cursor-pointer text-red-600 text-xl mx-1' />{cart[k].qty}<FaPlusCircle onClick={()=>{addtocart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}className='cursor-pointer text-red-600 text-xl mx-1' /></div>
              </div>
            </li>
          })}

          <div className="flex">
            <button className="flex mx-1  text-white bg-indigo-500 h-max px-2  hover:bg-indigo-600 rounded t">Checkout</button>
            <button onClick={clearcart} className="flex mx-1  text-white bg-indigo-500 h-max border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">clear cart</button>
          </div> 
        </ol>
      </div>

    </>
  )
}

export default Navbar