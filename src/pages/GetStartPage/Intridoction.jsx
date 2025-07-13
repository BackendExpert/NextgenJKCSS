import React from 'react'

const Introduction = () => {
    return (
        <section className="w-full px-6 pt-8 pb-20 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <h1 className="text-4xl font-extrabold tracking-[6px] uppercase text-gray-800 mb-8">
                    Introduction
                </h1>

                {/* Intro Text */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Welcome to <span className="font-bold text-black">JKCSS</span> — the first regionally crafted CSS framework
                    built from South Asia for the world. This is not just another utility kit; this is a statement that performance,
                    clarity, and adaptability are not optional. They are **essential**.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    With JKCSS, you’re not bound by bloated design systems or legacy constraints. You get a lightweight,
                    modern toolkit that puts you in control of your markup — so you spend less time wrestling with overrides
                    and more time building features that matter.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    This framework is your answer to projects that demand speed, modularity, and the confidence to scale
                    without the weight of unused code. It’s open, flexible, and ready for the hardest challenges you can throw at it.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                    {/* Card 1 */}
                    <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                        <div className="mb-4">
                            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                        <p className="text-gray-600">
                            Designed for speed — ship smaller CSS bundles and load pages instantly, even on low-bandwidth connections.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                        <div className="mb-4">
                            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L2 7v10l10 5 10-5V7l-10 2.5z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Modular Foundation</h3>
                        <p className="text-gray-600">
                            Use just the pieces you need. Keep your codebase lean, readable, and always under your control.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                        <div className="mb-4">
                            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Easy Adoption</h3>
                        <p className="text-gray-600">
                            Familiar patterns, intuitive class names — start small, grow big, and onboard your team in hours, not weeks.
                        </p>
                    </div>
                </div>

                {/* Core Principles */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Our Core Principles</h2>
                <ul className="space-y-4 mb-12">
                    <li className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-lg">
                            <strong>Performance-First:</strong> Every class, every rule, every build step exists to serve raw speed.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-lg">
                            <strong>Minimal, Never Bare:</strong> Just enough to be powerful — no fluff, no bloat.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-lg">
                            <strong>Community-Led:</strong> Built with input from real builders, for real problems.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-lg">
                            <strong>Regionally Proud, Globally Relevant:</strong> JKCSS is built here — but made for the world.
                        </span>
                    </li>
                </ul>

                {/* Closing CTA */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the Movement</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    JKCSS is not just another framework to compare version numbers. It’s a commitment to quality, a push
                    against wasteful complexity, and a signal that South Asian developers can lead at the highest standard.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Build your next big idea on top of something lean, robust, and easy to master.
                    Let your work inspire the next developer to aim higher. JKCSS is yours — take it, shape it,
                    push it forward.
                </p>
            </div>
        </section>
    )
}

export default Introduction
