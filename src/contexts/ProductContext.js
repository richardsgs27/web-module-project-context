import React, {createContext} from 'react'

export const ProductContext = createContext()

export default function ProductProvider(props) {
    return(
        <ProductContext.Provider>
            {props.children}
        </ProductContext.Provider>
    )
}