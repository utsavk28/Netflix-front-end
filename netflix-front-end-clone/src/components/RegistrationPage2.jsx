import React, { useState } from "react"
import Header from "./RegistrationComponents/Header"
import Footer from "./RegistrationComponents/Footer"
import { Link, Redirect, Route } from "react-router-dom"

function RegistrationPage2() {
    const [email, setEmail] = useState("")
    const [validEmail, setValidEmail] = useState(false)
    function updateEmail(e) {
        setEmail(e.target.value)
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()))
        setValidEmail(re.test(String(email).toLowerCase()))
    }

    const [pass, setPass] = useState("")
    const [validPass, setValidPass] = useState(false)
    function updatePass(e) {
        setPass(e.target.value)
    }

    function validatePass(pass) {
        var x = false;
        if (pass.length > 0) {
            x = true;

        }
        setValidEmail(x);
        console.log(x)
    }

    return <div className="registration-page-1">
        <Header />
        <div className="reg-main-con-x">
            <div className="reg-con-x">
                <p>STEP 1 OF 3</p>
                <h2>Create a password to start your membership.</h2>
                <div className="reg-con-text-x">
                    <p>Just a few more steps and you're done! We hate paperwork, too.</p>
                </div>
                <input onChange={updateEmail} type="email" placeholder="Email"></input>
                <input onChange={updatePass} type="password" placeholder="Add a password"></input>
                <Link to = "/registration3">
                    <button>CONTINUE</button>
                </Link>

            </div>
        </div>
        <Footer />
    </div>
}

export default RegistrationPage2