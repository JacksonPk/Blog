// src/app/favorite-color/error.tsx
'use client'; // Error Boundaries must be Client Components

import React, { useEffect } from 'react';

interface ErrorPageProps {
  error: Error;
  reset: () => void; // Function to attempt re-rendering the component
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service (e.g., Sentry, Bugsnag)
    console.error('Caught client-side error:', error);
  }, [error]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-red-100 p-4 font-inter'>
      <h2 className='text-2xl font-bold text-red-800 mb-4'>
        Oops! Couldn't load your favorite colors.
      </h2>
      <p className='text-red-700 text-center mb-6'>
        Something went wrong while fetching the data. Please try again.
      </p>
      <button
        className='px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300'
        onClick={() => reset()} // This attempts to re-render the segment
      >
        Try again
      </button>
      {/* Optional: Show error details in development for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <pre className='mt-4 p-2 bg-red-50 text-red-900 rounded-md whitespace-pre-wrap'>
          {error.message}
        </pre>
      )}
    </div>
  );
}
