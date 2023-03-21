import './App.css';
import React, { useState } from 'react';
import Product from './Product'

const Shop = ({data, addToCart, openCart}) => {
    return (
        <div className='product-grid'>
            {
                data.book.map((product) => {
                    return (
                        <Product data={product} addToCart={addToCart} openCart={openCart}/>
                    )
                })
            }
        </div>
    )
}

export default Shop;