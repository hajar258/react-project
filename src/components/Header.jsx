
import React, { useState } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (

    <nav className="bg-violet-600 border-black dark:bg-violet-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2">
          <a href="https://flowbite.com/" className="flex items-center">
             <button type="button" class="text-black bg-violet-100 hover:bg-violet-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-violet-100 dark:hover:bg-violet-100 dark:focus:ring-blue-800"><a href='/login'> Get Started</a></button>
          </a>
          <div className="relative">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={dropdownVisible ? 'true' : 'false'}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            {dropdownVisible && (
              <ul className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
                <li>
                  <a href="https://flowbite.com/link1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Dropdown Item 1
                  </a>
                </li>
                <li>
                  <a href="https://flowbite.com/link2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Dropdown Item 2
                  </a>
                </li>
                <li>
                  <a href="https://flowbite.com/link3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Dropdown Item 3
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Header;