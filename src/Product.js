import './App.css';
import React, { useState } from 'react';
// import products from './Products.json';

const Product = ({data, addToCart, openCart}) => {
    const { id, title, pageCount, thumbnailUrl, categories,authors } = data;
    return (
        <div className='product' key={id}>
            <img src={thumbnailUrl} />
            <h3>{title}</h3>
            <h6>Authore: {authors}</h6>
            <p>Categories-{categories}</p>
            <div className='price-wrapper'>
                <span className='price'>Pages-{pageCount}</span>
                <button className='product-button' onClick={() => {addToCart(id); openCart()}} >Description</button>
            </div>
        </div>
    )
}

export default Product;