import BrownLine from '@/components/atoms/BrownLine'
import BlogListing from '@/components/BlogListing/BlogListing'
import HomePageComponentWrapper from '@/components/wrappers/HomePageComponentWrapper'
import Image from 'next/image'
import React from 'react'


const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-screen w-full'>

            {children}


            <div className='w-full py-8'>

                <BrownLine />
            </div>

            <BlogListing />

            <HomePageComponentWrapper
                bgColor={"#D1E6DF"}
                mainImage="/convert megaphone.svg"
                heading="Get updates in your inbox"
                description="Lorem ipsum dolor sit amet consectetur. Diam sed mattis facilisis eget tellus dui augue sagittis ultricies. Scelerisque elit duis in tortor. Volutpat elit neque in sem nulla quam imperdiet. Mi nisl sem amet odio."
                altText="kuchh bhi rakhlo"
            >
                <div className="flex h-12 items-center justify-start gap-3">
                    <input
                        type="email"
                        placeholder="Enter your e-mail address"
                        className="h-full w-[270px] rounded-lg border border-basic bg-white px-4 py-3"
                    />

                    <button className="flex h-full w-12 items-center justify-center text-yellow-orange bg-black rounded-lg">
                        <Image
                            src="/EnvelopeOpen.svg"
                            alt="Email button"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
            </HomePageComponentWrapper>
        </div>
    )
}

export default BlogLayout