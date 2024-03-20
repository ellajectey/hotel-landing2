import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Testimony from '../components/testimony';
import Subscription from  '../components/subscription';
import About from  '../components/about';

function Homepage() {

    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Testimony/>
            <Subscription/>
            <Footer/>
        </div>
    );
}

export default Homepage;
