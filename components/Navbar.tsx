import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-xl'>
      <div className="logo mx-2">
       <Link href={'/'}><Image src="/logo.png" alt="" width={90} height={40}/></Link> 
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-2 font-bold md:text-xl'>
          <Link href={'/laptop'}><li>Laptops</li></Link>
          <Link href={'/mouse'}><li>mouses</li></Link>
          <Link href={'/Keyboard'}><li>keyboard</li></Link>
        </ul>
      </div>
    <div className="cart absolute right-0 top-2 mx-5">
      <button><CiShoppingCart /></button>
    </div>
    </div>
 
    </>
  )
}

export default Navbar