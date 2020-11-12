import React from "react"
import SignIn from "./LandingPageComponenets/SignIn"
import HeaderContent from "./LandingPageComponenets/HeaderContent"

function Header() {
    return <header className = "header1">
        <img className="logo" src = "./assets/images/Netflix-Logo.png"></img>
        <SignIn/>
        <HeaderContent/>
    </header>
}

export default Header