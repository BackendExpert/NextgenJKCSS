import React from 'react'

const Installation = () => {
    return (
        <div>
            <h1 className="text-2xl tracking-[5px] font-semibold text-gray-500 uppercase">Installation</h1>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
                To get started with JKCSS, simply add the framework to your project using your preferred package manager
                or by linking the CDN directly in your HTML. JKCSS is designed to integrate smoothly with modern build tools
                and works out of the box with minimal setup, so you can focus on building clean, fast, and scalable user interfaces.
            </p>

            <h1 className="text-xl font-semibold text-purple-500 mt-4">
                Use CDN (Content Delivery Network or Content Distribution Network)
            </h1>

            <div className="overflow-x-auto mt-6">
                <table className="min-w-full text-left border-collapse rounded-xl shadow-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">Type</th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-purple-50 transition duration-300 ease-in-out transform hover:scale-[1.01] border-b border-gray-200">
                            <td className="px-6 py-4 text-gray-800 font-semibold">CSS</td>
                            <td className="px-6 py-4">
                                <a
                                    href="https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/src/jkcss.min.css"
                                    className="text-purple-600 font-medium underline break-all hover:text-purple-800 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/src/jkcss.min.css
                                </a>
                            </td>
                        </tr>
                        <tr className="hover:bg-purple-50 transition duration-300 ease-in-out transform hover:scale-[1.01]">
                            <td className="px-6 py-4 text-gray-800 font-semibold">JS</td>
                            <td className="px-6 py-4">
                                <a
                                    href="https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/js/jkcss.min.js"
                                    className="text-purple-600 font-medium underline break-all hover:text-purple-800 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/js/jkcss.min.js
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Installation
