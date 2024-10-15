'use client';

import React, { useState } from 'react';
import { Box, Typography, Avatar , Tooltip} from '@mui/material';
import { KeyboardArrowRight as KeyboardArrowRightIcon, KeyboardArrowLeft as KeyboardArrowLeftIcon } from '@mui/icons-material';

const UserCard: React.FC = () => {
  const userCards = [
    {
      avatar: '/assets/card1.png',
      name: ' Abhishek Gupta',
      role: '마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리'],
    },
    {
      avatar: '/assets/card1.png',
      name: 'Abhishek Gupta',
      role: '  마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      avatar: '/assets/card1.png',
      name: 'Abhishek Gupta',
      role: ' 마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '블로그 글 작성'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % userCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + userCards.length) % userCards.length);
  };

  const renderCard = (user: any, isMiddle: boolean) => {
    return (
<>
<Tooltip className='section8'
        title="This is the user's information"
        arrow
        enterDelay={500} 
        TransitionProps={{ timeout: 500 }} 
        sx={{ position: 'relative' }}
      >
        <div className="absolute w-[160px] h-[43px] left-[860.76px] top-[-25px] flex flex-row items-center p-2 gap-2 bg-[#fff] rounded-lg">
          <div className="relative">
            <svg
              className="w-[30px] h-[30px]"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13.7607" cy="13.5" r="13" fill="#BBF3D2" />
              <path
                d="M17.9441 9.60332C17.3592 9.60332 16.9024 9.13165 16.5905 8.63687C16.5455 8.56539 16.496 8.49643 16.442 8.42998C16.1812 8.10063 15.8279 7.85361 15.3819 7.68893C14.9358 7.52426 14.4281 7.44192 13.8586 7.44192C13.2616 7.44192 12.7367 7.53455 12.2838 7.71981C11.831 7.90507 11.481 8.16581 11.234 8.50203C10.987 8.83139 10.8635 9.20877 10.8635 9.63419C10.8635 10.2655 11.1208 10.7526 11.6354 11.0957C12.1569 11.4319 12.8053 11.6927 13.5807 11.8779L15.0113 12.2587C16.2533 12.5675 17.2791 13.041 18.0887 13.6791C18.9053 14.3172 19.3135 15.247 19.3135 16.4683C19.3135 17.3123 19.094 18.0671 18.6548 18.7326C18.2225 19.3914 17.5878 19.906 16.7507 20.2765C15.9205 20.647 14.9324 20.8323 13.7865 20.8323C12.675 20.8323 11.7109 20.6539 10.8944 20.2971C10.0847 19.9403 9.44658 19.436 8.98 18.7841C8.7372 18.4398 8.55086 18.0611 8.42099 17.648C8.22397 17.0212 8.76291 16.458 9.41988 16.458C10.0143 16.458 10.4742 16.9427 10.7681 17.4593C10.8313 17.5704 10.9042 17.6757 10.987 17.7755C11.2889 18.1323 11.68 18.3999 12.1603 18.5783C12.6475 18.7567 13.1861 18.8424 13.7762 18.8356C14.4075 18.8356 14.9736 18.7361 15.4745 18.5371C15.9754 18.3381 16.3665 18.0568 16.6478 17.6931C16.9291 17.3295 17.0698 16.9075 17.0698 16.4272C17.0698 16.0155 16.9532 15.6655 16.7199 15.3773C16.4866 15.0891 16.1675 14.8559 15.7627 14.6775C15.3578 14.4991 14.8569 14.3309 14.26 14.1731L12.4897 13.71C11.2409 13.3669 10.2803 12.8763 9.60783 12.2382C8.94226 11.5932 8.6129 10.7664 8.61976 9.7577C8.61976 8.91373 8.8462 8.16581 9.29906 7.51396C9.75879 6.86211 10.3901 6.36122 11.1929 6.01128C12.0025 5.65448 12.9083 5.47607 13.91 5.47607C14.905 5.47607 15.7935 5.65448 16.5758 6.01128C17.3648 6.36122 17.979 6.85182 18.4181 7.48309C18.6365 7.78891 18.8031 8.11449 18.9179 8.45983C19.1195 9.06655 18.5834 9.60332 17.9441 9.60332Z"
                fill="#00C696"
              />
              <path d="M13.9512 4.5L13.9512 6.3291" stroke="#00C696" strokeWidth="2" strokeLinecap="round" />
              <path d="M13.9512 19.918L13.9512 21.7471" stroke="#00C696" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          
          {/* Text Element */}
          <div className="flex section81 flex-row items-center">
            <span className="text-[17px] text-gray-800 " style={{color: '#00C696', fontWeight:'bold'}}>월 100만원</span>
          </div>
          
          {/* Polygon */}
          <div
            className="absolute w-[26px] h-[76px] left-[75px] top-[42px]  rounded-[0.5px] transform rotate-380 cursor-pointer"
          >
            <svg
              className="w-[14px] h-[12px]"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.43301 11.25C7.24056 11.5833 6.75944 11.5833 6.56699 11.25L0.504808 0.75C0.312358 0.416667 0.55292 -3.0933e-07 0.937821 -2.7568e-07L13.0622 7.84264e-07C13.4471 8.17914e-07 13.6876 0.416668 13.4952 0.750001L7.43301 11.25Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </Tooltip>

      <Box
      className='section9'
        key={user.name}
        sx={{
          width: isMiddle ? '300px' : '250px',
          height: isMiddle ? '400px' : '350px',
          zIndex: isMiddle ? '1' : '0',
          margin: '0 -65px', 
          paddingLeft:'20px',
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

        {/* Skills */}
        {user.skills.map((skill: string, index: number) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '3.6px 10.8px',
              gap: '9.02px',
              width: '153.65px',
              height: '29.22px',
              border: '0.9px solid #82BFD5',
              borderRadius: '5.41px',
              mt: 1,
              color: 'black',
              ml: 5,
              mr: 5,
            }}
          >
            <Typography variant="body2">{skill}</Typography>
          </Box>
        ))}
      </Box>
      </>
    );
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', marginLeft: '400px', marginTop:'180px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Navigation Arrows */}
      <Box  className='arrow' sx={{ position: 'absolute', left: '550px', cursor: 'pointer' }} onClick={handlePrev}>
        <KeyboardArrowLeftIcon sx={{ fontSize: 60, color: '#fff' }} />
      </Box>
      <Box className='arrow2' sx={{ position: 'absolute', right: '550px', cursor: 'pointer' }} onClick={handleNext}>
        <KeyboardArrowRightIcon sx={{ fontSize: 60, color: '#fff' }} />
      </Box>

      {/* User Cards */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {renderCard(userCards[(currentIndex - 1 + userCards.length) % userCards.length], false)} 
        {renderCard(userCards[currentIndex], true)} 
        {renderCard(userCards[(currentIndex + 1) % userCards.length], false)} 
      </Box>
    </div>
    
  );
};

export default UserCard;
