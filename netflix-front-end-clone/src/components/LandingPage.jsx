import React from "react"
import Header from "./Header"
import XContent1 from "./LandingPageComponenets/XContent1"
import XContent2 from "./LandingPageComponenets/XContent2"
import XContent3 from "./LandingPageComponenets/XContent3"
import FAQ from "./LandingPageComponenets/FAQ"
import Footer from "./LandingPageComponenets/Footer"
function LandingPage() {
    return <div className = "main-file">
        <Header/>
        <XContent1 gifUrl = "./assets/gif/tv.gif" />
        <XContent2 gifUrl = "./assets/images/mobile.jpg"/>
        <XContent3 gifUrl = "./assets/gif/device.gif"/>
        <FAQ/>
        <Footer/>
    </div>
}

export default LandingPage