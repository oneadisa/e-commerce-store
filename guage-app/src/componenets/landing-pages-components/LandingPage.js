import React from 'react'
import Mission from './Mission'
import Business from './Business'
import Header from './Header'
import Hero from './Hero'
import Objectives from './Objectives'
import Footer from './Footer'

function LandingPage() {
    return (
        <div>
            <Header />
            <Hero />
            <Business />
            <Mission />
            <Objectives />
            <Footer />
        </div>
    )
}

export default LandingPage;
