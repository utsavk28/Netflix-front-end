import React from "react"
import XContent1 from "./LandingPageComponenets/XContent1"
import XContent2 from "./LandingPageComponenets/XContent2"
import XContent3 from "./LandingPageComponenets/XContent3"
import FAQ from "./LandingPageComponenets/FAQ"
import Footer from "./LandingPageComponenets/Footer"
import SignInBtn from "./CommonComponents/SignInBtn"
import HeaderContent from "./LandingPageComponenets/HeaderContent"
import Logo from "./CommonComponents/Logo"

function LandingPage() {
    return <div className="main-file">
        <header className="header1">
            <Logo/>
            <SignInBtn />
            <HeaderContent />
        </header>
        <XContent1 gifUrl="./assets/gif/tv.gif" />
        <XContent2 gifUrl="./assets/images/mobile.jpg" />
        <XContent3 gifUrl="./assets/gif/device.gif" />
        <FAQ />
        <Footer />
    </div>
}

export default LandingPage