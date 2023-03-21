import './App.css';
import React, { useState } from 'react';

export default function Main() {

    const [showCart, setShowCart] = useState(false);

    return (
        <div className='main'>
            <div className='cta'>
                <h2>Captivating</h2>
                <p>A hook to entice the reader into reading a story</p>
                <button className='main-btn'>Login Now</button>
            </div>
        </div>
    )
}