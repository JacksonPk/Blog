// src/app/favorite-color/IndividualColorDisplay.tsx
// This is a Client Component that receives a single color string as a prop
// and displays it. It no longer uses React.use() directly.

'use client'; // This directive marks this as a Client Component

import React from 'react';

interface IndividualColorDisplayProps {
  color: string; // Receives the color string directly
  index: number; // Index to pick a specific color from the resolved array
}

export default function IndividualColorDisplay({ color, index }: IndividualColorDisplayProps) {
  return (
    <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-200'>
      <p className='text-xl font-semibold text-gray-700 mb-3'>Color #{index + 1}:</p>
      <p
        className={`text-4xl font-extrabold mt-2`}
        // Dynamically set the text color based on the fetched color name
        style={{ color: color.toLowerCase() === 'n/a' ? '#6b7280' : color.toLowerCase() }}
      >
        {/* Capitalize the first letter for display */}
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </p>
    </div>
  );
}
