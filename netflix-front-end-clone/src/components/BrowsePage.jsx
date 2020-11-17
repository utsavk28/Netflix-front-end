import React from "react"
import Logo from "./CommonComponents/Logo"
import Profile from "./BrowseComponents/Profile"
import AddProfile from "./BrowseComponents/AddProfile"
import ManageProfiles from "./BrowseComponents/ManageProfiles"


function BrowserPage() {
    return <div>
        <Logo />
        <div className = "browse-container">
            <p className = "browse-heading">Who's watching?</p>
            <div className="browse1-container">
                <Profile name="Utsav" />
                <Profile name="Tushar" />
                <AddProfile />
            </div>
            <ManageProfiles/>
        </div>
    </div>
}

export default BrowserPage