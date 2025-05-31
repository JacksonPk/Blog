// src/app/favorite-color/ColorListContainer.tsx
// This is a Client Component that uses React.use() to read the promise
// and then renders all the received colors.

'use client'; // This directive marks this as a Client Component

import React from 'react';
import IndividualColorDisplay from './IndividualColorDisplay'; // Import the component that displays a single color

interface ColorListContainerProps {
  colorsPromise: Promise<string[]>; // Receives the promise of colors from the parent Server Component
}

export default function ColorListContainer({ colorsPromise }: ColorListContainerProps) {
  // React.use() can read the value of a promise. This will cause this component
  // to suspend until the promise resolves, triggering the Suspense fallback
  // defined in page.tsx.
  const colors = React.use(colorsPromise);
  console.log('ColorListContainer: Colors resolved, rendering', colors.length, 'items.');

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl'>
      {/* Map over all fetched colors and render IndividualColorDisplay for each */}
      {colors.map((colorName, index) => (
        <IndividualColorDisplay key={index} color={colorName} index={index} />
      ))}
    </div>
  );
}
