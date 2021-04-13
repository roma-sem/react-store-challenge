import React, { useRef } from 'react';
import './Product.scss';
import Quantity from './Quantity/Quantity';
import BlueButton from '../BlueButton/BlueButton';
import { useMyAppStateContext } from '../../services/context/AppStateContext';

function Product({ product }) {
    const { id, title, name, price, description, image } = product;
    const [state, dispatch] = useMyAppStateContext();
    const quantityRef = useRef();

    function handleAddToCart() {
        const quantity = quantityRef.current.value;

        if (quantity > 0) {
            dispatch({
                type: "ADD_TO_CART",
                item: {
                    id: id,
                    title: title,
                    name: name,
                    price: price,
                    image: image,
                    quantity: quantity
                }
            })

            dispatch({
                type: "SHOW_HIDE_CART"
            })

        } else {
            dispatch({
                type: "REMOVE_FROM_CART",
                item: {
                    id: id,
                    title: title,
                    name: name,
                    price: price,
                    image: image,
                    quantity: 0
                }
            })
        }
    }

    return (
        <div className="Product">
            {
                title ? <h2>{title}</h2> : null
            }
            <div className="product-details">
                {
                    image ? <img src={`images/${image}`}  alt={`${name}`}/> : null
                }
                {
                    description ? <p>{description}</p> : null
                }
            </div>
            {
                price ? <div className="price">${price}</div> : null
            }
            <Quantity ref={quantityRef} />
            <BlueButton title={`Add to Cart`} clicked={handleAddToCart} />
        </div>
    )
}

export default Product;
