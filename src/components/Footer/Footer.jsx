import React from 'react';
import { Github, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="px-8 md:px-20 py-12 bg-white text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Column 1: Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-purple-600 mb-4">JKCSS</h2>
                    <p className="text-sm leading-relaxed text-gray-600">
                        South Asia’s first next-gen CSS framework.
                        Build faster, dream harder.
                        Never go back.
                    </p>
                </div>

                {/* Column 2: Navigation */}
                <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        <li><a href="#hero" className="hover:text-purple-500 transition-colors duration-300">Home</a></li>
                        <li><a href="#docs" className="hover:text-purple-500 transition-colors duration-300">Docs</a></li>
                        <li><a href="#showcase" className="hover:text-purple-500 transition-colors duration-300">Showcase</a></li>
                        <li><a href="#community" className="hover:text-purple-500 transition-colors duration-300">Community</a></li>
                    </ul>
                </div>

                {/* Column 3: Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-purple-500 transition-colors duration-300">GitHub</a></li>
                        <li><a href="#" className="hover:text-purple-500 transition-colors duration-300">Discord</a></li>
                        <li><a href="#" className="hover:text-purple-500 transition-colors duration-300">Blog</a></li>
                        <li><a href="#" className="hover:text-purple-500 transition-colors duration-300">Support</a></li>
                    </ul>
                </div>

                {/* Column 4: Social */}
                <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-4">Connect</h3>
                    <div className="flex space-x-5">
                        <a href="#" className="hover:text-purple-500 transform hover:scale-110 transition duration-300">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-purple-500 transform hover:scale-110 transition duration-300">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-purple-500 transform hover:scale-110 transition duration-300">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-purple-500 transform hover:scale-110 transition duration-300">
                            <Twitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} JKCSS — Engineered & maintained by
                <a
                    href="https://www.blackalphalabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-300"
                >
                    BlackAlphaLabs
                </a>
            </div>
        </footer>
    );
};

export default Footer;
