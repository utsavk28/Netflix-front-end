import React from "react"
import Logo from "./CommonComponents/Logo"
import SignInBtn from "./CommonComponents/SignInBtn"
import Footer from "./LogoutPageComponents/Footer"
import Content from "./LogoutPageComponents/Content"


function LogoutPage() {
    return <div className="logout-page">
        <Logo />
        <SignInBtn />
        <Content />
        <Footer />
    </div>
}

export default LogoutPage