import { Book, Box, Phone, PhoneCall, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 flex items-center justify-center">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to = {'/'}>
              <User size = {15}/>
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to = {'/project'}>
              <Book size = {15}/>
              <span>Project</span>
            </NavLink>
          </li>
          <li>
            <NavLink to = {'/contact'}>
              <Phone size = {15} />
              <span>Contact</span>
            </NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  )
};

export default Navbar