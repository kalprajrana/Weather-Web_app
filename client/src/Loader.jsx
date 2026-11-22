import React from 'react';

/**
 * Cool animated loader shown while waiting for the weather API response.
 * Renders a full-screen overlay with a spinning multi-ring spinner
 * and an animated "fetching weather" message.
 */
const Loader = ({ text = 'Fetching weather...' }) => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
            <div className="relative flex items-center justify-center w-24 h-24">
                {/* Outer ring */}
                <span className="absolute inline-block w-24 h-24 rounded-full border-4 border-transparent border-t-blue-400 border-r-blue-400 animate-spin" />
                {/* Middle ring (slower, opposite direction) */}
                <span
                    className="absolute inline-block w-16 h-16 rounded-full border-4 border-transparent border-b-cyan-300 border-l-cyan-300 animate-spin"
                    style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
                />
                {/* Inner pulsing dot */}
                <span className="inline-block w-6 h-6 bg-white rounded-full animate-pulse" />
            </div>

            <p className="mt-6 text-white text-lg font-semibold tracking-wide animate-pulse">
                {text}
            </p>
        </div>
    );
};

export default Loader;
