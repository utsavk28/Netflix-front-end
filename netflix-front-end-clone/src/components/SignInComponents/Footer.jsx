import React from "react"

function Footer() {
    return <footer>
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
    </footer>
}

export default Footer