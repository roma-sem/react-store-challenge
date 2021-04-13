import React from 'react';
import './CheckoutItem.scss';
import { useMyAppStateContext } from '../../../services/context/AppStateContext';

function CartItem({ product }) {
    const { id, image, title, price, name, quantity } = product;
    const [dispatch] = useMyAppStateContext();

    function removeItem() {
        dispatch({
            type: "REMOVE_FROM_CART",
            item: {
                id: id
            }
        })
    }

    return (
        <div className="CheckoutItem">
        <div className="product-details">
            {
                image ? <img src={`images/${image}`}  alt={`${name}`}/> : null
            }
            <p>
                {
                    title ? <h4>{title}</h4> : null
                }
                <div>
                    <span>( {quantity} )</span> x { price ? <span className="price"> ${price}</span> : null}
                </div>
            </p>
        </div>
        </div>
    )
}

export default CartItem
