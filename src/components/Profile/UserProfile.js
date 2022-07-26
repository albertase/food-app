import { useState } from 'react';

import Header from '../../components/Layout/Header';
import Meals from '../../components/Meals/Meals';
import Cart from '../../components/Cart/Cart';
import CartProvider from '../../store/CartProvider';
import Footer from '../products/Footer';


function UserProfile() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
        <Footer/>
      </main>
    </CartProvider>
  );
}

export default UserProfile;
