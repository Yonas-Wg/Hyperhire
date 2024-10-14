import React, { useEffect, useState } from 'react';

const AnimatedDiv = () => {
  const [offset, setOffset] = useState(0);
  const width = 332;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev - width >= -width ? prev - width : 0));
    }, 5000); 

    return () => clearInterval(interval);
  }, [width]);

  return (
    <div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '16px',
        gap: '24px',
        width: '332px',
        height: '88px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '12px',
        position: 'absolute',
        left: '300px',
        top: '780px',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(${offset}px)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          padding: '0px',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '12px',
            gap: '10px',
            width: '56px',
            height: '56px',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '8px',
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 4.11621H5C3.3457 4.11621 2 5.46191 2 7.11621V23.1162C2 24.7705 3.3457 26.1162 5 26.1162H9V26.8838C9 27.436 9.44775 27.8838 10 27.8838H22C22.5522 27.8838 23 27.436 23 26.8838V26.1162H27C28.6543 26.1162 30 24.7705 30 23.1162V7.11621C30 5.46191 28.6543 4.11621 27 4.11621ZM28 23.1162C28 23.6675 27.5513 24.1162 27 24.1162H23V23.3481C23 22.7959 22.5522 22.3481 22 22.3481H10C9.44775 22.3481 9 22.7959 9 23.3481V24.1162H5C4.44873 24.1162 4 23.6675 4 23.1162V7.11621C4 6.56494 4.44873 6.11621 5 6.11621H27C27.5513 6.11621 28 6.56494 28 7.11621V23.1162ZM11 25.8838V24.3481H21V25.8838H11Z"
              fill="white"
            />
            <path
              d="M15.3794 7.29248C14.8271 7.29248 14.3794 7.74023 14.3794 8.29248V8.62006C11.3364 9.10236 9 11.7365 9 14.9131C9 18.4307 11.8618 21.2925 15.3794 21.2925C18.556 21.2925 21.1901 18.9561 21.6724 15.9131H22C22.5522 15.9131 23 15.4653 23 14.9131C23 10.7109 19.5815 7.29248 15.3794 7.29248ZM15.3794 19.2925C12.9644 19.2925 11 17.3281 11 14.9131C11 12.8434 12.4468 11.1147 14.3794 10.6597V14.9131C14.3794 15.4653 14.8271 15.9131 15.3794 15.9131H19.6328C19.1778 17.8457 17.449 19.2925 15.3794 19.2925ZM16.3794 13.9131V9.38135C18.6787 9.79639 20.4961 11.6138 20.9111 13.9131H16.3794Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          style={{
            width: '216px',
            height: '36px',
            paddingTop: '10px',
            paddingLeft: '15px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize: '24px',
            lineHeight: '150%',
            color: '#FFFFFF',
          }}
        >
          해외 마케팅
        </div>
      </div>
    </div>


<div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '16px',
        gap: '24px',
        width: '332px',
        height: '88px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '12px',
        position: 'absolute',
        left: '660px',
        top: '780px',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(${offset}px)`, 
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          padding: '0px',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '12px',
            gap: '10px',
            width: '56px',
            height: '56px',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '8px',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 0H5C2.24316 0 0 2.24316 0 5V23C0 25.7568 2.24316 28 5 28H23C25.7568 28 28 25.7568 28 23V5C28 2.24316 25.7568 0 23 0ZM23 26H5C3.3457 26 2 24.6543 2 23V15.5H8.79883C10.5283 15.5 12.1396 16.2744 13.2188 17.625C14.6807 19.4521 16.8613 20.5 19.2012 20.5H26V23C26 24.6543 24.6543 26 23 26ZM5 2H23C24.6543 2 26 3.3457 26 5V18.5H19.2012C17.4717 18.5 15.8604 17.7256 14.7812 16.375C13.3193 14.5479 11.1387 13.5 8.79883 13.5H2V5C2 3.3457 3.3457 2 5 2Z" fill="white"/>
</svg>

        </div>

        <div
          style={{
            width: '216px',
            height: '36px',
            paddingTop: '10px',
            paddingLeft: '15px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize: '24px',
            lineHeight: '150%',
            color: '#FFFFFF',
          }}
        >
      퍼블리셔
        </div>
      </div>
    </div>



<div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '16px',
        gap: '24px',
        width: '332px',
        height: '88px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '12px',
        position: 'absolute',
        left: '1020px',
        top: '780px',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(${offset}px)`, 
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          padding: '0px',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '12px',
            gap: '10px',
            width: '56px',
            height: '56px',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '8px',
          }}
        >
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_8380)">
<path d="M16.0006 32.132C15.7859 32.132 15.5725 32.0768 15.3801 31.9657L2.48383 24.5202C2.09977 24.2987 1.86337 23.8885 1.86337 23.4455V8.55447C1.86337 8.11146 2.09977 7.70133 2.48383 7.47983L15.3801 0.0342926C15.7642 -0.187212 16.237 -0.187212 16.621 0.0342926L29.5161 7.47983C29.9002 7.70133 30.1366 8.11146 30.1366 8.55447V23.4455C30.1366 23.8885 29.9002 24.2987 29.5161 24.5202L16.621 31.9657C16.4287 32.0768 16.2153 32.132 16.0006 32.132ZM4.34522 22.7289L16.0006 29.4578L27.6547 22.7289V9.2711L16.0006 2.5422L4.34522 9.2711V22.7289Z" fill="white"/>
<path d="M16.0006 32.132C15.3156 32.132 14.7597 31.576 14.7597 30.891V16C14.7597 15.315 15.3156 14.759 16.0006 14.759C16.6856 14.759 17.2416 15.315 17.2416 16V30.891C17.2416 31.576 16.6856 32.132 16.0006 32.132Z" fill="white"/>
<path d="M15.9994 17.2408C15.7891 17.2408 15.5756 17.1875 15.3802 17.0739L2.48391 9.6284C1.89013 9.28653 1.68724 8.5277 2.02911 7.93392C2.37223 7.34014 3.12857 7.136 3.72421 7.47974L16.6205 14.9253C17.2143 15.2678 17.4172 16.0266 17.0747 16.6204C16.8451 17.0187 16.4282 17.2408 15.9994 17.2408Z" fill="white"/>
<path d="M16.0019 17.2408C15.5731 17.2408 15.1562 17.0181 14.926 16.6204C14.5835 16.0266 14.7864 15.2678 15.3802 14.9253L28.2752 7.47974C28.8684 7.136 29.6272 7.34014 29.9703 7.93392C30.3128 8.5277 30.1099 9.28652 29.5161 9.62902L16.6211 17.0746C16.4263 17.1875 16.2122 17.2408 16.0019 17.2408Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2_8380">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

        </div>

        <div
          style={{
            width: '216px',
            height: '36px',
            paddingTop: '10px',
            paddingLeft: '15px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize: '24px',
            lineHeight: '150%',
            color: '#FFFFFF',
          }}
        >
     캐드원(제도사)
        </div>
      </div>
    </div>





<div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '16px',
        gap: '24px',
        width: '332px',
        height: '88px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '12px',
        position: 'absolute',
        left: '1380px',
        top: '780px',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(${offset}px)`, 
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          padding: '0px',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '12px',
            gap: '10px',
            width: '56px',
            height: '56px',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '8px',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.9639 15H27.7036C27.4778 12.34 26.3549 9.7428 24.3242 7.71191C22.2941 5.68182 19.6985 4.55859 17.04 4.33197V3C17.04 2.44775 16.5923 2 16.04 2C15.4878 2 15.04 2.44775 15.04 3V4.3316C12.379 4.5567 9.78052 5.67993 7.74854 7.71191C5.71747 9.7428 4.5943 12.34 4.36847 15H3.03613C2.48389 15 2.03613 15.4478 2.03613 16C2.03613 16.5522 2.48389 17 3.03613 17H4.36847C4.5943 19.66 5.71747 22.2572 7.74854 24.2881C9.78058 26.3201 12.379 27.4433 15.04 27.6683V29C15.04 29.5522 15.4878 30 16.04 30C16.5923 30 17.04 29.5522 17.04 29V27.668C19.6988 27.4413 22.2941 26.3182 24.3242 24.2881C26.3549 22.2572 27.4778 19.66 27.7036 17H28.9639C29.5166 17 29.9639 16.5522 29.9639 16C29.9639 15.4478 29.5166 15 28.9639 15ZM22.9102 22.874C21.27 24.5138 19.1848 25.4409 17.04 25.6618V24.4424C17.04 23.8901 16.5923 23.4424 16.04 23.4424C15.4878 23.4424 15.04 23.8901 15.04 24.4424V25.663C12.8926 25.4436 10.8044 24.5159 9.1626 22.874C7.52179 21.233 6.59436 19.1462 6.37427 17H7.59424C8.14648 17 8.59424 16.5522 8.59424 16C8.59424 15.4478 8.14648 15 7.59424 15H6.37427C6.59436 12.8538 7.52179 10.767 9.1626 9.12598C10.8047 7.48425 12.8925 6.5564 15.04 6.33685V7.55762C15.04 8.10986 15.4878 8.55762 16.04 8.55762C16.5923 8.55762 17.04 8.10986 17.04 7.55762V6.33789C19.1848 6.55872 21.2707 7.48608 22.9102 9.12598C24.551 10.767 25.4784 12.8538 25.6985 15H24.4062C23.8535 15 23.4062 15.4478 23.4062 16C23.4062 16.5522 23.8535 17 24.4062 17H25.6985C25.4784 19.1462 24.551 21.233 22.9102 22.874Z" fill="white"/>
<path d="M21.207 12.9492L18.6572 12.5625L17.5088 10.1309C17.2275 9.53516 16.6494 9.16504 16 9.16504C15.3506 9.16504 14.7729 9.53516 14.4917 10.1304L13.3433 12.5625L10.793 12.9492C10.1704 13.0439 9.65771 13.4795 9.45556 14.0864C9.24902 14.7061 9.40234 15.3774 9.85644 15.8398L11.727 17.7456L11.2837 20.4473C11.1763 21.104 11.4429 21.748 11.9805 22.1279C12.2671 22.3306 12.5996 22.4336 12.9336 22.4336C13.2056 22.4336 13.479 22.3652 13.7295 22.2275L16 20.9805L18.2705 22.2275C18.8301 22.5352 19.499 22.4966 20.0185 22.1284C20.5566 21.749 20.8232 21.105 20.7158 20.4468L20.2725 17.7451L22.1426 15.8403C22.5967 15.3784 22.751 14.7065 22.5449 14.0869C22.3428 13.48 21.8301 13.0439 21.207 12.9492ZM18.2773 17.9336L18.6406 20.1489L16.7954 19.1353C16.2974 18.8618 15.7026 18.8618 15.2046 19.1353L13.3594 20.1489L13.7231 17.9336C13.812 17.3921 13.6377 16.8364 13.2559 16.4478L11.6758 14.8384L13.8213 14.5127C14.3696 14.4287 14.8403 14.0747 15.081 13.5664L16 11.6201L16.9199 13.5684C17.1611 14.0757 17.6309 14.4287 18.1797 14.5132L20.3232 14.8384L18.7422 16.4487C18.3633 16.8364 18.1885 17.3911 18.2773 17.9336Z" fill="white"/>
</svg>

        </div>

        <div
          style={{
            width: '216px',
            height: '36px',
            paddingTop: '10px',
            paddingLeft: '15px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize: '24px',
            lineHeight: '150%',
            color: '#FFFFFF',
          }}
        >
       해외 세일즈
        </div>
      </div>
    </div>



<div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '16px',
        gap: '24px',
        width: '332px',
        height: '88px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '12px',
        position: 'absolute',
        left: '1740px',
        top: '780px',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(${offset}px)`, 
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          padding: '0px',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '12px',
            gap: '10px',
            width: '56px',
            height: '56px',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '8px',
          }}
        >
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.1689 19.9854C19.9326 19.5898 18.5811 20.2119 18.084 21.3965C18.0547 21.4648 18.0273 21.5342 18.001 21.6035C16.4346 20.9277 15.0098 19.9854 13.7568 18.7949C13.7549 18.7939 13.7539 18.792 13.752 18.791C13.5654 18.6152 13.3848 18.4346 13.209 18.248C13.208 18.2461 13.2061 18.2451 13.2051 18.2432C12.0146 16.9902 11.0723 15.5654 10.3965 13.999C10.4658 13.9727 10.5352 13.9453 10.6045 13.916C11.7891 13.418 12.4092 12.0635 12.0146 10.8301C9.18359 2 9.10938 2 8.19922 2C4.78125 2 2 4.78125 2 8.19922C2 20.2197 11.7803 30 23.8008 30C27.2188 30 30 27.2188 30 23.8008C30 22.8906 30 22.8164 21.1689 19.9854ZM23.8008 28C12.8828 28 4 19.1172 4 8.19922C4 6.08496 5.57129 4.33008 7.60645 4.04199C7.97266 4.96875 8.76758 7.25391 10.1104 11.4404C10.1914 11.6943 10.0684 11.9717 9.83008 12.0723C9.53027 12.1973 9.21777 12.2881 8.89941 12.3408C8.6084 12.3887 8.35352 12.5625 8.20312 12.8164C8.05176 13.0693 8.02148 13.377 8.11816 13.6553C8.89453 15.8906 10.1182 17.8975 11.7549 19.6201C11.957 19.835 12.165 20.043 12.3799 20.2451C14.1025 21.8818 16.1094 23.1055 18.3447 23.8818C18.623 23.9795 18.9307 23.9473 19.1836 23.7969C19.4375 23.6465 19.6113 23.3916 19.6592 23.1006C19.7119 22.7822 19.8027 22.4697 19.9277 22.1709C20.0283 21.9316 20.3047 21.8105 20.5586 21.8896C24.7451 23.2324 27.0312 24.0273 27.958 24.3936C27.6699 26.4287 25.915 28 23.8008 28Z" fill="white"/>
<path d="M17.7354 7C21.7412 7 25 10.2588 25 14.2646C25 14.8174 25.4473 15.2646 26 15.2646C26.5527 15.2646 27 14.8174 27 14.2646C27 9.15625 22.8438 5 17.7354 5C17.1826 5 16.7354 5.44727 16.7354 6C16.7354 6.55273 17.1826 7 17.7354 7Z" fill="white"/>
<path d="M16 11.4902C18.4863 11.4902 20.5098 13.5137 20.5098 16C20.5098 16.5527 20.957 17 21.5098 17C22.0625 17 22.5098 16.5527 22.5098 16C22.5098 12.4102 19.5898 9.49023 16 9.49023C15.4473 9.49023 15 9.9375 15 10.4902C15 11.043 15.4473 11.4902 16 11.4902Z" fill="white"/>
</svg>

        </div>

        <div
          style={{
            width: '216px',
            height: '36px',
            paddingTop: '10px',
            paddingLeft: '15px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize: '24px',
            lineHeight: '150%',
            color: '#FFFFFF',
          }}
        >
          해외 CS
        </div>
      </div>
    </div>
    </div>
  );
};

export default AnimatedDiv;
