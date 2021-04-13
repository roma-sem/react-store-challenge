import React from 'react';
import './CartItem.scss';
import { useMyAppStateContext } from '../../../../services/context/AppStateContext';
import XButton from '../../../XButton/XButton';

function CartItem({ product }) {
    const { id, image, title, price, name, quantity } = product;
    const [state, dispatch] = useMyAppStateContext();

    function removeItem() {
        dispatch({
            type: "REMOVE_FROM_CART",
            item: {
                id: id
            }
        })
    }

    return (
        <div className="CartItem">
            <div className="product-details">
                <XButton clicked={removeItem} />
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
