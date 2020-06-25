import React from 'react';

import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './shared/context/cart-context';


function App() {
  return (
    <CartProvider>
      <div className="main">
        <header className="main-header">
          <h2>Shopping Card</h2>
        </header>
        <ProductList />
        <Cart />

      </div>
      <div className="footer">
        <footer>
          <p>Tanks for
             <a href="https://www.youtube.com/watch?v=16Pg7RzTB7U&list=PLSLSMRLK7Yfi-bM_Xq0VWpoqygKRvgRdW">Masood Sadri</a>
            ---
            Codes is Available in <a target="_blank" href="https://github.com/thisisjasonjafari/ShopBasketFrontCast">Github</a>

            ---
            You can Watch the  <a target="_blank" href="https://thisisjasonjafari.github.io/ShopBasketFrontCast/">Demo</a>
          </p>

        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
