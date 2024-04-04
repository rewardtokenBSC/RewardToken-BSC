import React from 'react';

export default function Page() {
  return (
    // <div style={{ overflow: 'auto', maxWidth: '100%', height: '100vh' }}>
    //   <embed src="/RewardToken.pdf" type="application/pdf" width="100%" height="100%" />
    // </div>
    <div className='lg:px-40 md:px-20 px-10 flex flex-col justify-start items-center bg-black gap-10 w-full'>
      <img src="/whitepaper/1.jpg" className='md:h-[800px]' alt="" />
      <img src="/whitepaper/2.jpg" className='md:h-[800px]' alt="" />
      <img src="/whitepaper/3.jpg" className='md:h-[800px]' alt="" />
      <img src="/whitepaper/4.jpg" className='md:h-[800px]' alt="" />
      <img src="/whitepaper/5.jpg" className='md:h-[800px]' alt="" />
      <img src="/whitepaper/6.jpg" className='md:h-[800px]' alt="" />
      <img src="/whitepaper/7.jpg" className='md:h-[800px]' alt="" />
      <img src="/whitepaper/8.jpg" className='md:h-[800px]' alt="" />
      <img src="/whitepaper/9.jpg" className='md:h-[800px]' alt="" />
    </div>
  );
}
