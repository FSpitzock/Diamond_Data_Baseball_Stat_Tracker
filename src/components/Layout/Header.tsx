import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/DiamondDataLogo.png";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <img src={Logo} alt="App Logo" className="logo-img" />
          <h1 className="logo-text">Diamond Data</h1>
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
        </nav>

      </div>
    </header>
  );
};

export default Header;
