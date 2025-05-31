// src/app/favorite/loading.tsx
// This component will be displayed automatically by Next.js
// when the data fetching in page.tsx is in progress.

import React from 'react';

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-4xl font-bold text-gray-800 mb-6'>Loading Your Favorite Fruit...</h1>
      <div className='flex items-center space-x-2'>
        <div className='w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow'></div>
        <div className='w-4 h-4 bg-green-500 rounded-full animate-bounce-slow delay-150'></div>
        <div className='w-4 h-4 bg-red-500 rounded-full animate-bounce-slow delay-300'></div>
        {/* <p className='text-xl text-gray-600 ml-4'>Loading...</p> */}
      </div>
    </div>
  );
}
