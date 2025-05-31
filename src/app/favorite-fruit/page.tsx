// src/app/favorite/page.tsx
// This is a Server Component by default in the App Router.
// It will fetch data from the /api/fruit endpoint.

import React from 'react';

export default async function FavoriteFruitPage() {
  // --- CHANGE START ---
  // Use a relative path for internal API routes.
  // Next.js handles this correctly during build time for Server Components.
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/fruit`,
    {
      // const response = await fetch('/api/fruit', {
      // --- CHANGE END ---
      // This is crucial for demonstrating loading.tsx.
      // By default, fetch requests in Server Components are cached.
      // 'no-store' ensures the request is always re-fetched on every visit,
      // allowing us to see the loading state.
      cache: 'no-store',
    }
  );
  const data = await response.text(); // Assuming the API returns plain text

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-4xl font-bold text-gray-800 mb-6'>My Favorite Fruit</h1>
      <p className='text-2xl text-green-700 font-semibold animate-fade-in'>
        My favorite fruit is: <span className='text-blue-600'>{data}</span>
      </p>
    </div>
  );
}
