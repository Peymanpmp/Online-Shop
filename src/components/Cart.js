import React, { useContext } from 'react'
import { CartContext } from '../GLobal/CartContetxt'


const Cart = () => {

    const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext)
    return (
        <div className="cart-container">
            <div className="cart-details">
                {shoppingCart.length > 0 ? 
                shoppingCart.map((cart) => (
                   <div className="cart" key={cart.id}>
                        <span className="cart-product-name">{cart.name}</span>
                        <br />
                        <span className="cart-product-price">{cart.price}$</span>
                        <br />
                        <span className="product-qantity">{cart.qty}</span>
                        <br />
                        <span className="product-total-price">{cart.price * cart.qty}$</span>
                        <br />
                        <button className="inc" onClick={() => dispatch({ type : 'INC', id: cart.id, cart })}>ADD</button>
                        <button className="dec" onClick={() => dispatch({ type : 'DEC', id: cart.id, cart })}>Less</button>
                        <button className="delete-product" onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart})}>Delete</button>
                        <hr />
                   </div> 
                ))
                : <h2>'Your Cart Is Curently Empty'</h2>}
            </div>
            {shoppingCart.length > 0 ? <div className="cart-summary">
                <div className="summary">
                    <h3>CART SUMMARY</h3>
                    <div className="total-items">
                        <div className="items">TOTAL ITEMS</div> 
                        <div className="items-count">{qty}</div>
                    </div>
                    <div className="total-price-section">
                        <div className="just-title">TOTAL PRICE</div>
                        <div className="items-price">{totalPrice}$</div>
                    </div>
                    <div className="stripe-section">
                        {/* STRIPE BUTTON */}
                    </div>
                </div>
            </div> : ''}
        </div>
    )
}

export default Cart

//rafce
