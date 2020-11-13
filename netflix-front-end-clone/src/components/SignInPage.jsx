import React from "react"
import Logo from "./CommonComponents/Logo"
import SignInForm from "./SignInComponents/SignInForm"
import Footer from "./SignInComponents/Footer"

function SignInPage() {
    return  <div className="login-page-container">
            <Logo />
            <SignInForm />
            <Footer/>
        </div>
}

export default SignInPage