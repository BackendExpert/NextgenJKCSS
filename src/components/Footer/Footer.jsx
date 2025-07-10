import React from 'react';
import { Github, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 px-8 md:px-32 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1: Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">JKCSS</h2>
                    <p className="text-sm">
                        South Asia’s first next-gen CSS framework.
                        Build faster, dream harder.
                        Never go back.
                    </p>
                </div>

                {/* Column 2: Navigation */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        <li><a href="#hero" className="hover:text-yellow-400 transition">Home</a></li>
                        <li><a href="#docs" className="hover:text-yellow-400 transition">Docs</a></li>
                        <li><a href="#showcase" className="hover:text-yellow-400 transition">Showcase</a></li>
                        <li><a href="#community" className="hover:text-yellow-400 transition">Community</a></li>
                    </ul>
                </div>

                {/* Column 3: Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-400 transition">GitHub</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition">Discord</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition">Blog</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition">Support</a></li>
                    </ul>
                </div>

                {/* Column 4: Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-yellow-400 transition">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            <Twitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                <footer class="text-center text-gray-500 text-sm py-4">
                    © {new Date().getFullYear()} JKCSS — Engineered and maintained by <a href="https://www.blackalphalabs.com/" target="_blank"><span class="font-semibold">BlackAlphaLabs</span>.</a>
                </footer>
            </div>
        </footer>
    );
};

export default Footer;
