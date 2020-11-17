import React from "react"
import { Link } from "react-router-dom"

function SignInBtn() {
    return <div className="Sign-btn-container">
        <Link to = "/login" >
            <button className="Sign-btn">Sign In</button>
        </Link>
    </div>
}

export default SignInBtn