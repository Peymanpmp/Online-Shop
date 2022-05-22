import React, {useState, createContext} from 'react'

export const ProductsContext = createContext()


const ProductsContextProvider = (props) => {
  const [products] = useState([
      { id: 1, name: 'Product 1', price: 300 },
      { id: 2, name: 'Product 2', price: 30 },
      { id: 3, name: 'Product 3', price: 400 },
      { id: 4, name: 'Product 4', price: 200 },
      { id: 5, name: 'Product 5', price: 40 },
      { id: 6, name: 'Product 6', price: 100 }
  ])

  return(
      <ProductsContext.Provider value={{products: [...products]}}>
          {props.children}
      </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
