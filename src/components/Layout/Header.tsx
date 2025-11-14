import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/diamond-data-logo.svg";


const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <img src={Logo} alt="App Logo" className="logo-img" />
          
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Stats"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Stats
          </NavLink>

            <NavLink
            to="/BaseballAI"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            BaseballAI
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Header;
