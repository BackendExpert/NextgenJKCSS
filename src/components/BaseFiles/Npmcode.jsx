import React from 'react';

const Npmcode = ({ npmcode }) => {
    return (
        <div className="
            w-full 
            rounded-xl 
            shadow-lg 
            bg-gradient-to-r from-purple-50 to-white 
            px-6 py-4 
            transition-transform duration-300 ease-in-out 
            hover:scale-[1.01]
        ">
            <p className="text-purple-600 font-mono tracking-wide break-words">
                {npmcode}
            </p>
        </div>
    );
};

export default Npmcode;
