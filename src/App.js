import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import data from './assets/products.json';
import Product from './components/Product/Product';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
      <div className="App">
        <HashRouter>
            <Header />
            <Switch>
                <Route path={`/`} exact>
                    <Product product={data.products[0]} key={`product-0`} />
                </Route>
                <Route path={`/product-b`} exact>
                    <Product product={data.products[1]} key={`product-1`} />
                </Route>
                <Route path={`/product-c`} exact>
                    <Product product={data.products[2]} key={`product-2`} />
                </Route>
                <Route path={`/checkout`} exact>
                    <Checkout />
                </Route>
            </Switch>
        </HashRouter>
      </div>
  );
}


// <Switch>
//     {
//         data.products?.map((product, index) =>
//             <Route path={`/${product.title.split(" ").join("-").toLowerCase()}`} exact>
//                 <Product product={product} key={`product-${index}`} />
//             </Route>
//         )
//     }
// </Switch>

// <Switch>
//     <Route path={`/`} exact>
//         <Product product={data.products[0]} key={`product-0`} />
//     </Route>
//     <Route path={`/product-b`} exact>
//         <Product product={data.products[1]} key={`product-1`} />
//     </Route>
//     <Route path={`/product-c`} exact>
//         <Product product={data.products[2]} key={`product-2`} />
//     </Route>
// </Switch>

export default App;
