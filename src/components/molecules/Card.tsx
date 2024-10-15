'use client';

import React, { useState } from 'react';
import { Box, Typography, Avatar, Tooltip } from '@mui/material';
import { KeyboardArrowRight as KeyboardArrowRightIcon, KeyboardArrowLeft as KeyboardArrowLeftIcon } from '@mui/icons-material';

// Define the User interface
interface User {
  avatar: string;
  name: string;
  role: string;
  skills: string[];
}

const UserCard: React.FC = () => {
  const userCards: User[] = [ // Specify the array type
    {
      avatar: '/assets/card1.png',
      name: 'Abhishek Gupta',
      role: '마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리'],
    },
    {
      avatar: '/assets/card2.png',
      name: 'Rajesh Kumar',
      role: '개발자 · 3y+',
      skills: ['JavaScript', 'React', 'Node.js', 'API 개발'],
    },
    {
      avatar: '/assets/card3.png',
      name: 'Meena Sharma',
      role: '디자이너 · 4y+',
      skills: ['UI/UX 디자인', '포토샵', '일러스트레이터'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % userCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + userCards.length) % userCards.length);
  };

  // Update renderCard to use User type
  const renderCard = (user: User, isMiddle: boolean) => (
    <>
      <Tooltip
        title="This is the user's information"
        arrow
        enterDelay={500}
        TransitionProps={{ timeout: 500 }}
        sx={{ position: 'relative' }}
      >
        <Box
          className="tooltip-container"
          sx={{
            position: 'absolute',
            width: '160px',
            height: '43px',
            left: '50%', // Center horizontally
            transform: 'translateX(-50%)',
            top: '-25px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '2px',
            boxShadow: 1,
          }}
        >
          <Typography sx={{ color: '#00C696', fontWeight: 'bold' }}>월 100만원</Typography>
        </Box>
      </Tooltip>

      <Box
        key={user.name}
        sx={{
          width: isMiddle ? '300px' : '250px',
          height: isMiddle ? '400px' : '350px',
          zIndex: isMiddle ? '1' : '0',
          margin: '0 -65px',
          paddingLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: 2,
          transition: 'all 0.3s ease',
        }}
      >
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{
            width: isMiddle ? '120px' : '80px',
            height: isMiddle ? '120px' : '80px',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            fontSize: isMiddle ? '24px' : '18px',
            lineHeight: '32px',
            textAlign: 'center',
            color: 'black',
            mt: 2,
          }}
        >
          {user.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 900,
            fontSize: isMiddle ? '16px' : '12px',
            lineHeight: '22px',
            textAlign: 'center',
            color: '#4A77FF',
          }}
        >
          {user.role}
        </Typography>

        {user.skills.map((skill: string, index: number) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '3.6px 10.8px',
              gap: '9.02px',
              border: '0.9px solid #82BFD5',
              borderRadius: '5.41px',
              mt: 1,
              color: 'black',
              mx: 5, // margin left and right
            }}
          >
            <Typography variant="body2">{skill}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Navigation Arrows */}
      <Box sx={{ position: 'absolute', left: '30px', cursor: 'pointer' }} onClick={handlePrev}>
        <KeyboardArrowLeftIcon sx={{ fontSize: 60, color: '#000' }} />
      </Box>
      <Box sx={{ position: 'absolute', right: '30px', cursor: 'pointer' }} onClick={handleNext}>
        <KeyboardArrowRightIcon sx={{ fontSize: 60, color: '#000' }} />
      </Box>

      {/* Render Current User Card */}
      {renderCard(userCards[currentIndex], currentIndex === 1)}
    </div>
  );
};

export default UserCard;
