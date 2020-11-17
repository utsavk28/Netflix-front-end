import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import LandingPage from "./LandingPage"
import SignInPage from "./SignInPage"
import BrowsePage from "./BrowsePage"
import MainPage from "./MainPage"
import RegistrationPage1 from "./RegistrationPage1"
import RegistrationPage2 from "./RegistrationPage2"
import RegistrationPage3 from "./RegistrationPage3"
import LogoutPage from "./LogoutPage"

function App() {
    return <div>
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={SignInPage} />
                <Route exact path="/browse" component={BrowsePage} />
                <Route exact path="/main" component={MainPage} />
                <Route exact path="/registration1" component={RegistrationPage1} />
                <Route exact path="/registration2" component={RegistrationPage2} />
                <Route exact path="/registration3" component={RegistrationPage3} />
                <Route exact path = "/logout" component = {LogoutPage} />
            </Switch>
        </Router>
    </div>
}

export default App