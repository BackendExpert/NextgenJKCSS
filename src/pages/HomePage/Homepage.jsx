import React from "react";
import { Zap, Globe, Layers, Users } from "lucide-react";
import jkcsslogo from '../../assets/JKCSSLogo.png';

export default function Home() {
    return (
        <main className="bg-white text-gray-800 min-h-screen font-sans">
            {/* Hero */}
            <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 overflow-hidden">
                <img
                    src="https://source.unsplash.com/1920x1080/?abstract,light"
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-5"
                />
                <div className="relative z-10 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                        Build Beyond Trends
                    </h1>
                    <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
                        South Asia’s next-gen CSS framework. Fast. Modular. Made for dreamers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/Docs/Introduction"
                            className="bg-purple-600 text-white font-bold px-8 py-3 rounded-full hover:bg-purple-700 hover:scale-105 transition duration-300"
                        >
                            Get Started
                        </a>
                        <a
                            href="#docs"
                            className="border border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white hover:scale-105 transition duration-300"
                        >
                            Read Docs
                        </a>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-20 px-4 md:flex md:items-center md:justify-between max-w-6xl mx-auto">
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <img
                        src={jkcsslogo}
                        alt="Vision"
                        className="rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
                    />
                </div>
                <div className="md:w-1/2 md:pl-12">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                        A Vision with No Reverse
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        JKCSS is not just code — it’s an invitation to dream harder. Build faster, stay leaner, and take pride in tools made for you, by you, from your region to the world.
                    </p>
                    <p className="italic text-purple-600 font-semibold">
                        Never go back — hunt the hardest dreams.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
                <h2 className="text-4xl font-bold text-center mb-12">Key Advantages</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <FeatureIconCard
                        icon={<Zap className="w-12 h-12 text-purple-500 mb-4" />}
                        title="Blazing Fast"
                        desc="Under 5KB, lightning-fast delivery, minimal load."
                    />
                    <FeatureIconCard
                        icon={<Layers className="w-12 h-12 text-pink-500 mb-4" />}
                        title="Modular Design"
                        desc="Atomic utility classes for ultimate control."
                    />
                    <FeatureIconCard
                        icon={<Globe className="w-12 h-12 text-yellow-500 mb-4" />}
                        title="Proudly Regional"
                        desc="South Asia’s first. Global quality. Local pride."
                    />
                    <FeatureIconCard
                        icon={<Users className="w-12 h-12 text-purple-500 mb-4" />}
                        title="Community Driven"
                        desc="Open source, built with contributions from dreamers."
                    />
                </div>
            </section>

            {/* Showcase */}
            <section className="py-20 px-4 md:flex md:items-center md:justify-between max-w-6xl mx-auto">
                <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                        See It In Action
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Real sites, real impact — see how developers are using JKCSS to build modern, blazing-fast experiences. Be the next name on this wall.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 hover:scale-105 transition duration-300"
                    >
                        View Showcase
                    </a>
                </div>
                <div className="md:w-1/2">
                    <img
                        src={jkcsslogo}
                        alt="Showcase"
                        className="rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
                    />
                </div>
            </section>

            {/* Community */}
            <section className="py-20 px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Join The Movement</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Star the repo, join the Discord, or help shape the roadmap. JKCSS lives and grows with you.
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 hover:scale-105 transition duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="#"
                        className="border border-purple-600 px-8 py-3 rounded-full font-bold text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-105 transition duration-300"
                    >
                        Discord
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-gray-500 text-sm py-6">
                © {new Date().getFullYear()} JKCSS — Engineered and maintained by{" "}
                <a href="https://www.blackalphalabs.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:underline">
                    BlackAlphaLabs
                </a>.
            </footer>
        </main>
    );
}

function FeatureIconCard({ icon, title, desc }) {
    return (
        <div className="
            bg-white border border-purple-100
            p-8 rounded-2xl shadow-md hover:shadow-xl
            hover:scale-105 transition duration-300 ease-in-out
        ">
            <div className="flex justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}
