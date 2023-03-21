import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Cart from './Cart';
import Footer from './Footer';
import Shop from './Shop';
import products from './Products.json';

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
      <Cart closeCart={closeCart} showCart={showCart} data={cartItems} deleteFromCart={deleteFromCart}/>
      <section className='products'>
        <h2>Products</h2>
        <Shop data={products} addToCart={addToCart} openCart={openCart} />
      </section>
      <Footer />
    </>
  );
}

export default App;
