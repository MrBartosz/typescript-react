import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
    <div className="container">
        <div className="main_list">
            <ul className="navlinks">
                <li>
                    <button className="navbar-button"><Link to="/Main">Main</Link></button>
                </li>
                <li>
                    <button className="navbar-button"><Link to="/About">About</Link></button>
                </li>
                <li>
                    <button className="navbar-button"><Link to="/Contact">Contact</Link></button>
                </li>
            </ul>
        </div>
    </div>

    )
}