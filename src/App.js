import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';

function App() {

  const [showCart, setShowCart] = useState(false);
  const openCart = () => {
    setShowCart(true);
  }
  const closeCart = () => {
    setShowCart(false);
  }
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (id) => {
    const itemToAdd = products.jackets.find((product) => product.id === id);
    setCartItems([...cartItems, itemToAdd]);
  };

  const deleteFromCart = (id) => {
    const updatedCart = cartItems.filter((product) => product.id !==id);
    setCartItems(updatedCart);
    console.log(`Product with ID ${id} deleted from cart`);
  };

  return (
    <>
      <Header openCart={openCart} />
      <Main />
    </>
  );
}

export default App;
