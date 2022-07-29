import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        if (state.items.findIndex(item => item.id === action.item.id) < 0) {
            const newCartItems = state.items.concat(action.item);
            const totalAmount = state.totalAmount + action.item.amount * action.item.price;
            return { items: newCartItems, totalAmount: totalAmount };
        } else {
            const itemIndex = state.items.findIndex(item => item.id === action.item.id);
            state.totalAmount = state.totalAmount - state.items[itemIndex].amount * state.items[itemIndex].price;
            state.items[itemIndex].amount = action.item.amount;
            state.totalAmount = state.totalAmount + action.item.amount * action.item.price;

            const element = document.getElementById(state.items[itemIndex].id);

            element.value = state.items[itemIndex].amount;

            return {
                ...state
            };
        }
        
    } else if (action.type === "REMOVE") {
        const itemIndex = state.items.findIndex(item => item.id === action.id);
        state.totalAmount = state.totalAmount - state.items[itemIndex].amount * state.items[itemIndex].price;
        state.items.splice(itemIndex, 1);
        return { ...state };
    }

    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        });
    }
    
    const removeItemFromCart = id => { 
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };

    return (<CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>)
};

export default CartProvider;