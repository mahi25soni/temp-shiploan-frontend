import Image from 'next/image';
import React from 'react'
import BrownLine from '../atoms/BrownLine';



const SuggestedLenders = () => {
    return (
        <div
            className="m-auto flex h-full w-full flex-col  items-center justify-start gap-6 lg:px-[200px]"
        >

            <div className='flex items-center justify-between w-[353px] lg:w-full'>
                <div className='font-bold text-base lg:text-5xl lg:leading-[60px]'>
                    Suggested Lenders
                </div>
                <div className='flex items-center gap-1'>
                    <div className="relative w-6 h-6 lg:w-8 lg:h-8">
                        <Image src='/SlidersHorizontal.svg' fill alt='Slides Horizontal' />
                    </div>
                    <div className="relative w-6 h-6 lg:w-8 lg:h-8">
                        <Image src='/Funnel.svg' fill alt='Funnel' />
                    </div>
                </div>

            </div>
            <div className='p-6 bg-white rounded-32 flex justify-between items-center gap-4 w-[353px] shadow-[0_2px_8px_rgba(0,0,0,0.25)] lg:w-full lg:rounded-2xl lg:p-8 
'>
                <div className='flex flex-col gap-4 lg:w-full'>
                    <div className='flex items-center gap-1 lg:h-[58px] lg:justify-between'>
                        <div className='font-bold text-2xl leading-[29.05px] lg:text-5xl lg:leading-[58px] '>
                            Name
                        </div>
                        <div className='hidden lg:flex gap-4 '>
                            <div className='bg-transparent-gray flex justify-center items-center gap-3 p-4 description-text-18 rounded-32'>
                                <Image src='/PlusCircle.svg' width={18} height={18} alt="Add Button" className='rounded-full' />
                                <div>Add to Compare</div>
                            </div>
                            <div className='bg-transparent-gray flex justify-center items-center gap-3 p-4 description-text-18 rounded-32'>
                                <Image src='/connect.svg' width={18} height={18} alt="Connect Button" className='rounded-full' />

                                <div>Visit Lender Website</div>
                            </div>
                        </div>
                        <Image src='/PlusCircle.svg' width={18} height={18} alt="Add Button" className='rounded-full lg:hidden' />
                        <Image src='/connect.svg' width={18} height={18} alt="Connect Button" className='rounded-full lg:hidden' />
                    </div>
                    <div className='lg:hidden w-full '>
                        <BrownLine />
                    </div>

                    <div className='flex gap-4 items-center justify-start lg:justify-between w-full'>
                        <div className='flex flex-col gap-1 '>
                            <div className='text-xs leading-[14.52px] lg:text-2xl lg:leading-[29.05px] '>
                                ROI
                            </div>
                            <div className='text-sm font-bold leading-[16.94px]  lg:text-3xl lg:leading-[38.73px]'>
                                8.99 {" - "} 8.999
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <div className='text-xs leading-[14.52px] text-[#000000] lg:text-2xl lg:leading-[29.05px] '>
                                Amount
                            </div>
                            <div className='text-sm font-bold leading-[16.94px] lg:text-3xl lg:leading-[38.73px]'>
                                10L {" - "} 50L
                            </div>
                        </div>


                        <div className='hidden lg:flex flex-col gap-1 '>
                            <div className='text-xs leading-[14.52px] text-[#000000] lg:text-2xl lg:leading-[29.05px] '>
                                Eligiblity
                            </div>
                            <div className='text-sm font-bold leading-[16.94px] lg:text-3xl lg:leading-[38.73px]'>
                                10L {" - "} 50L
                            </div>
                        </div>
                        <div className='hidden lg:flex flex-col gap-1 '>
                            <div className='text-xs leading-[14.52px] text-[#000000] lg:text-2xl lg:leading-[29.05px] '>
                                Disbursement
                            </div>
                            <div className='text-sm font-bold leading-[16.94px] lg:text-3xl lg:leading-[38.73px]'>
                                10L {" - "} 50L
                            </div>
                        </div>


                    </div>
                </div>

                <BrownLine height={true} />
                <div className='flex flex-col gap-4 lg:hidden'>
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