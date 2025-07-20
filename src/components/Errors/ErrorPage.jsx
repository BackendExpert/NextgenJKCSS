import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 px-6 pt-16">
            <h1 className="text-6xl font-bold text-purple-500 mb-4">503</h1>
            <h2 className="text-2xl font-semibold text-purple-800 mb-2">Service Unavailable</h2>
            <p className="text-gray-500 mb-6 text-center max-w-md">
                The service you're trying to access is currently not available or under development.
                Please check back later or contact support for more information.
            </p>
            <a
                href="/Docs/Installation"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-900 transition"
            >
                Go Back to Documentation
            </a>
        </div>
    );
};

export default ErrorPage;
