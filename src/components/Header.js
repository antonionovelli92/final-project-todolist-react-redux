import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Link
      to="/"
      className="d-flex align-items-center justify-content-start text-decoration-none text-reset"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/6194/6194029.png"
        alt="logo"
        style={{ width: "100px", height: "100px" }}
      />
      <h1 className="mb-0 ml-3">TO-DO-LIST</h1>
    </Link>
  );
};

export default Header;
