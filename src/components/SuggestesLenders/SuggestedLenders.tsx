import Image from 'next/image';
import React from 'react'
import BrownLine from '../atoms/BrownLine';

interface Props {
    bgColor: string;
}

const SuggestedLenders = (data: Props) => {
    return (
        <div
            className="m-auto flex  lg:h-[1192px] h-full w-full flex-col  items-center justify-start gap-6"
            style={{
                background: `${data?.bgColor}`,
            }}
        >

            <div className='p-6 bg-white rounded-32 flex justify-between items-center gap-4 w-[353px]'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-1'>
                        <div className='font-bold text-2xl leading-[29.05px] '>
                            Name
                        </div>
                        <Image src='/PlusCircle.svg' width={18} height={18} alt="Add Button" className='rounded-full' />
                        <Image src='/connect.svg' width={18} height={18} alt="Connect Button" className='rounded-full' />
                    </div>
                    <BrownLine />
                    <div className='flex gap-4 items-center justify-start'>
                        <div className='flex flex-col gap-1 '>
                            <div className='text-xs leading-[14.52px] text-[#000000]'>
                                ROI
                            </div>
                            <div className='text-sm font-bold leading-[16.94px]'>
                                8.99 {" - "} 8.999
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <div className='text-xs leading-[14.52px] text-[#000000]'>
                                Amount
                            </div>
                            <div className='text-sm font-bold leading-[16.94px]'>
                                10L {" - "} 50L
                            </div>
                        </div>

                    </div>
                </div>
                <BrownLine height={true}/>
                <div className='flex flex-col gap-4 '>
                    <div className='flex flex-col gap-1 '>
                        <div className='text-xs leading-[14.52px] text-[#000000]'>
                            Eligiblity
                        </div>
                        <div className='text-sm font-bold leading-[16.94px]'>
                        10L {" - "} 50L
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 '>
                        <div className='text-xs leading-[14.52px] text-[#000000]'>
                            Disbursement
                        </div>
                        <div className='text-sm font-bold leading-[16.94px]'>
                            10L {" - "} 50L
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestedLenders