import React from 'react';
import './DesktopNav.scss';
import { Link } from 'react-router-dom';

function Nav() {
    const navItems = ["Product A", "Product B", "Product C"];

    return (
        <nav className="DesktopNav">
            <ul>
                <Link to={`/`}>
                    <li key={`navItem-0`}>{navItems[0]}</li>
                </Link>
                <Link to={`/product-b`}>
                    <li key={`navItem-1`}>{navItems[1]}</li>
                </Link>
                <Link to={`/product-c`}>
                    <li key={`navItem-2`}>{navItems[2]}</li>
                </Link>
            </ul>
        </nav>
    )
}

// {
//     navItems?.map((navItem, index) =>
//         <Link to={`/${navItem.split(" ").join("-").toLowerCase()}`}>
//             <li key={`navItem-${index}`}>{navItem}</li>
//         </Link>
//     )
// }
// <Link to={`/`}>
//     <li key={`navItem-0`}>{navItems[0]}</li>
// </Link>
// <Link to={`/product-b`}>
//     <li key={`navItem-1`}>{navItems[1]}</li>
// </Link>
// <Link to={`/product-c`}>
//     <li key={`navItem-2`}>{navItems[2]}</li>
// </Link>

export default Nav;
