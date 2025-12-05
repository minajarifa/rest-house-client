import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function Navber() {
  const { user,logOut } = useAuth();
  
  const navLink = (
    <>
      <Link className="m-2" to={"/"}>
        Home
      </Link>
      <Link className="m-2" to={"/"}>
        Home
      </Link>
      <Link className="m-2" to={"/"}>
        Home
      </Link>
      <Link className="m-2" to={"/"}>
        Home
      </Link>
    </>
  );
  return (
    <div>
      <div className="shadow-sm navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              tabIndex="-1"
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">daisyUI</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  className=""
                  referrerPolicy="no-referrer"
                  alt="User Profile"
                  src={
                    user
                      ? user?.photoURL
                      : "https://i.ibb.co.com/mrK7Sjcw/download.png"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <button
                 onClick={()=> logOut()}
                  className="btn btn-primary">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
