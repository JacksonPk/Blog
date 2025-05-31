// src/app/favorite-color/ColorItem.tsx
// This is now a regular Server Component (not async) that receives color data as a prop.
// It no longer performs its own data fetching.

import React from 'react';

interface ColorItemProps {
  color: string; // Now receives the color string directly as a prop
  index: number;
}

export function ColorItem({ color, index }: ColorItemProps) {
  return (
    <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-200'>
      <p className='text-xl font-semibold text-gray-700 mb-3'>Color #{index + 1}:</p>
      <p
        className={`text-4xl font-extrabold mt-2`}
        // Dynamically set the text color based on the received color name
        style={{ color: color.toLowerCase() === 'n/a' ? '#6b7280' : color.toLowerCase() }}
      >
        {/* Capitalize the first letter for display */}
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </p>
    </div>
  );
}
