import React, { useState } from "react"

function UserProfile(props) {

    function UpdateC1() {
        props.x(true)
    }

    function UpdateC2() {
        props.x(false)
    }

    return <div onMouseLeave = {UpdateC2} onMouseEnter = {UpdateC1} className = "user-profile">
        <div className = "user-profile-container1">
            <div className = "user-profile-1">
                <img src = "./assets/images/teen1.png"></img>
                <p>Utsav</p>
            </div>
            <div className = "user-profile-2">
                <img src = "./assets/images/teen2.png"></img>
                <p>Tushar</p>
            </div>
            <div className = "user-profile-3">
                <img src = "./assets/images/teen3.png"></img>
                <p>Raj</p>
            </div>
            <p>Manage Profile</p>
        </div>
        <div className = "user-profile-container2">
            <ul>
                <li> <a href = "#" >Account</a> </li>
                <br></br>
                <li> <a href = "#" >Help Center</a> </li>
                <br></br>
                <li> <a href = "#" >Sign out of Netflic</a> </li>
                <br></br>
            </ul>
        </div>
    </div>
}

export default UserProfile