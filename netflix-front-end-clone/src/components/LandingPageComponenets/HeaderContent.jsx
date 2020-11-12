import React from "react"

function HeaderContent() {
    return <div className = "header-content">
        <h1>Unlimited movies, TV<br></br> shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className ="input-container" >
            <input className ="input-email" type = "email" placeholder="Email Address"></input>
            <button className ="input-btn" >GET STARTED </button>
        </div>
    </div>
}

export default HeaderContent