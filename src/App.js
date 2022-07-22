import { Fragment, useState } from 'react';

import Header from './components/Layouts/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'


function App() {

  const [showCart, setShowCart] = useState(false);

  const closeCartHandler = () => {
    setShowCart(false);
  }

  const showCartHandler = () => {
    setShowCart(true);
  }
  
  return (
    <Fragment>
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
