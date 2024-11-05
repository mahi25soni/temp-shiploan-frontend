import MainHeading from '@/components/atoms/MainHeading'
import Image from 'next/image'
import React from 'react'

type Props = {}

const BlogBase = (props: Props) => {
    return (
        <div className='flex flex-col px-8 lg:px-[390px] w-full items-center gap-8 bg-white'>
            <div className="relative h-[400px] w-[303px] lg:h-[716px] lg:w-[526px]">
                <Image
                    src={"/money and pie chart.svg"}
                    layout="fill"
                    objectFit="fill"
                    alt={"The Rise of AI in Everyday Life"}
                />
            </div>
            <MainHeading align='left' heading={"The Rise of AI in Everyday Life"} />

            <div className='h-[41px]  border-y border-[#333333] border-opacity-15 w-full flex items-center'>
                <div className="text-sm font-normal leading-4 text-black opacity-50">
                    {"Jane Doe"} {" . "} {"2024-02-14"}
                </div>
            </div>
            <div>
                <p>Artificial intelligence is no longer a thing of the future. From voice assistants to personalized ads, AI has integrated seamlessly into our daily routines. This article explores how AI is shaping industries and our personal lives.</p>
            </div>
        </div>
    )
}

export default BlogBase