import './App.css';
import React, { useState } from 'react';

export default function Header({openCart}) {

    return (
        <header>
            <nav>
                <div>
                    <h2>EDu CLASS</h2>
                </div>
                <div className='topnav-links'>
                    <ul>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </nav>
        </header >
    )
}