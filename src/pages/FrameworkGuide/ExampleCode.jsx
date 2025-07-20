import React, { useState } from 'react';

const ExampleCode = () => {
    const [copied, setCopied] = useState(false);

    const code = `<button class="jkbtn jkbtn-blue">Click Me</button>
<h1 class="jk-display-4">Welcome to JKCSS + Vite</h1>`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="my-8">
            <div className="relative bg-white/20 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-500">
                <pre className="text-sm md:text-base font-mono text-gray-800 overflow-x-auto leading-relaxed">
                    <code>
                        <span className="text-purple-600">&lt;button</span>{' '}
                        <span className="text-pink-600">class=</span>
                        <span className="text-green-600">"jkbtn jkbtn-blue"</span>
                        <span className="text-purple-600">&gt;</span>
                        Click Me
                        <span className="text-purple-600">&lt;/button&gt;</span>
                        <br />
                        <span className="text-purple-600">&lt;h1</span>{' '}
                        <span className="text-pink-600">class=</span>
                        <span className="text-green-600">"jk-display-4"</span>
                        <span className="text-purple-600">&gt;</span>
                        Welcome to JKCSS + Vite
                        <span className="text-purple-600">&lt;/h1&gt;</span>
                    </code>
                </pre>

                <button
                    onClick={copyToClipboard}
                    className={`absolute top-4 right-4 px-4 py-2 rounded-lg font-semibold text-white shadow 
                        transition duration-300 ease-in-out 
                        ${copied ? 'bg-green-600' : 'bg-purple-700 hover:bg-purple-800 active:scale-95'}`}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

export default ExampleCode;
