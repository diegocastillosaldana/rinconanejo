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

    const context = {
        list: cartist,
        addItem: addToCartlist
    }

    return (
        <CartlistContext.Provider value={context}>
            {props.children}
        </CartlistContext.Provider>
    )
}