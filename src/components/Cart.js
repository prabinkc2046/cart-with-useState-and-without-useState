import React, { useEffect, useMemo, useState } from 'react';
import { useCart } from './CartProvider';
export default function Cart() {
    const {state, dispatch} = useCart();
    const increaseQuantity = (id) => {
        dispatch({type:'INCREASE', payload: id});
        dispatch({type:'UPDATE_ITEM_PRICE', payload: id});
    }

    const decreaseQuantity = (id) => {
        dispatch({type:'DECREASE', payload: id});
        dispatch({type:'UPDATE_ITEM_PRICE', payload: id});
    }
    
    useMemo(()=>{
        dispatch({type:'UPDATE_SUBTOTAL'});
    },[state.cart])

    const removeItem = (id)=>{
        dispatch({type:'REMOVE', payload: id});
    }
  return (
    <>
    <div>
        {state.cart.map((item) => (
            <div key={item.id}>
                <p>{item.name} - Price: {item.price}   <button onClick={() => increaseQuantity(item.id)}>+</button>Qtn:{item.quantity}<button onClick={() => decreaseQuantity(item.id)}>-</button>  TotalPrice: {item.totalPrice}</p>
                <p><button onClick={()=> removeItem(item.id)}>Remove</button></p>
            </div>
        ))}
    </div>

    <div>
        <p>Subtotal <span>${state.subTotal}</span></p>
    </div>
    </>
  )
}
