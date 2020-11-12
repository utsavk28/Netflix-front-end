import React from "react"

function XContent3(props) {
    const url = ""
    return <div className = "x-content1">
        <div className = "x-content1-1">
            <div className="x-content-1-1-1">
            <h1 className = "x-content1-head">Watch everywhere.</h1>
            <h2>Stream unlimited movies and TV shows on<br></br> your phone, tablet, laptop, and TV.</h2>
            </div>
        </div>
        <div className="x-content1-2">
            <img className="x-content1-2-gif" src={props.gifUrl}></img>
        </div>
    </div>
}

export default XContent3