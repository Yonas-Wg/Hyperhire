"use client";
import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Menu, MenuItem, IconButton } from '@mui/material';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
 

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); 
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  const handleSelect = (value: string) => {
    console.log(value); 
    handleClose(); 
  };
  

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };


  

  return (
    <header  className="header"
    style={{
      position: 'absolute',
      width: '1920px',
      height: '60px',
      left: '300px',
      top: '30px',
      display: 'flex',
      alignItems: 'center',
     // backgroundColor: '#282c34',
     padding: '0 20px'
    }}>

      <div className="one relative w-full h-full  overflow-hidden cursor-pointer">
        <svg
          width="31.28"
          height="21"
          viewBox="0 0 32 21"
          fill="none"
          className="absolute left-0 top-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6263 17.1851C14.6314 18.2097 13.6549 19.2572 12.5911 20.2109C11.332 21.3384 9.32614 21.2424 8.11069 20.0325C5.72803 17.6608 3.35226 15.28 0.990284 12.8877C-0.358434 11.5223 -0.314779 9.41588 1.03853 8.06193C3.39822 5.70394 5.74641 3.33453 8.1038 0.976543C9.3721 -0.290501 11.4354 -0.333956 12.7267 0.901069C13.7123 1.84563 14.6567 2.83137 15.6194 3.7988C15.3896 4.13958 15.0749 4.40259 14.7899 4.68848C13.7078 5.78399 12.6141 6.86807 11.5181 7.94986C11.1229 8.34095 10.7874 8.76864 10.5967 9.29238C10.1947 10.3948 10.3003 11.4605 10.9827 12.4142C11.4859 13.1187 12.1614 13.6813 12.7634 14.3034C13.7032 15.2777 14.6705 16.2245 15.6263 17.1828V17.1851Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6584 3.80099C16.2719 3.29555 16.7981 2.70091 17.3587 2.14286C17.8159 1.68544 18.264 1.21888 18.7488 0.791191C19.4932 0.132511 20.4008 -0.0733264 21.3566 0.0799082C22.0505 0.189688 22.6824 0.487009 23.2016 1.01533C24.9249 2.76723 26.6734 4.49169 28.4035 6.23445C29.141 6.97775 29.9383 7.67074 30.584 8.49638C31.4938 9.65821 31.5168 11.2615 30.6184 12.453C30.0256 13.2421 29.272 13.8916 28.5781 14.5892C27.1099 16.0643 25.6394 17.5372 24.1597 19.0009C23.6543 19.4995 23.2039 20.0622 22.5996 20.4555C21.9586 20.8741 21.244 21.0227 20.4835 20.945C19.8218 20.8786 19.2382 20.6065 18.7166 20.2177C18.4501 20.0187 18.2433 19.7443 18.0066 19.5041C17.253 18.7379 16.4994 17.9718 15.7458 17.2079C15.7274 17.1896 15.6952 17.1873 15.6699 17.1781C15.6975 17.1438 15.7251 17.105 15.7549 17.0729C17.1588 15.6572 18.5673 14.2438 19.9711 12.8281C21.2256 11.5634 21.221 9.40892 19.9619 8.14874C18.8361 7.02121 17.7079 5.89825 16.5844 4.77072C16.2696 4.4551 15.9686 4.12576 15.6607 3.80099H15.6584Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6584 3.80113C15.9663 4.12361 16.2673 4.45523 16.5821 4.77085C17.7056 5.90067 18.8361 7.02363 19.9596 8.14887C21.2187 9.40906 21.2233 11.5635 19.9688 12.8282C18.565 14.2439 17.1588 15.6597 15.7526 17.0731C15.7205 17.1051 15.6952 17.1417 15.6676 17.1783C15.6538 17.1829 15.6378 17.1851 15.624 17.1829C14.6681 16.2246 13.7008 15.2777 12.7611 14.3034C12.1591 13.6813 11.4836 13.1164 10.9804 12.4143C10.298 11.4606 10.1923 10.3971 10.5944 9.29241C10.7851 8.76867 11.1206 8.34099 11.5158 7.9499C12.6118 6.86811 13.7054 5.78403 14.7876 4.68852C15.0725 4.40034 15.3873 4.13733 15.6171 3.79884C15.6309 3.79427 15.6424 3.79427 15.6561 3.79884L15.6584 3.80113Z"
            fill="white"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      <h1 className="h1" style={{
        marginLeft: '10px',
        position: 'absolute',
        left: '3.03%',
        top: '-9.49%',
        fontSize: '24px',
        color: '#fff',
        cursor:'pointer',
      }}>
        hyperhire
      </h1>
      <div >

  <button 
    className=" toggle md:hidden p-2 text-white  rounded flex items-center" 
    onClick={toggleMenu}
  >
    <span className="icon">☰</span>
  </button>

  {/* Header Content */}
  <div className={`flex flex-col md:flex-row ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
    <h1 className="text-gray-600 text-base leading-6 font-black">Header Title</h1>
    {/* Other content */}
  </div>
</div>

      {/* 채용 Position */}
      <div className='header2' style={{
        marginLeft: '10px',
        position: 'absolute',
        left: '28.03%',
        top: '-9.49%',
        color: '#fff',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '16px',
        lineHeight: '150%',
        textAlign: 'center',
        padding: '10px 15px' 
      }}>
        채용 
      </div>

      {/* Dropdown Button */}
      <IconButton className='header3' 
        onClick={handleClick}
        style={{ color: '#fff', left: '31.0%',
            top: '-9.49%', position: 'absolute',}}
      >
        <ArrowDropDownIcon />
      </IconButton>

      <div 
      className='header4' 
      style={{
        marginLeft: '10px',
        position: 'absolute',
        left: '38.03%',
        top: '-9.49%',
        color: '#fff',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '16px',
        lineHeight: '150%',
        textAlign: 'center',
        padding: '10px 15px' 
      }}>
       해외 개발자 활용 서비스
      </div>
      <div 
      className='header5' 
      style={{
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '120px',
    height: '39px',
    background: '#FFFFFF', 
    borderRadius: '8px', 
    color: '#4A77FF',  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '16px',
    lineHeight: '150%',
    textAlign: 'center',
    position: 'absolute',
    left: '65.76%',
    top: '-7.67%',
    padding: '15',
    cursor:'pointer',
    flex: 'none',
    order: 0,
    flexGrow: 0,
}}>
    문의하기
</div>



     

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSelect('Option 1')}>채용</MenuItem>
        <MenuItem onClick={() => handleSelect('Option 2')}>해외 개발자 원격 채용</MenuItem>
        <MenuItem onClick={() => handleSelect('Option 3')}>외국인 원격 채용 (비개발 직군)</MenuItem>
        <MenuItem onClick={() => handleSelect('Option 4')}>한국어 가능 외국인 채용</MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
