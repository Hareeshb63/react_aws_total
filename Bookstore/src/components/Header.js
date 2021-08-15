import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-head">
            <nav>
                <h1 id="logo">Wisdomly</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Animals</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
