import React from "react"

function XContent1(props) {
    const url = ""
    return <div className="x-content1">
        <div className="x-content1-1">
            <div>
                <div className="x-content-1-1-1">
                    <h1 className="x-content1-head">Enjoy on your TV.</h1>
                    <h2>Watch on smart TVs, PlayStation, Xbox, <br></br>Chromecast, Apple TV, Blu-ray players<br></br> and more.</h2>
                </div>
            </div>
        </div>
        <div className="x-content1-2">
            <img className="x-content1-2-gif" src={props.gifUrl}></img>
        </div>

    </div>
}

export default XContent1