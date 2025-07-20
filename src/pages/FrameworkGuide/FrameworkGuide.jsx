import React from 'react'
import Npmcode from '../../components/BaseFiles/Npmcode'
import FileName from '../../components/BaseFiles/FileName'
import ExampleCode from './ExampleCode'

const FrameworkGuide = () => {
    return (
        <div>
            <h1 className="text-2xl tracking-[5px] font-semibold text-gray-500 uppercase">⚡ Vite Integration</h1>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Learn how to integrate JKCSS into your Vite-powered frontend project with modern, production-ready setup.
            </p>

            <h1 className="text-xl font-semibold text-purple-500 mt-4">1. Create a Vite Project</h1>

            <div className="mt-4">
                <Npmcode npmcode={'npm create vite@latest my-jkcss-app'} />
            </div>

            <p className="mt-4 text-base text-gray-600 leading-relaxed">
                <h1 className="">Choose:</h1>
                <div className="pl-8">
                    <p className=""><span className='font-semibold'>Framework:</span> Vanilla, React, Vue, etc.</p>
                    <p className=""><span className='font-semibold'>Language:</span> JavaScript or TypeScript</p>
                </div>
            </p>

            <h1 className="mt-4 text-base text-gray-600 leading-relaxed">Then install dependencies:</h1>

            <div className="mt-4">
                <Npmcode npmcode={'cd my-jkcss-app'} />
            </div>
            <div className="mt-4">
                <Npmcode npmcode={'npm install'} />
            </div>

            {/* ----------------------- */}

            <div className="mt-8">
                <h1 className="text-xl font-semibold text-purple-500 mt-4">2. Install JKCSS and Sass</h1>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">Install JKCSS framework and Sass preprocessor:</p>

                <div className="mt-4">
                    <Npmcode npmcode={'npm install @jehankandy/jkcss sass'} />
                </div>
            </div>

            {/* ----------------------- */}

            <div className="mt-8">
                <h1 className="text-xl font-semibold text-purple-500 mt-4">3. Add Your JKCSS Entry File</h1>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">Inside <FileName FName={'src/styles/jkstyle.scss'} /> , import JKCSS:</p>

                <div className="mt-4">
                    <Npmcode npmcode={'@import "../../../node_modules/@jehankandy/jkcss/src/jkcss.min.css";'} />
                </div>
            </div>


            {/* ----------------------- */}

            <div className="mt-8">
                <h1 className="text-xl font-semibold text-purple-500 mt-4">4. Import Styles in Entry JS/TS File</h1>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">In React or Vanilla projects, add this in <FileName FName={'main.jsx'} /> / <FileName FName={'main.js'} /> :</p>

                <div className="mt-4">
                    <Npmcode npmcode={`import './styles/jkstyle.scss';`} />
                </div>
            </div>


            {/* ----------------------- */}

            <div className="mt-8">
                <h1 className="text-xl font-semibold text-purple-500 mt-4">5. Use JKCSS Classes</h1>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">Now use JKCSS utility classes, components, and grid directly in your HTML or JSX:</p>

                <div className="mt-4">
                    <ExampleCode />
                </div>
            </div>

            {/* ----------------------- */}

            <div className="mt-8">
                <h1 className="text-xl font-semibold text-purple-500 mt-4">6. Start the Dev Server</h1>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">Now use JKCSS utility classes, components, and grid directly in your HTML or JSX:</p>

                <div className="mt-4">
                    <Npmcode npmcode={`npm run dev`} />
                </div>
            </div>

            {/* ----------------------- */}

            <div className="mt-8">
                <h1 className="text-xl font-semibold text-purple-500 mt-4">Lastly </h1>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">The Project runs on <FileName FName={'http://localhost:5173'}/> (The Port will be change if you run any other projects) </p>

                <div className="mt-4">
                    <Npmcode npmcode={`npm run dev`} />
                </div>
            </div>

        </div>
    )
}

export default FrameworkGuide