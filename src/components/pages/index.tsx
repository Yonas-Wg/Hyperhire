// src/pages/index.tsx
import React from 'react';
import Header from '@/components/molecules/Header';

const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/sampleData');
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data ? [data] : []; 
  } catch (error) {
    console.error("Fetch error: ", error);
    return [];
  }
};

const HomePage = async () => {
  const data = await fetchData();

  if (!data.length) {
    return <div>No data found.</div>; 
  }

  return (
    <div>
      <Header />
      <div>
        <h1>{data[0].title}</h1>
        <p>{data[0].description}</p>
        <h1 className="text-animation">{data[0].title}</h1>
      </div>
    </div>
  );
};

export default HomePage;
