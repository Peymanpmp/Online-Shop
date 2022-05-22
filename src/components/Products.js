import React, { useContext } from 'react'
import { ProductsContext } from '../GLobal/ProductContext'
import { CartContext } from '../GLobal/CartContetxt'

const Products = () => {

    const {products} = useContext(ProductsContext)
    const {dispatch} = useContext(CartContext)

    return(
        <div>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                            <div>
                                {product.name}
                                <br />
                                {product.price}
                                <br />
                                <button onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, product})}>Add To Card</button>
                            </div>
                            <br />
                            <hr />
                    </div>    
                ))}
            </div>
        </div>
    )
}

export default Products