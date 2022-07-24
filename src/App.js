import { useState } from 'react';

import Header from './components/Layouts/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';


function App() {

  const [showCart, setShowCart] = useState(false);

  const closeCartHandler = () => {
    setShowCart(false);
  }

  const showCartHandler = () => {
    setShowCart(true);
  }
  
  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
