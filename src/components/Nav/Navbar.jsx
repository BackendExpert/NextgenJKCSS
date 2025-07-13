import React from 'react';
import jkcsslogo from '../../assets/JKCSSLogo.png';
import { FaGithub } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white bg-opacity-80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
            {/* Left: Logo */}
            <a href="/" className="flex items-center space-x-3">
                <img src={jkcsslogo} alt="JKCSS Logo" className="h-8 w-auto" />
                <h1 className="text-xl font-extrabold text-gray-600 select-none">
                    JKCSS <span className="font-normal text-gray-500">Framework</span> <span>v7</span>
                </h1>
            </a>

            {/* Middle: Nav Links */}
            <div className="hidden md:flex space-x-8 text-gray-500 text-sm font-medium">
                <a
                    href="#docs"
                    className="hover:text-yellow-400 transition-colors duration-200"
                >
                    Docs
                </a>
                <a
                    href="#blog"
                    className="hover:text-yellow-400 transition-colors duration-200"
                >
                    Blog
                </a>
                <a
                    href="#blog"
                    className="hover:text-yellow-400 transition-colors duration-200"
                >
                    Projects
                </a>
                <a
                    href="#community"
                    className="hover:text-yellow-400 transition-colors duration-200"
                >
                    Community
                </a>
            </div>

            {/* Right: GitHub Button */}
            <div>
                <a
                    href="https://github.com/JKCSS-CSS-Framework"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-yellow-400 bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-500 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition"
                    aria-label="GitHub repository"
                >
                    <FaGithub className="mr-2 h-5 w-5" />
                    GitHub
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
