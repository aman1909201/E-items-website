"use client";
import { createContext, useState, useEffect, useContext } from "react";

const Appcontext=createContext<any>(undefined);

export function Appwrapper({children}:{
    children: React.ReactNode;
  
  }){
  const [cart, setcart] = useState<any>({})
  const [subtotal, setsubtotal] = useState<number>(0)
  
  useEffect(() => {
    try {
      const cartData = localStorage.getItem("cart");
      if (cartData !== null) {
        setcart(JSON.parse(cartData));
      }
     
    } catch (error) {
      console.error(error)
    }
    
    
  }, [])
  const savecart = (mycart: any): void => {
    localStorage.setItem("cart", JSON.stringify(mycart))
    let subt = 0
    const keys = Object.keys(mycart)
    for (let i = 0; i < keys.length; i++) {
      subt += mycart[keys[i]].price * mycart[keys[i]].qty
    }
    setsubtotal(subt)

  }
  const addtocart = (itemid: number, qty: number, price: number, name: string, size: string, varient: string): void => {
    let newcart = cart
    if (itemid in cart) {
      newcart[itemid].qty = cart[itemid].qty + qty
    }
    else {
      newcart[itemid] = { qty: 1, price, name, size, varient }
    }
    setcart(newcart)
    savecart(newcart)
  }
  const removetocart = (itemid: number, qty: number, price: number, name: string, size: string, varient: string): void => {
    let newcart = cart
    if (itemid in cart) {
      newcart[itemid].qty = cart[itemid].qty - qty
    }
    if (newcart[itemid]["qty"] <= 0) {
      delete newcart[itemid]
    }
    setcart(newcart)
    savecart(newcart)
  }
  const clearcart = () => {
    setcart({})
    savecart({})
  }
  return (
    <>
    <Appcontext.Provider value={{cart, addtocart, removetocart, clearcart, subtotal}}>
        {children}
    </Appcontext.Provider>
    </>)
  }

  export function useAppcontext(){
    return useContext(Appcontext)
  }