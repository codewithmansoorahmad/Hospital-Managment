import { HospitalIcon } from "lucide-react"
import NavBar from "../publicComponents/Navbar"
import "../publicCss/Header.css"
export default function Header(){
    return <div className="header">
        <div className="logo">
            <HospitalIcon/>
            <h3>Badar's Hospital</h3>
        </div>

            <div className="navbar">
                <NavBar/>
            </div>
    </div>
}