import React from 'react';
import Header from '@/components/molecules/Header';
import Main from '@/components/templates/MainTemplate';
import UserCard from '@/components/molecules/Card';
import Footer from '@/components/organisms/Footer';

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

  return (
    <>
    <div className="flex flex-col min-h-screen" style={{
      background: `linear-gradient(151.17deg, rgba(38, 194, 185, 0.8) 8.69%, rgba(40, 139, 231, 0.8) 86.06%), url('/assets/hyperhire.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      maxWidth: '2220px',
      margin: '0 auto', 
    }}>
      <Header />
      <Main />
      <UserCard />
     
    </div>
     <Footer />
     </>
  );
};

export default HomePage;
