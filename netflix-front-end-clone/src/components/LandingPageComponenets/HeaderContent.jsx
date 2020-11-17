import React, { useState } from "react"
import { Link, Redirect, Route } from "react-router-dom"
function HeaderContent() {
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

    return <div className="header-content">
        <h1>Unlimited movies, TV<br></br> shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="input-container" >
                <input onChange={updateEmail} className="input-email" type="email" placeholder="Email Address"></input>
                <button onClick={(event) => {
                    validateEmail(email);
                    event.preventDefault();
                }} className="input-btn" >GET STARTED </button>
                <Route exact path="/">
                    {validEmail && <Redirect to="/registration1" />}
                </Route>


        </div>
    </div>
}

export default HeaderContent