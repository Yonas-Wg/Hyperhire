import React from 'react';
import Header from '@/components/molecules/Header';
import Main from '@/components/templates/MainTemplate';
import UserCard from '@/components/molecules/Card';
import Footer from '@/components/organisms/Footer';


const HomePage = async () => {


  return (
    <>
      <div
        className="flex flex-col home-background"
        style={{
          width: '100vw', 
          height: '120vh', 
          background: `linear-gradient(151.17deg, rgba(38, 194, 185, 0.8) 8.69%, rgba(40, 139, 231, 0.8) 86.06%), url('/assets/hyperhire.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: '0',
          overflowX: 'hidden', 
          overflowY: 'auto', 
          boxSizing: 'border-box',
        }}
      >
        <Header />
        <Main />
        <UserCard />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
