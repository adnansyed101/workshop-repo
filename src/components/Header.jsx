import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="space-x-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Header;
