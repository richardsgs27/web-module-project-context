import React, {createContext} from 'react'

export const CartContext = createContext()

export default function CartProvider(props) {
    return(
        <CartContext.Provider >
            {props.children}
        </CartContext.Provider>
    )
}