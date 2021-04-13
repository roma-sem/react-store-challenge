import React, { useState } from 'react'
import "./Quantity.scss";

const Quantity = React.forwardRef((props, ref) => {
        const [quantity, setQuantity] = useState(0);

        const decrement = () => {
            setQuantity(prev => {
                return prev > 0 ? prev - 1 : 0
            });
        }

        const increment = () => {
            setQuantity(prev => prev + 1);
        }

        return (
            <div className="Quantity">
            <button onClick={decrement}>-</button>
            <input
                type="text"
                value={quantity}
                className="number"
                readOnly={true}
                ref={ref}
                />
            <button onClick={increment}>+</button>
            </div>
        )
    }
)

export default Quantity
