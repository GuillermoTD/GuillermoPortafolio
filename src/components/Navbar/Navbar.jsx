import "./NavbarStyles.css";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_Logo">
        <h2>Logo</h2>
      </div>
      <div className="Navbar_Menu">
        <a href="#About" className="Navbar_Menu_Item">
          About
        </a>
        <a href="#" className="Navbar_Menu_Item">
          Skills
        </a>
        <a href="#About" className="Navbar_Menu_Item">
          Services
        </a>
        <a href="#Projects" className="Navbar_Menu_Item">
          Projects
        </a>
        <a href="#" className="Navbar_Menu_Item">
          Contact
        </a>
      </div>
      <a href="#Projects" className="Navbar_Menu_Toggle">
        <GiHamburgerMenu />
      </a>
    </div>
  );
}
