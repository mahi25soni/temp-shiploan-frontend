import React from 'react'
import Image from 'next/image'


const Contact = () => {
    return (
        <div className='min-h-screen w-full bg-[#FBAE17] flex items-center justify-evenly pb-5'>
            <div className='flex md:flex-row flex-col items-center mt-36 gap-28'>
                <div className='relative md:w-[481px] w-[277px] md:h-[634px] h-[366px]'>
                    <Image src="/money and pie chart.svg" alt="logo" layout="fill"
                        objectFit="fill"
                    />

                </div>
                <div>
                    <h1 className='mt-5 text-[32px] md:text-[64px] leading-[48px] md:leading-[96px] font-bold text-white'>
                        Got a question?<br />Let’s talk
                    </h1>
                    <div className="flex h-12 items-center justify-start gap-3 md:mt-0 mt-10">
                        <input
                            type="email"
                            placeholder="Enter your e-mail address"
                            className="h-full w-[270px] rounded-lg border border-basic bg-white px-4 py-3"
                        />

                        <button className="flex h-full w-12 items-center justify-center text-yellow-orange bg-black rounded-lg ">
                            <Image
                                src="EnvelopeOpen.svg"
                                alt="Email button"
                                width={16}
                                height={16}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
