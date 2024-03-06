//         dispatch({type:'INCREASE', payload: id});
// dispatch({type:'DECREASE', payload: id})
// dispatch({type:'UPDATE_TOTAL_PRICE'})
// dispatch({type:'UPDATE_SUBTOTAL'})
// dispatch({type:'REMOVE', payload: id})

export const Reducer = (state, action) => {
    switch(action.type){
        case 'INCREASE':
            return {...state, cart: [...state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity < 10 ? item.quantity + 1 : 10} : item)]};
        case 'DECREASE':
            return {...state, cart: [...state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity > 1 ? item.quantity - 1  :  1} : item)]};
        case 'UPDATE_ITEM_PRICE':
            return {...state, cart: [...state.cart.map(item => item.id === action.payload ? {...item, totalPrice: item.price * item.quantity}: item)]};
        
        case 'UPDATE_SUBTOTAL':
            return {...state, subTotal: state.cart.reduce((sum, currentObject)=> {return sum + currentObject.totalPrice},0)};
        
        case 'REMOVE':
            return {...state, cart: [...state.cart.filter(item => item.id !== action.payload)]}
        default:
            return state;
    }
}