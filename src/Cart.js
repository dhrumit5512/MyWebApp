import './App.css';
import React, { useState } from 'react';

export default function Cart({ closeCart, showCart, data, deleteFromCart }) {

  const total = data.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={`cart ${showCart ? 'active' : ''}`}>
      <h2>Read Book</h2>
      <div>
      </div>
      <div className='side'>
        Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And the new features added in Flex 4 give you an even wider range of options!    Flex 4 in Action is an easy-to-follow, hands-on Flex tutorial that goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    The expert authors of Flex 4 in Action have one goal-to help you get down to business with Flex. Fast. Flex 4 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 4 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  And you'll get full coverage of these great Flex 4 upgrades:  Next generation Spark components-New buttons, form inputs, navigation controls and other visual components replace the Flex 3 \"Halo\" versions. Spark components are easier to customize, which makes skinning and theme design much faster
     </div>
      <button type="button" className='product-button' >Read More</button>
    </div>
  )
}