
// src/app/api/fruit/route.ts
// This is a Next.js Route Handler (API Route)
// It simulates a 10-second delay before responding with "apple".

import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate a 10-second delay
  await new Promise(resolve => setTimeout(resolve, 10000));

  // After the delay, respond with "apple"
  return new NextResponse("apple", {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}