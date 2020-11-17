import React, { useState } from "react"
import CardHoverPanel from "./CardHoverPanel"

function Card(props) {
    const [hover,setHover] = useState(false)
    const hoveredStyle = {
        position: "relative",
        display: "block",
        flex: "1 1 0px",
        transition: "transform 500ms",
        transform: "scale(1.25)",
        zIndex: "1",
    }



    function updateHover1(e) {
        setHover(true)
        console.log(hover)
    }

    function updateHover2(e) {
        setHover(false)
        console.log(hover)
    }

    return <div className = "card" 
    onMouseEnter = {updateHover1} 
    onMouseLeave = {updateHover2}
    style = {hover ? hoveredStyle : {} } >
        <img src = {props.img}></img>
        {hover && <CardHoverPanel/>}
    </div>
}

export default Card