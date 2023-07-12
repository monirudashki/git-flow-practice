import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = (boolean) => {
    setCartIsShow(boolean);
  }

  return (
    <CartProvider>
      {cartIsShow && <div>Cart</div>}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
