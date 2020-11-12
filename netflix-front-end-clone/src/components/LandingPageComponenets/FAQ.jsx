import React, { useState } from "react"

function FAQ() {
    const [dropdown, setDropdown] = useState({
        "What is": false,
        "How muc": false,
        "Where c": false,
        "How do ": false,
        "What ca": false
    })
    const x = {
        "What is": false,
        "How muc": false,
        "Where c": false,
        "How do ": false,
        "What ca": false
    }

    function dropdownFunction(e) {
        const name = e.target.textContent.slice(0, 7)
        setDropdown({
            ...x,
            [name]: !dropdown[name]
        })

    }
    return <div className="Faq-container">
        <h1 className="Faq-container-header">Frequently Asked Questions</h1>
        <div>
            <div onClick={dropdownFunction} className="faq-container" >
                <h2>What is Netflix?</h2>
                <h2 className="drop-down-sign">{dropdown["What is"] ? "✖️" : "➕"}</h2>
            </div>
            {dropdown["What is"] && <h2 className="drop-down-para">Netflix is a streaming service that offers a wide variety of<br></br> award-winning TV shows, movies, anime, documentaries<br></br> and more – on thousands of internet-connected devices.<br></br><br></br>You can watch as much as you want,<br></br> whenever you want, without a single ad – all for one low monthly price. There's<br></br> always something new to discover, and<br></br> new TV shows and movies are added every week!</h2>}
            <div onClick={dropdownFunction} className="faq-container" >
                <h2>How much does Netflix cost?</h2>
                <h2 className="drop-down-sign">{dropdown["How muc"] ? "✖️" : "➕"}</h2>
            </div>
            {dropdown["How muc"] && <h2 className="drop-down-para">Watch Netflix on your smartphone, tablet, Smart TV,<br></br> laptop, or streaming device, all for one fixed monthly fee.<br></br> Plans range from ₹ 199 to ₹ 799 a month. No extra costs<br></br>, no contracts.</h2>}
            <div onClick={dropdownFunction} className="faq-container" >
                <h2>Where can i watch?</h2>
                <h2 className="drop-down-sign">{dropdown["Where c"] ? "✖️" : "➕"}</h2>
            </div>
            {dropdown["Where c"] && <h2 className="drop-down-para">Watch anywhere, anytime, on an unlimited number of<br></br> devices. Sign in with your Netflix account to watch<br></br> instantly on the web at netflix.com from your personal<br></br> computer or on any internet-connected device that offers<br></br> the Netflix app, including smart TVs, smartphones, tablets,<br></br> streaming media players and game consoles.<br></br><br></br>You can also download your favourite shows with the iOS,<br></br> Android, or Windows 10 app. Use downloads to watch<br></br> while you're on the go and without an internet connection.<br></br> Take Netflix with you anywhere.</h2>}
            <div onClick={dropdownFunction} className="faq-container" >
                <h2>How do i cancel?</h2>
                <h2 className="drop-down-sign">{dropdown["How do "] ? "✖️" : "➕"}</h2>
            </div>
            {dropdown["How do "] && <h2 className="drop-down-para">Netflix is flexible. There are no annoying contracts and no<br></br> commitments. You can easily cancel your account online in<br></br> two clicks. There are no cancellation fees – start or stop<br></br> your account anytime.</h2>}
            <div onClick={dropdownFunction} className="faq-container" >
                <h2>What can i watch on Netflix?</h2>
                <h2 className="drop-down-sign">{dropdown["What ca"] ? "✖️" : "➕"}</h2>
            </div>
            {dropdown["What ca"] && <h2 className="drop-down-para">Netflix has an extensive library of feature films,<br></br> documentaries, TV shows, anime, award-winning Netflix<br></br> originals, and more. Watch as much as you want, anytime<br></br> you want.</h2>}
        </div>
        <div className="Faq-container-footer">
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="input-container" >
                <input className="input-email" type="email" placeholder="Email Address"></input>
                <button className="input-btn" >GET STARTED </button>
            </div>
        </div>
    </div>
}

export default FAQ