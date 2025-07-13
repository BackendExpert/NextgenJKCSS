import React, { useState } from 'react';
import FileName from './FileName';

const UseJKCSS = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const code = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JKCSS DEMO</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/src/jkcss.min.css">
</head>
<body>
    <!-- You can customize following content -->
    <h1>Hello World, I am JKCSS..!</h1>

    <script src="https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/js/jkcss.min.js"></script>
</body>
</html>
        `;
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="my-8">
            <h1 className="text-lg md:text-xl font-semibold text-gray-700 mb-6">
                2. Now include JKCSS styles using CDN. Update <FileName FName={'index.html'} /> as follows.
            </h1>

            <div className="relative bg-white/20 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-500">
                <pre className="text-sm md:text-base font-mono text-gray-800 overflow-x-auto leading-relaxed">
                    <code>
                        <span className="text-purple-600">&lt;!DOCTYPE html&gt;</span><br />
                        <span className="text-purple-600">&lt;html</span> <span className="text-pink-600">lang=</span><span className="text-green-600">"en"</span><span className="text-purple-600">&gt;</span><br />
                        <span className="text-purple-600">    &lt;head&gt;</span><br />
                        <span className="text-purple-600">        &lt;meta</span> <span className="text-pink-600">charset=</span><span className="text-green-600">"UTF-8"</span><span className="text-purple-600">&gt;</span><br />
                        <span className="text-purple-600">        &lt;meta</span> <span className="text-pink-600">http-equiv=</span><span className="text-green-600">"X-UA-Compatible"</span> <span className="text-pink-600">content=</span><span className="text-green-600">"IE=edge"</span><span className="text-purple-600">&gt;</span><br />
                        <span className="text-purple-600">        &lt;meta</span> <span className="text-pink-600">name=</span><span className="text-green-600">"viewport"</span> <span className="text-pink-600">content=</span><span className="text-green-600">"width=device-width, initial-scale=1.0"</span><span className="text-purple-600">&gt;</span><br />
                        <span className="text-purple-600">        &lt;title&gt;</span>JKCSS DEMO<span className="text-purple-600">&lt;/title&gt;</span><br />
                        <span className="text-purple-600">        &lt;link</span> <span className="text-pink-600">rel=</span><span className="text-green-600">"stylesheet"</span> <span className="text-pink-600">href=</span><span className="text-green-600">"https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/src/jkcss.min.css"</span><span className="text-purple-600">&gt;</span><br />
                        <span className="text-purple-600">    &lt;/head&gt;</span><br />
                        <span className="text-purple-600">    &lt;body&gt;</span><br />
                        <span className="text-gray-500">        &lt;!-- You can customize following content --&gt;</span><br />
                        <span className="text-purple-600">        &lt;h1&gt;</span>Hello World, I am JKCSS..!<span className="text-purple-600">&lt;/h1&gt;</span><br />
                        <span className="text-purple-600">        &lt;script</span> <span className="text-pink-600">src=</span><span className="text-green-600">"https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/js/jkcss.min.js"</span><span className="text-purple-600">&gt;&lt;/script&gt;</span><br />
                        <span className="text-purple-600">    &lt;/body&gt;</span><br />
                        <span className="text-purple-600">&lt;/html&gt;</span><br />
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

export default UseJKCSS;
