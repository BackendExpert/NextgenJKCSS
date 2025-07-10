import React from "react";
import { Zap, Globe, Layers, Users } from "lucide-react";
import jkcsslogo from '../../assets/JKCSSLogo.png'

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen font-sans">
            {/* Hero with wallpaper */}
            <section className="relative flex items-center justify-center text-center min-h-screen overflow-hidden">
                <img
                    src="https://source.unsplash.com/1920x1080/?technology,code"
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        JKCSS — Build Beyond Trends
                    </h1>
                    <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-200">
                        The next-gen CSS framework born in South Asia. Fast. Modular. Purpose-built for dream hunters.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/GetStarted"
                            className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition"
                        >
                            Get Started
                        </a>
                        <a
                            href="#docs"
                            className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
                        >
                            Read Docs
                        </a>
                    </div>
                </div>
            </section>

            {/* About Vision Split */}
            <section className="py-24 px-4 md:flex md:items-center md:justify-between max-w-6xl mx-auto">
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <img
                        src={jkcsslogo}
                        alt="Vision"
                        className="rounded-xl shadow-xl"
                    />
                </div>
                <div className="md:w-1/2 md:pl-12">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        A Vision with No Reverse
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        JKCSS is not just code — it’s an invitation to dream harder. Build faster, stay leaner, and take pride in tools made for you, by you, from your region to the world.
                    </p>
                    <p className="italic text-yellow-400 font-semibold">
                        Never go back — hunt the hardest dreams.
                    </p>
                </div>
            </section>

            {/* Features with Icons */}
            <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
                <h2 className="text-4xl font-bold text-center mb-12">Key Advantages</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                    <FeatureIconCard
                        icon={<Zap className="w-12 h-12 text-yellow-400 mb-4" />}
                        title="Blazing Fast"
                        desc="Under 5KB, lightning-fast delivery, minimal load."
                    />
                    <FeatureIconCard
                        icon={<Layers className="w-12 h-12 text-pink-400 mb-4" />}
                        title="Modular Design"
                        desc="Atomic utility classes for ultimate control."
                    />
                    <FeatureIconCard
                        icon={<Globe className="w-12 h-12 text-purple-400 mb-4" />}
                        title="Proudly Regional"
                        desc="South Asia’s first. Global quality. Local pride."
                    />
                    <FeatureIconCard
                        icon={<Users className="w-12 h-12 text-yellow-400 mb-4" />}
                        title="Community Driven"
                        desc="Open source, built with contributions from dreamers."
                    />
                </div>
            </section>

            {/* Showcase / Inspiration */}
            <section className="py-24 px-4 md:flex md:items-center md:justify-between max-w-6xl mx-auto">
                <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        See It In Action
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Real sites, real impact — see how developers are using JKCSS to build modern, blazing-fast experiences. Be the next name on this wall.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition"
                    >
                        View Showcase
                    </a>
                </div>
                <div className="md:w-1/2">
                    <img
                        src={jkcsslogo}
                        alt="Showcase"
                        className="rounded-xl shadow-xl"
                    />
                </div>
            </section>

            {/* Community */}
            <section className="py-24 px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Join The Movement</h2>
                <p className="text-lg text-gray-400 mb-8">
                    Star the repo, join the Discord, or help shape the roadmap. JKCSS lives and grows with you.
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="#"
                        className="border border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition"
                    >
                        Discord
                    </a>
                </div>
            </section>

            {/* Footer */}
            {/* <footer className="py-12 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} JKCSS — Never go back. Hunt the hardest dreams.
            </footer> */}
            <footer class="text-center text-gray-500 text-sm py-4">
                © {new Date().getFullYear()} JKCSS — Engineered and maintained by <a href="https://www.blackalphalabs.com/" target="_blank"><span class="font-semibold">BlackAlphaLabs</span>.</a>
            </footer>

        </main>
    );
}

function FeatureIconCard({ icon, title, desc }) {
    return (
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            {icon}
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400">{desc}</p>
        </div>
    );
}
