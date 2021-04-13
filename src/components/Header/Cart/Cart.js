import React, { useRef } from 'react';
import './Cart.scss';
import BlueButton from '../../BlueButton/BlueButton';
import XButton from '../../XButton/XButton';
import CartItem from './CartItem/CartItem';
import { useMyAppStateContext } from '../../../services/context/AppStateContext';
import { Link } from 'react-router-dom';

function Cart({ cartViewHandler }) {
    const [state] = useMyAppStateContext();
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

    return (
        <div className="Cart">
            <div className="cart-items-container">
                <XButton clicked={cartViewHandler} />

                <div className="inner">
                    <h2>Cart</h2>

                    {state.cart?.map((checkoutItem, index) => <CartItem product={checkoutItem} key={`cartItem-${index}`} />)}

                    <h3>Subtotal: <span>${getSubtotal()}</span></h3>

                    <Link to="/checkout">
                        <BlueButton title={`Checkout`} clicked={cartViewHandler} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;
