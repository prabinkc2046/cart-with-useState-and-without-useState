import { useContext, createContext, useReducer, useEffect } from "react";
import { Reducer } from "./Reducer";
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const storedState = localStorage.getItem('d08f864e-128a-4880-92c1-70a7094efc31');
    const initialState = JSON.parse(storedState) || {
        cart: [
            {id: 1, name: 'Cheese', price: 4, quantity: 1, totalPrice: 4},
            {id: 2, name: 'Banana', price: 5, quantity: 1, totalPrice: 5},
            {id: 3, name: 'Cracker', price: 6, quantity: 1, totalPrice: 6},
            {id: 4, name: 'Peas', price: 6, quantity: 1, totalPrice: 6},
            {id: 5, name: 'Chocolate', price: 6, quantity: 1, totalPrice: 6},
            {id: 6, name: 'Icecream', price: 6, quantity: 1, totalPrice: 6}
        ],
        subTotal: 0
    };
    
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(()=>{
        localStorage.setItem('d08f864e-128a-4880-92c1-70a7094efc31',JSON.stringify(state))
    },[state])

    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}