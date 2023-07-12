import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';


function App() {

  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = (boolean) => {
    setCartIsShow(boolean);
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart showCartHandler={showCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
