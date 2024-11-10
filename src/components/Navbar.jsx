import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 shadow-lg body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link to="/">
              <span className="ml-3 text-2xl">Brisphere</span>
            </Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/discover">
              <p className="mr-5 hover:text-gray-900 hover:underline">
                Discover
              </p>
            </Link>
            <Link to="/services">
              <p className="mr-5 hover:text-gray-900 hover:underline">
                Services
              </p>
            </Link>
            <Link to="aboutus">
              <p className="mr-5 hover:text-gray-900 hover:underline">
                About Us
              </p>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
