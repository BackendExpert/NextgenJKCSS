import React from 'react'
import { FaDownload, FaCogs, FaRocket } from 'react-icons/fa'
import Npmcode from '../../components/BaseFiles/Npmcode'

const NPM = () => {
    return (
        <div>
            <h1 className="text-2xl tracking-[5px] font-semibold text-gray-500 uppercase">Using NPM</h1>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
                JKCSS is not only available through a fast CDN, but also provides an official NPM package for modern developers who prefer clean dependency management and seamless integration into build tools like Vite, Webpack, and modern React workflows. By distributing JKCSS via NPM, we empower teams to automate updates, version control their design system reliably, and unlock advanced customization possibilities for truly scalable, production-ready web applications.
            </p>

            <h1 className="text-3xl font-semibold text-purple-500 mt-4">
                Use NPM for Installation - Node Package Manager
            </h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-50 to-white hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <FaDownload className="text-4xl text-purple-600 mb-4" />
                    <h2 className="text-xl font-bold text-gray-800">Easy Installation</h2>
                    <p className="text-gray-600 mt-3">Install JKCSS instantly with a single command and keep your project dependencies clean and up to date.</p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-50 to-white hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <FaCogs className="text-4xl text-purple-600 mb-4" />
                    <h2 className="text-xl font-bold text-gray-800">Seamless Integration</h2>
                    <p className="text-gray-600 mt-3">Plug JKCSS into any modern build tool or framework, from React to Vite, and customize it to match your unique design needs.</p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-50 to-white hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <FaRocket className="text-4xl text-purple-600 mb-4" />
                    <h2 className="text-xl font-bold text-gray-800">Scalable & Future-Proof</h2>
                    <p className="text-gray-600 mt-3">Rely on version control, automation, and robust updates to scale your apps with confidence and speed.</p>
                </div>
            </div>

            <div className="mt-8">
                <p className="mt-4 text-base text-gray-600 leading-relaxed mb-4">
                    Install via following command
                </p>
                <Npmcode npmcode={'npm i @jehankandy/jkcss'} />
            </div>

            <div className="mt-8">
                Vie More NPM goto <a href="https://www.npmjs.com/~jehankandy" target='_blank' className='font-semibold text-purple-500 hover:pl-2 duration-500'>NPM Packages</a>
            </div>

        </div>
    )
}

export default NPM