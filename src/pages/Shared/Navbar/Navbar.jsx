import { Link } from "react-router-dom";
import img from "../../../assets/navbar/63b2608659086bfaa081b7cf_logo.png";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="">About</Link>
      </li>
      <li>
        <Link to="">Services</Link>
      </li>
      <li>
        <Link to="">Pages</Link>
      </li>
      <li>
        <Link to="">Doctors</Link>
      </li>
      <li>
        <Link to="">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-sky-100 px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn bg-[#485ca4] text-white font-semibold text-lg">
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
