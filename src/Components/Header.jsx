import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const pages = ["Home", "About", "Appointment", "Reviews", "Contact"];

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleClickLogout = () => signOut(auth);

  return (
    <header>
      <nav className="navbar bg-base-100 container px-4 lg:px-8 xl:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {pages.map((page) => (
                <li key={page}>
                  <Link to={`/${page.toLowerCase()}`}>{page}</Link>
                </li>
              ))}

              {user ? (
                <>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li onClick={handleClickLogout}>Logout</li>
                </>
              ) : (
                <li>
                  <Link to={`/login`}>Login</Link>
                </li>
              )}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {pages.map((page) => (
              <li key={page}>
                <Link to={`/${page.toLowerCase()}`}>{page}</Link>
              </li>
            ))}

            {user ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleClickLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to={`/login`}>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <label
            tabIndex="1"
            className="btn btn-ghost drawer-button"
            htmlFor="dashboard-drawer"
            title="Open Drawer"
          >
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
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
