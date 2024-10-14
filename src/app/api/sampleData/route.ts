// src/app/api/sampleData/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const sampleData = {
    title: "Sample Title",
    description: "Sample Description",
  };
  return NextResponse.json(sampleData);
}
