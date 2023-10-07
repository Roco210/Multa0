import { NavLink } from "react-router-dom"
import "./style.css"
const linkImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sbVn9jq0j1krFLVsn116L2eDiijm70MsV2gJQOHx5oN5ptSFpqXrwbACn2n7QW1z9-w&usqp=CAU"

const Navbar = () => {

    return (
        <div className="navBar">
            {/* LOGO */}
            <div> 
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "inactive"}>
                    <img src={linkImg} alt="brand" />
                </NavLink>
            </div>
            {/* menu */}
            <div>
            <ul className="lista">
                    <li><NavLink to="/"className={({ isActive }) => isActive ? "active": "inactive"}>Home</NavLink></li>
                    <li><NavLink to="/reduceFines"className={({ isActive }) => isActive ? "active": "inactive"}>Reduci tu multa</NavLink></li>
                    <li><NavLink to="/knowFines"className={({ isActive }) => isActive ? "active": "inactive"}>conoce tus multas</NavLink></li>
                    <li><NavLink to="/aboutUs"className={({ isActive }) => isActive ? "active": "inactive"}>Quienes Somos</NavLink></li>
                    <li> <NavLink to="/contact"className={({ isActive }) => isActive ? "active": "inactive"}>Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );

};

export default Navbar;