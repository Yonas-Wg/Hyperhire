'use client';
import React, { useEffect, useState } from 'react';
import AnimatedDiv from '../organisms/Form';

const Main = () => {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    useEffect(() => {
        setIsTitleVisible(true);

        const timer = setTimeout(() => {
            setIsBoxVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768); 
    };

    handleResize();

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

    return (
        <>
            {/* Main Text Section */}
            <div className='section' style={{
                position: 'absolute',
                width: '681px',
                height: '124px',
                left: isMobileScreen ? '10px' : '300px',
                top: '264px',
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: '48px',
                lineHeight: '130%', 
                color: '#FFFFFF',
                textAlign: 'left',
                opacity: isTitleVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in', 
            }}>
                최고의 실력을 가진 <br />
                외국인 인재를 찾고 계신가요?
            </div>

            {/* Fade-In Box Section */}
            <div 
            className='section1' 
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '0px',
                position: 'absolute',
                width: '170px',
                height: '58px',
                left: '300px',
                top: '160px',
                background: '#FFFFFF', 
                borderRadius: '8px',
                opacity: isBoxVisible ? 1 : 0, 
                transform: isBoxVisible ? 'translateY(0)' : 'translateY(20px)', 
                transition: 'opacity 0.5s ease-in, transform 0.5s ease-in',
            }}>
                <div style={{
                    width: '156px',
                    height: '27px',
                    marginTop: '12px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 900,
                    fontSize: '18px',
                    lineHeight: '150%',
                    color: '#40E2E8',
                    textAlign: 'center', 
                }}>
                    풀타임, 파트타임
                </div>

                {/* Polygon 1 */}
                <div style={{
                    width: '32px',
                    height: '34px',
                    background: '#FFFFFF',
                    borderRadius: '0.5px',
                    transform: 'rotate(-130deg)',
                    marginTop: '5px',
                }} />
            </div>

            <div 
            className='section2' 
            style={{
    width: '456px',
    height: '68px',
    marginTop: '12px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '24px',
    lineHeight: '34px',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'left', 
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    left: '300px',
    top: '404px',
    opacity: isTitleVisible ? 1 : 0,
    transform: isBoxVisible ? 'translateY(0)' : 'translateY(20px)', 
    transition: 'opacity 0.5s ease-in, transform 0.5s ease-in',
}}>
    법률 및 인사관리 부담없이 <br />
    1주일 이내에 원격으로 채용해보세요.
</div>

              
            <div 
              className='section3' 
              style={{
    width: '456px',
    height: '68px',
    marginTop: '12px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '24px',
    lineHeight: '34px',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'left', 
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    left: '300px',
    top: '504px',
    
}}>
                  개발자가 필요하신가요?
                </div>

                
    <div 
    className='section4' style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px', 
    position: 'absolute',
    width: '180px',
    height: '115px',
    left: '300px',
    top: '603px',
    borderTop: '2px solid rgba(255, 255, 255, 0.5)', 
    opacity: isTitleVisible ? 1 : 0, 
    transition: 'opacity 500ms ease-in',
}}>

    <div style={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '24px',
        lineHeight: '34px',
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'left',
    }}>
        평균 월 120만원
    </div>

    <div style={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'left',
    }}>
        임금을 해당 국가를 기준으로 계산합니다.
    </div>
                </div>


                <div 
                 className='section5' style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px', 
    position: 'absolute',
    width: '200px',
    height: '115px',
    left: '550px',
    top: '603px',
    borderTop: '2px solid rgba(255, 255, 255, 0.5)', 
    opacity: isTitleVisible ? 1 : 0, 
    transition: 'opacity 500ms ease-in',
}}>

    <div style={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '24px',
        lineHeight: '34px',
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'left',
    }}>
       최대 3회 인력교체
    </div>

    <div style={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'left',
    }}>
       막상 채용해보니 맞지 않아도 걱정하지 마세요. 
    </div>
                </div>



        <div  className='section6' style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '8px', 
                position: 'absolute',
                width: '210px',
                height: '115px',
                left: '820px',
                top: '603px',
                borderTop: '2px solid rgba(255, 255, 255, 0.5)', 
                opacity: isTitleVisible ? 1 : 0, 
                transition: 'opacity 500ms ease-in',
            }}>

    <div style={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '24px',
        lineHeight: '34px',
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'left',
    }}>
       평균 3일, 최대 10일
    </div>

    <div style={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'left',
    }}>
        급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
    </div>
    </div>

     <AnimatedDiv/>

        </>
    );
};

export default Main;
