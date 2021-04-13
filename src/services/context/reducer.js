export const appState = {
    cart: [],
    showCart: false
}

// export const getCartTotal = (cart) =>
//     cart?.reduce(
//         (amount, item) => amount + item.price, 0
//     );

const reducer = (state, action) => {
    // console.log("[ reducer ]: state = ", state);
    // console.log("[ reducer ]: action = ", action);

    switch(action.type) {
        case "ADD_TO_CART":
            // check if item is already present in the Cart:
            let itemPresent = state.cart.find(obj => obj.id === action.item.id);

            if (itemPresent) {
                itemPresent.quantity = parseInt(itemPresent.quantity) + parseInt(action.item.quantity);
                return state;
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.item]
                }
            }
        case "REMOVE_FROM_CART":
            // Remove only first component with matching ID:
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.item.id
            );

            let newBasket = [...state.cart];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product with id ${action.item.id} as it's not in the cart!`);
            }

            return {
                ...state,
                cart: newBasket
            }
            // Remove all components with the same ID:
            // return {
            //     ...state,
            //     cart: [...state.cart.filter(item => item.id !== action.item.id)]
            // }
        case "SHOW_HIDE_CART":
            return {
                ...state,
                showCart: !state.showCart
            }
        case "EMPTY_CART":
            return {
                ...state,
                cart: []
            }


        default:
            return state;
    }
}

export default reducer;
