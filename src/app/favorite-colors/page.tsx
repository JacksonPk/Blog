// src/app/favorite-color/page.tsx
// This is an async Server Component that fetches all colors once.
// It then passes the promise of the data to a Client Component for rendering with Suspense.

import React, { Suspense } from 'react'; // Import Suspense
import ColorListContainer from './ColorListContainer'; // Import the new Client Component
import ItemLoading from './item-loading'; // Import the individual loading component for fallback

export default async function FavoriteColorPage() {
  // Construct the base URL dynamically for the API call.
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const apiUrl = new URL('/api/colors', baseUrl).toString();

  console.log('Page.tsx: Initiating single fetch for colors from API:', apiUrl);

  // Perform the single fetch call.
  // We get a Promise back from response.json().
  // DO NOT await it here if you want the Suspense boundary to work.
  const colorsPromise: Promise<string[]> = fetch(apiUrl, { cache: 'no-store' }).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });
  // .catch((error) => {
  //   console.error('Error fetching colors:', error);
  //   // Return an empty array or handle error state appropriately
  //   return [];
  // });
  // Remove .catch() here if you want error.tsx to catch fetch errors
  // If you want to log without preventing error.tsx, you can do:
  // .catch(err => { console.error("Fetch error caught in page.tsx:", err); throw err; });

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-inter'>
      <h1 className='text-4xl font-bold text-gray-800 mb-12 rounded-lg p-4 bg-white shadow-lg'>
        My Favorite Colors
      </h1>

      {/* Wrap the ColorListContainer in a Suspense boundary.
          The fallback will show 3 individual loading components. */}
      <Suspense
        fallback={
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl'>
            <ItemLoading />
            <ItemLoading />
            <ItemLoading />
          </div>
        }
      >
        {/* Pass the promise directly to the Client Component */}
        <ColorListContainer colorsPromise={colorsPromise} />
      </Suspense>
    </div>
  );
}
