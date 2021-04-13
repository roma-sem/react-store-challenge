import React, { useRef } from 'react';
import './Checkout.scss';
import GreenButton from '../GreenButton/GreenButton';
import XButton from '../XButton/XButton';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import { useMyAppStateContext } from '../../services/context/AppStateContext';

function Checkout({ cartViewHandler }) {
    const [state, dispatch] = useMyAppStateContext();
    const checkoutSubtotal = useRef();

    function getSubtotal() {
        let subtotal = 0;
        if (state.cart) {
            state.cart.map((item) => {
                if (item.quantity > 0) {
                    subtotal = subtotal + (item.quantity * item.price)
                }
            })
        }
        subtotal = parseFloat(subtotal).toFixed(2);
        checkoutSubtotal.current = subtotal;
        return subtotal;
    }

    function emptyCart() {
        dispatch({
            type: "EMPTY_CART"
        })
        alert("Thank you for your purchase!");
    }

    return (
        <div className="Checkout">
            <div className="cart-items-container">
                <div className="inner">
                    <h2>Checkout</h2>

                    {state.cart?.map((checkoutItem, index) => <CheckoutItem product={checkoutItem} key={`cartItem-${index}`} />)}

                    <h3>Total: <span>${getSubtotal()}</span></h3>
                    <GreenButton title={`Purchase`} clicked={emptyCart} />
                </div>
            </div>
        </div>
    )
}

export default Checkout;
