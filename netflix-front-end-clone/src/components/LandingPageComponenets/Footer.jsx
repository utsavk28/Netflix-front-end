import React from "react"

function Footer() {
    return <footer>
        <p className="con-num">Questions? Call 000-800-040-1843</p>
        <table>
            <tbody>
                <tr>
                    <td>FAQ</td>
                    <td>Help Centre</td>
                    <td>Account</td>
                    <td>Media Centre</td>
                </tr>
                <tr>
                    <td>Investor Relations</td>
                    <td>Jobs</td>
                    <td>Ways to Watch</td>
                    <td>Terms of Use</td>
                </tr>
                <tr>
                    <td>Privacy</td>
                    <td>Cookie Preferences</td>
                    <td>Corporate Information</td>
                    <td>Contact Us</td>
                </tr>
                <tr>
                    <td>Speed Test</td>
                    <td>Legal Notices</td>
                    <td>Netflix Originals</td>
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