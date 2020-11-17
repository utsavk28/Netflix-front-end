import React, { useState } from "react"
import UserProfile from "./UserProfile"
import { Link } from "react-router-dom"

function NavBar() {
    const [nav, setNav] = useState(false)
    const [user, setUser] = useState(false)

    function UpdateUser1() {
        setUser(true)
    }

    function UpdateUser2() {
        setUser(false)
    }

    function UpdateNav() {
        if (window.scrollY >= 80) {
            setNav(true)
        }
        else if (window.scrollY >= 0) {
            setNav(false)
        }
    }

    window.addEventListener('scroll', UpdateNav)

    return <nav className={nav ? 'navbar active' : 'navbar'}>
        <Link to="/" >
            <img src="./assets/images/Netflix-Logo.png"></img>
        </Link>

        <ul className="left">
            <li> <a href="#" >Home</a> </li>
            <li> <a href="#" >TV Shows</a> </li>
            <li> <a href="#" >Movies</a> </li>
            <li> <a href="#" >News & Popular</a> </li>
            <li> <a href="#" >My List</a> </li>
        </ul>
        <ul className="right">
            <li> <a href="#" >Search</a> </li>
            <li> <a href="#" >CHILDREN</a> </li>
            <li> <a href="#" >box</a> </li>
            <li> <a href="#" >Notification</a> </li>
            <li> <a href="#" onMouseEnter={UpdateUser1} onMouseLeave={UpdateUser2} >User</a> </li>
        </ul>
        {user && <UserProfile x={setUser} />}
    </nav>
}

export default NavBar

