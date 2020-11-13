import React from "react"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import LandingPage from "./LandingPage"
import SignInPage from "./SignInPage"
function App() {
    return <div>
        <Router>
            <Route exact path = "/" component = {LandingPage} />
            <Route exact path = "/login" component = {SignInPage}/>
        </Router>
    </div>
}

export default App