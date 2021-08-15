import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (

        <section className="hero">
            <h2></h2>
            <h3>A little love makes <br/>BIG difference</h3>
            <Link className="btn" to="/books">View All Animals</Link>
        </section>
    )
}

export default Hero
