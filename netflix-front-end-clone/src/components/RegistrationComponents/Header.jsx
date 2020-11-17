import React from "react"
import Logo from "../CommonComponents/Logo"

function Header() {
    return <div className="reg-header">
        <Logo />
        <a className="sign-btn" href="#">Sign In</a>
    </div>
}

export default Header