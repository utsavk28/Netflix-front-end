import React from "react"
import { Link } from "react-router-dom"

function Logo() {
    return <div>
        <Link to = "/" >
            <img className="logo" src="./assets/images/Netflix-Logo.png"></img>
        </Link>
    </div>
}

export default Logo