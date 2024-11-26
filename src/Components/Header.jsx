import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu if clicking outside
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle menu on click (for mobile) and hover (for desktop)
  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      // only apply hover on desktop screens
      setIsMenuOpen(true);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className="relative">
      {/* Toggle Button */}
      <button
        ref={buttonRef}
        onClick={handleToggleMenu} // Toggle menu on click (for mobile)
        onMouseEnter={handleMouseEnter} // Show menu on hover (for desktop)
        className="fixed top-4 left-4 bg-gray-200 p-4 rounded-full shadow-md transform transition-transform hover:scale-110"
      >
        <div className="space-y-1">
          <span className="block w-5 h-0.5 bg-black"></span>
          <span className="block w-5 h-0.5 bg-black"></span>
          <span className="block w-5 h-0.5 bg-black"></span>
        </div>
      </button>

      {/* Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="bg-white shadow-md py-3 px-6 fixed top-4 left-20 z-10 text-lg "
        >
          <ul className="flex flex-col items-start gap-4 italic font-semibold">
            <li>
              <NavLink
                to="/"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `hover:text-blue-500 transform transition-transform hover:scale-110 ${
                    isActive
                      ? "text-blue-700 font-bold rounded-full px-4 py-2 bg-orange-300 inline-flex items-center justify-center"
                      : "inline-flex items-center justify-center"
                  }`
                }
              >
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `hover:text-blue-500 transform transition-transform hover:scale-110 ${
                    isActive
                      ? "text-blue-700 font-bold rounded-full px-4 py-2 bg-orange-300 inline-flex items-center justify-center"
                      : ""
                  }`
                }
              >
                ABOUT
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `hover:text-blue-500 transform transition-transform hover:scale-110 ${
                    isActive
                      ? "text-blue-700 font-bold rounded-full px-4 py-2 bg-orange-300 inline-flex items-center justify-center"
                      : ""
                  }`
                }
              >
                PROJECTS
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/certificates"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `hover:text-blue-500 transform transition-transform hover:scale-110 ${
                    isActive
                      ? "text-blue-700 font-bold rounded-full px-4 py-2 bg-orange-300 inline-flex items-center justify-center"
                      : ""
                  }`
                }
              >
                CERTIFICATES
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/resume"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `hover:text-blue-500 transform transition-transform hover:scale-110 ${
                    isActive
                      ? "text-blue-700 font-bold rounded-full px-4 py-2 bg-orange-300 inline-flex items-center justify-center"
                      : ""
                  }`
                }
              >
                RESUME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `hover:text-blue-500 transform transition-transform hover:scale-110 ${
                    isActive
                      ? "text-blue-700 font-bold rounded-full px-4 py-2 bg-orange-300 inline-flex items-center justify-center"
                      : ""
                  }`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
