import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-6'>
      <div className='flex flex-col md:flex-row items-center md:justify-evenly gap-8 md:gap-32 w-full max-w-6xl'>
        <h2 className='text-[64px] leading-[96px] font-bold text-[#333333] whitespace-nowrap md:whitespace-normal text-center md:text-left'>
          About Us
        </h2>
        <p className='text-[#000000] mt-36 md:mt-0 opacity-50 font-normal text-[18px] md:text-[24px] leading-[27px] max-w-xl text-start md:text-left'>
          Lorem ipsum dolor sit amet consectetur. Semper proin viverra in posuere ridiculus viverra. Amet fringilla ornare id enim convallis donec risus. Fermentum lobortis aliquet pellentesque faucibus sem ultrices ullamcorper viverra egestas. Tempor feugiat lacus quis lectus curabitur dignissim mollis mattis. Sed porta sit venenatis senectus pellentesque nunc convallis pellentesque.
        </p>
      </div>
    </div>
  )
}

export default About
