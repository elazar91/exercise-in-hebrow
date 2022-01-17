import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CurrentUser } from "../../App";

const Header = () => {
  const { loginUser } = useContext(CurrentUser);

  return (
    <div className="header">
      <Link className="link" to="/">
        Home
      </Link>
      {loginUser?.permission === "admin" ? (
        <Link className="link" to="/admin">
          Admin
        </Link>
      ) : null}
      <Link className="link" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Header;
