import { createContext, useContext } from "react"
import { cartReducer } from "../reducer/cartReducer";
import { useReducer, useEffect, useCallback } from "react";

const initialState = {
    cartList: [],
    //TotalList: [], // Fix the typo here (TotalList should be totalList)
    total: 0,
    totalList: []
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const updatedTotalList = (subtotal) => {
        state.totalList.push(subtotal)
    }

    const updateTotal = useCallback(() => {
        let total = 0;
        state.totalList.forEach(subtotal => {
            total = total + subtotal.item_price
            console.log(subtotal)
        })
        dispatch({
        type: "UPDATE_TOTAL",
        payload: {
            total,
        },
        });
    }, [state.totalList]);

    useEffect(() => {
        updateTotal()
    }, [state.totalList, updateTotal])

    const addToCart = (product, subtotal) => {
        const updatedCartList = state.cartList.concat(product);
         
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        });
        updatedTotalList(subtotal)
        updateTotal()
    };

    const removeFromCart = (product) => {
        const indexToRemove = state.cartList.indexOf(product);
        const updatedCartList = state.cartList.filter(current => current._id !== product._id);
        console.log(indexToRemove)
        const updatedTotalList = [...state.totalList.slice(0, indexToRemove), ...state.totalList.slice(indexToRemove + 1)];
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList,
                totalList: updatedTotalList
            }
        });
    };
    const changeTotalList = (price, id) => {
        // Find the index of the item with the given id
        const index = state.totalList.findIndex(item => item._id === id);

        if (index !== -1) {
            // Create a copy of the item with the updated price
            const updatedItem = {
            ...state.totalList[index],
            item_price: price,
            };

            // Create a new array with the updated item
            const updatedTotalList = [
            ...state.totalList.slice(0, index),
            updatedItem,
            ...state.totalList.slice(index + 1),
            ];

            // Now, you can update the state with the new total list
            // Assuming you have a way to dispatch this updated list to your state
            dispatch({
            type: "UPDATE_TOTAL_LIST",
            payload: {
                totalList: updatedTotalList,
            },
            });
        } else {
            // Handle the case where the item with the given id was not found
            console.log("Item not found in totalList");
        }
        updateTotal()
    };

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart,
        changeTotalList
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