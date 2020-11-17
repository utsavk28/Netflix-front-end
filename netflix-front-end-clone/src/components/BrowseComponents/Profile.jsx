import React from "react"
import { Link } from "react-router-dom"

function Profile(props) {
    const x = "./assets/images/" + "teen" + (Math.floor(Math.random() * 3) + 1) + ".png"
    return <Link to = "/main" >
        <div className="profile-browse">
            <div>
                <img className="browse-img" src={x}></img>
            </div>
            <p>{props.name}</p>
        </div>
    </Link>

}

export default Profile