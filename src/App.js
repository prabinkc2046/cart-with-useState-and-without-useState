import React from 'react';
import Cart from './components/Cart';
import { CartProvider } from './components/CartProvider';
export default function App() {
  return (
    <>
    <CartProvider>
        <Cart/>
    </CartProvider>
    </>
  )
}
