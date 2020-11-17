import React from "react"

function Footer() {
    const footerStyle = {
        position : "absolute",
        bottom:"0vw",
        backgroundColor : "rgba(128,128,128,0.25)",
        color:"black",
        width:"100vw",
        margin:"0",
        padding:"0",
    }

    return <footer style = {footerStyle}>
        <p className="con-num">Questions? Call 000-800-040-1843</p>
        <table>
            <tbody>
                <tr>
                    <td>FAQ</td>
                    <td>Help Centre</td>
                    <td>Terms of Use</td>
                    <td>Privacy</td>
                </tr>
                <tr>
                    <td>Cookie Preferences</td>
                    <td>Corporate Information</td>
                </tr>
            </tbody>
        </table>
        <select className="lang-select">
            <option>🌐 English</option>
            <option>🌐 Hindi</option>
        </select>
        <p className="platform-name">Netflix India</p>
    </footer>
}

export default Footer