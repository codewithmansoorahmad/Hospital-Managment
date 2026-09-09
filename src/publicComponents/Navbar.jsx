import { NavLink } from "react-router-dom";

export default function NavBar(){
    return <>
        <ul className="links">
            <li><NavLink className="link">Home</NavLink></li>
            <li><NavLink className="link">Doctors</NavLink></li>
            <li><NavLink className="link">Services</NavLink></li>
            <li><NavLink className="link">About</NavLink></li>
            <li><NavLink className="link">Contact</NavLink></li>
        </ul>
    </>
}