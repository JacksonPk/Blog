// src/app/favorite-color/item-loading.tsx
// This component serves as the fallback for each individual Suspense boundary.

import React from 'react';

export default function ItemLoading() {
  return (
    <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center animate-pulse flex flex-col items-center justify-center h-full min-h-[150px]'>
      <p className='text-xl font-semibold text-gray-500 mb-4'>Loading color...</p>
      {/* Simple loading spinner */}
      <div className='w-12 h-12 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin'></div>
    </div>
  );
}
