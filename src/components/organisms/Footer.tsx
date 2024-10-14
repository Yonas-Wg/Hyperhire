import React from 'react';
import Image from 'next/image';
import CodeOffIcon from '@mui/icons-material/CodeOff';

const Footer = () => {
    return (
        <footer className="flex flex-col items-start justify-start relative h-104 p-4 pl-80" style={{ backgroundColor: '#FBFBFB' }}>
            <div className="flex flex-col items-start">
                <Image
                    src="/assets/hyperlogo.jpg" 
                    alt="hyperhire logo"
                    width={187}
                    height={34}
                    className="w-auto h-auto"
                />
                <p className="mt-2 text-left text-gray-700">
                    우리는 국가의 장벽을 넘어 최고의 인재를 매<br/>칭해드립니다.
                </p>
                <p className="mt-2 text-left text-gray-600 text-base leading-6 font-black">
                    010-0000-0000
                </p>
                <p className="mt-2 text-left text-gray-600 text-base leading-6 font-black">
                    aaaaa@naver.com
                </p>

         <div className="absolute" style={{ left: '849px', top: '19px', width: '187px', height: '142px', background: '#fff', borderRadius: '12px', padding: '16px', gap: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
         <div style={{ 
            width: '40px', 
            height: '40px', 
            background: '#EFF1F7', 
            borderRadius: '8px', 
            padding: '8px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            gap: '10px' 
            }}>
            <CodeOffIcon
                style={{ 
                width: '24px',  
                height: '24px', 
                objectFit: 'cover', 
                borderRadius: '4px',
                marginBottom:'0px',
                color: '#5E626F' 
                }} 
            />
        
                <p className="text-[14px] font-bold leading-6 text-[#343741]" style={{ width: '154px',marginTop:'60px', height: '21px', fontFamily: 'Poppins', fontWeight: 900 }}>
                    해외 개발자 원격 채용
                </p>
            </div>

            <div className="flex items-center">
            <p className="text-[14px] font-bold leading-6 text-[#343741]" style={{ marginTop: '0px', marginLeft: '10px' }}>
                바로가기
            </p>
            <svg 
                width="20" 
                height="20" 
                viewBox="0 0 18 18" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: '10px' }}  
            >
                <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M5.59669 1.91675C3.36085 1.91675 1.91669 3.27925 1.91669 5.38758V12.6117C1.91669 14.7201 3.36085 16.0834 5.59669 16.0834H12.4034C14.6392 16.0834 16.0834 14.7201 16.0834 12.6117V5.38758C16.0834 3.27925 14.6392 1.91675 12.4034 1.91675H5.59669ZM12.4034 17.3334H5.59669C2.64835 17.3334 0.666687 15.4359 0.666687 12.6117V5.38758C0.666687 2.56341 2.64835 0.666748 5.59669 0.666748H12.4034C15.3517 0.666748 17.3334 2.56341 17.3334 5.38758V12.6117C17.3334 15.4359 15.3517 17.3334 12.4034 17.3334Z" 
                fill="#5E626F"
                />
                <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M12.4049 9.625H5.59491C5.24991 9.625 4.96991 9.345 4.96991 9C4.96991 8.655 5.24991 8.375 5.59491 8.375H12.4049C12.7499 8.375 13.0299 8.655 13.0299 9C13.0299 9.345 12.7499 9.625 12.4049 9.625Z" 
                fill="#5E626F"
                />
                <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M9.26858 12.7484C9.10858 12.7484 8.94775 12.6876 8.82608 12.5642C8.58275 12.3192 8.58358 11.9242 8.82775 11.6809L11.5194 9.00008L8.82775 6.31925C8.58358 6.07591 8.58275 5.68091 8.82608 5.43591C9.06942 5.19091 9.46442 5.19091 9.70942 5.43425L12.8461 8.55758C12.9644 8.67425 13.0303 8.83425 13.0303 9.00008C13.0303 9.16591 12.9644 9.32591 12.8461 9.44258L9.70942 12.5659C9.58775 12.6876 9.42775 12.7484 9.26858 12.7484Z" 
                fill="#5E626F"
                />
            </svg>
            </div>
        </div>
        
                {/* Horizontal Header Information */}
                <div className="flex flex-col mt-4">
                    <div className="flex justify-start space-x-24   "> 
                        <p className="text-gray-600 text-base leading-6 font-black">상호명</p>
                        <p className="text-gray-600 text-base leading-6 font-black">대표 CEO</p>
                        <p className="text-gray-600 text-base leading-6 font-black">사업자등록번호 CIN</p>
                        <p className="text-gray-600 text-base leading-6 font-black">주소 ADDRESS</p>
                    </div>

                    {/* Details Section */}
                    <div className="flex justify-start space-x-20 mt-2"> {/* Align to start */}
                        <p className="text-gray-600 text-base leading-6 font-black">하이퍼하이어</p>
                        <p className="text-gray-600 text-base leading-6 font-black">김주현</p>
                        <p className="text-gray-600 text-base leading-6 font-black">427-86-01187</p>
                        <p className="text-gray-600 text-base leading-6 font-black">서울특별시 강남대로 479, 지하 1층 238호</p>
                    </div>
                </div>

                {/* International Information Section */}
                <div className="flex flex-col mt-4">
                    <div className="flex justify-start space-x-10"> {/* Align to start */}
                        <p className="text-left text-gray-600 text-base leading-6 font-black">
                            Hyperhire India <br /> Private Limited
                        </p>
                        <p className="text-right text-gray-600 text-base leading-6 font-black">
                            Juhyun Kim
                        </p>
                        <p className="text-right text-gray-600 text-base leading-6 font-black">
                            U74110DL2016PTC290812 
                        </p>
                        <p className="text-right text-gray-600 text-base leading-6 font-black">
                            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 
                            <br /> 110053 India
                        </p>
                    </div>
                </div>

                <p className="mt-12 text-left text-gray-600 text-base leading-6 font-black">
                    ⓒ 2023 Hyperhire
                </p>
            </div>
        </footer>
    );
};

export default Footer;
