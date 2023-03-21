import React from 'react';
import { useState } from 'react';
import Header from './Header';

function App() {

  const [showCart, setShowCart] = useState(false);
  const openCart = () => {
    setShowCart(true);
  }


  return (
    <>
      <Header openCart={openCart} />
    </>
  );
}

export default App;
