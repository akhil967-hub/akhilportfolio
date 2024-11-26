import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-blue-600 transition-colors">
            MyPortfolio
          </NavLink>
        </div>
        <ul className="flex gap-6 font-semibold text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-600 transition-colors ${
                  isActive ? "text-blue-700 font-bold underline" : ""
                }`
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-600 transition-colors ${
                  isActive ? "text-blue-700 font-bold underline" : ""
                }`
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-blue-600 transition-colors ${
                  isActive ? "text-blue-700 font-bold underline" : ""
                }`
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certificates"
              className={({ isActive }) =>
                `hover:text-blue-600 transition-colors ${
                  isActive ? "text-blue-700 font-bold underline" : ""
                }`
              }
            >
              CERTIFICATES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `hover:text-blue-600 transition-colors ${
                  isActive ? "text-blue-700 font-bold underline" : ""
                }`
              }
            >
              RESUME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-600 transition-colors ${
                  isActive ? "text-blue-700 font-bold underline" : ""
                }`
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
