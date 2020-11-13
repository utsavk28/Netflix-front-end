import React from "react"

function SignInForm() {
    return <div className="sign-in-form">
        <h1 className="signin-heading" >Sign In</h1>
        <input className="signin-input-form" placeholder="Email or Phone Number" type="email" ></input>
        <input className="signin-input-form"
            type="text" placeholder="Password"></input>
        <button className="signin-input-form sign-in-form-btn" >Sign In</button>
        <div className="rem-help-container">
            <div className="rem-container">
                <input type="checkbox" id="remembermecheckbox" name="Remember Me" value="rememberme"></input>
                <label for="rememberme">Remember Me</label>
            </div>
            <p className="help-container">Need Help?</p>
        </div>
        <a className="login-with-facebook" href="#"><i class="fab fa-facebook-f"></i> Login with Facebook</a>
        <div className = "new-netflix-div">
            <p>New to Netflix?</p>
            <a className="sign-up-now" href="#" >Sign up now</a>
        </div>
        <p className="recaptcha">This page is protected by Google reCAPTCHA to ensure you're not a bot.<span style = {{color:"blue"}}>Learn more.</span> </p>
    </div>
}

export default SignInForm