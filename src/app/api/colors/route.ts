
// src/app/api/colors/route.ts
// This is a Next.js Route Handler (API Route) for '/api/colors'.
// It now simulates a 10-second delay and then responds with a list of 5 to 10 random colors.

import { NextResponse } from 'next/server';

/**
 * Handles GET requests to /api/colors.
 * This function simulates fetching a list of colors with a delay.
 *
 * @returns {NextResponse} A JSON response containing an array of colors.
 */
export async function GET() {
  console.log('API /api/colors called. Simulating 10-second delay...');
  // Simulate a 10-second delay to demonstrate loading states
  await new Promise(resolve => setTimeout(resolve, 10000));

  // Define a larger pool of colors
  const allPossibleColors = [
    "red", "pink", "yellow", "blue", "green", "purple", "orange", "cyan", "magenta", "lime",
    "teal", "brown", "gray", "indigo", "violet", "gold", "silver", "maroon", "navy", "olive"
  ];

  // Generate a random number of colors between 5 and 10
  const numberOfColorsToReturn = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const colors: string[] = [];

  // Randomly pick colors from the pool without duplicates (for variety)
  const shuffledColors = allPossibleColors.sort(() => 0.5 - Math.random());
  for (let i = 0; i < numberOfColorsToReturn; i++) {
    colors.push(shuffledColors[i]);
  }

  console.log('API /api/colors responding with:', colors.length, 'colors:', colors);
  // Return a JSON response with the list of colors and a 200 OK status
  return NextResponse.json(colors, { status: 200 });
}