// eslint-disable-next-line no-unused-vars
import {React, useEffect} from 'react'
import Mission from './Mission'
import Business from './Business'
import Header from './Header'
import Hero from './Hero'
import Objectives from './Objectives'
import Footer from './Footer'

function LandingPage() {

     // useEffect(() => { 
   // const signedUpUserInfo = localStorage.get("signedUpUseInfo", JSON.stringify(data))
   // if (signedUpUserInfo) {
     // history.push('/')
   // }
 // 
// }, [history])

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
