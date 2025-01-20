import { Book, Phone, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return `
      flex items-center gap-3 px-4 py-2 rounded-full 
      transition-colors duration-200
      ${isActive 
        ? 'text-lime [&>svg]:text-lime' 
        : 'text-white [&>svg]:text-white'
      }
    `;
  };

  return (
    <nav className="flex justify-center w-full py-4">
      <div className="outline outline-white rounded-full px-4 py-1">
        <div className="flex items-center">
          <ul className="flex items-center gap-2">
            <li>
              <NavLink to={'/'} className={navLinkStyle}>
                <User size={15} />
                <span className="text-sm font-medium">Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/project'} className={navLinkStyle}>
                <Book size={15} />
                <span className="text-sm font-medium">Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contact'} className={navLinkStyle}>
                <Phone size={15}/>
                <span className="text-sm font-medium">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;