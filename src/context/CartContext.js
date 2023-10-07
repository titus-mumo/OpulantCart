import { createContext, useContext } from "react"
import { cartReducer } from "../reducer/cartReducer";
import { useReducer } from "react";

const initialState = {
    cartList: [],
    TotalList: [], // Fix the typo here (TotalList should be totalList)
    total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const updateTotal = (totalList, cartList) => {
        let total = 0;
        totalList.forEach(item => {
            const quantityDataItem = totalList.find(data => data.id === item.id);
            const cartItem = cartList.find(cart => cart._id === item.id);

            if (quantityDataItem && cartItem) {
                total += quantityDataItem.quantity * cartItem.price;
            } else {
                console.error(`CartItem not found for item with id ${item.id}`);
            }
        });

        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        });
    }

    const addToCart = (product, quantityData) => {
        const updatedCartList = state.cartList.concat(product);
        const updatedTotalList = state.TotalList.concat(quantityData);
         
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        });
        updateTotal(updatedTotalList, updatedCartList);
    };

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current => current._id !== product._id);
        const updatedTotalList = state.TotalList.filter(current => current.id !== product._id);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList,
                totals: updatedTotalList,
            }
        });
        updateTotal(updatedTotalList, updatedCartList);
    };

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
};