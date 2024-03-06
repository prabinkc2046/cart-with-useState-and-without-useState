import React, { useEffect, useMemo, useState } from 'react';

export default function Cart() {
    

    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('068273a5-8145-49c7-a1cb-56086b9eeb14');
        return storedCart ? JSON.parse(storedCart) : [
            {id: 1, name: 'Cheese', price: 4, quantity: 1, totalPrice: 4},
            {id: 2, name: 'Banana', price: 5, quantity: 1, totalPrice: 5},
            {id: 3, name: 'Cracker', price: 6, quantity: 1, totalPrice: 6},
            {id: 4, name: 'Peas', price: 6, quantity: 1, totalPrice: 6},
            {id: 5, name: 'Chocolate', price: 6, quantity: 1, totalPrice: 6},
            {id: 6, name: 'Icecream', price: 6, quantity: 1, totalPrice: 6}
        ]
    });
    
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateGrandTotal = () =>{
        return cart.reduce((grandTotal, currentItem) => {
            return grandTotal + currentItem.totalPrice;
        },0)
    }
    
    useMemo(() => {
        setTotalPrice((totalPrice) => calculateGrandTotal());
    },[cart])

    const increaseQuantity = (id) => {
        const itemIndex = cart.findIndex(item => item.id === id);
        const item = cart[itemIndex];
        //imagine max stock is only 9
        if (item.quantity < 10){
            item.quantity = item.quantity + 1;
            item.totalPrice = item.quantity * item.price;
        } else{
            item.quantity = 10;
        }
        const updatedIncreasedCart = [...cart];
        updatedIncreasedCart.splice(itemIndex, 1, item);
        setCart(updatedIncreasedCart);
    }

    const decreaseQuantity = (id) =>{
        const itemIndex = cart.findIndex(item => item.id === id);
        const item = cart[itemIndex];
        if (item.quantity > 1){
            item.quantity = item.quantity - 1
            item.totalPrice = item.quantity * item.price;
        } else {
            item.quantity = 1;
        }
        const updatedDecreasedCart = [...cart];
        updatedDecreasedCart.splice(itemIndex, 1, item);
        setCart(updatedDecreasedCart);
    }

    const removeItem = (id) => {
        const itemIndex = cart.findIndex(item => item.id === id);
        const updatedRemovedCart = [...cart];
        updatedRemovedCart.splice(itemIndex, 1);
        setCart(updatedRemovedCart);
    }

    useEffect(()=>{
        localStorage.setItem('068273a5-8145-49c7-a1cb-56086b9eeb14', JSON.stringify(cart))
    },[cart]);

  return (
    <>
    <div>
        {cart.map((item) => (
            <div key={item.id}>
                <li>{item.name} - {item.price} - <button onClick={()=>increaseQuantity(item.id)}>+</button>{item.quantity}<button onClick={()=>decreaseQuantity(item.id)}>-</button> - {item.totalPrice}</li>
                <button onClick={() => removeItem(item.id)}>remove</button>
            </div>
        ))}
    </div>

    <div>
        <p>Subtotal <span>${totalPrice}</span></p>
    </div>
    </>
  )
}
