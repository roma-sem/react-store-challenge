import React from 'react';
import './Header.scss';
import NavTitle from './NavTitle/NavTitle';
import DesktopNav from './DesktopNav/DesktopNav';
import Cart from './Cart/Cart';
import { useMyAppStateContext } from '../../services/context/AppStateContext';

function Header() {
    const [state, dispatch] = useMyAppStateContext();

    const cartViewHandler = () => {
        dispatch({
            type: "SHOW_HIDE_CART"
        })
    }

    return (
        <header className="Header">
            <NavTitle />
            <DesktopNav />
            <div className="ViewCart" onClick={cartViewHandler}><b>View Cart</b></div>
            {state.showCart && <Cart cartViewHandler={cartViewHandler} />}
        </header>
    )
}

export default Header;
