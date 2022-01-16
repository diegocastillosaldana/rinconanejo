import { createContext, useState } from "react";

export const CartlistContext = createContext({
    list: []
})

export function CartlistContextProvider(props) {
    const [cartist, setCartlist] = useState([])

    const addToCartlist = (itemID) => {
        setCartlist((prevCartist) => {
            return prevCartist.concat(itemID)
        })
    }


    const removeFromCartlist = (itemID) => {
        setCartlist((prevCartlist) => {
            return prevCartlist.filter(e => e.id !== itemID)
        })
    }
    const itemIsInCartlist = (itemID) => {
        // return cartist.filter(e => {
        //     if (e.id === itemID) {
        //         e.select++;
        //     }
        // })
        if (cartist.some(e => e.id === itemID)) {
            const e = cartist.map(e => {
                if (e.id === itemID) {
                    e.select++;
                    e.price = e.price * e.select;

                } else {
                    return e
                }
            })
            cartist = [...e];
        }

    }

    function clearCartlist() {
        setCartlist([])
    }

    const context = {
        list: cartist,
        addItem: addToCartlist,
        removeItem: removeFromCartlist,
        itemIsInCartlist: itemIsInCartlist,
        clearCartlist: clearCartlist
    }

    return (
        <CartlistContext.Provider value={context}>
            {props.children}
        </CartlistContext.Provider>
    )
}