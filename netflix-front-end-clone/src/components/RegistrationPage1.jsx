import React from "react"
import Header from "./RegistrationComponents/Header"
import Footer from "./RegistrationComponents/Footer"
import {Link} from "react-router-dom"

function RegistrationPage1() {
    return <div className="registration-page-1">
        <Header />
        <div className="reg-main-con">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"></img>
            <div className="reg-con">
                <p>STEP 1 OF 3</p>
                <h2>Finish setting up your account.</h2>
                <div className="reg-con-text">
                    <p >Netflix is personalised for you. Create a password to watch Netflix on any device at any time.</p>
                </div>
                <Link to = "/registration2">
                    <button>CONTINUE</button>
                </Link>
            </div>
        </div>
        <Footer />
    </div>
}

export default RegistrationPage1