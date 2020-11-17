import React from "react"
import Header from "./RegistrationComponents/Header"
import Footer from "./RegistrationComponents/Footer"
import { Link } from "react-router-dom"
function RegistrationPage3() {
    return <div className="registration-page-1">
        <Header />
        <div className="reg-main-con-y">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png"></img>
            <div className="reg-con-y">
                <p>STEP 2 OF 3</p>
                <h2>Choose your plan</h2>
                <ul>
                    <li>✔️ No commitments, cancel anytime.</li>
                    <li>✔️ Everything on Netflix for one low price.</li>
                    <li>✔️ No ads and no extra fees. Ever.</li>
                </ul>
                <Link to = "/main">
                    <button>SEE THE PLANS</button>
                </Link>
            </div>
        </div>
        <Footer />
    </div>
}

export default RegistrationPage3