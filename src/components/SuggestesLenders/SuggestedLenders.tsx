import Image from 'next/image';
import React, { useState } from 'react'
import BrownLine from '../atoms/BrownLine';
import formatNumber from '@/utils/numberFormatter';


interface LenderInfo {
    id: string,
    bank_name: string,
    logo: string,
    lender_link: string,
    values: {
        id: number,
        label_name: string,
        value: number
        type: string
    }[]
}

interface props {
    lenderArray: LenderInfo[],
    setLenderComparisonArray: (value: any) => void;
    setLenderComparison: (value: any) => void;
    lenderComparisonArray: LenderInfo[]
}


const SuggestedLenders = (data: props) => {
    const [selectedLenderIds, setSelectedLenderIds] = useState<string[]>([])

    const handleAddToCompare = (lender: LenderInfo) => {
        const lenderId = lender.id;
        const isAlreadyInComparison = data?.lenderComparisonArray.some(existingLender => existingLender.id === lenderId);


        if (!isAlreadyInComparison && data?.lenderComparisonArray.length < 2) {
            setSelectedLenderIds([...selectedLenderIds, lenderId]);
            data.setLenderComparisonArray([...data?.lenderComparisonArray, lender]);
        }
        else if (isAlreadyInComparison) {
            const updatedComparisonArray = data?.lenderComparisonArray.filter(existingLender => existingLender.id !== lenderId);
            const updatedSelectedLenderIds = selectedLenderIds.filter(id => id !== lenderId);

            data.setLenderComparisonArray(updatedComparisonArray);
            setSelectedLenderIds(updatedSelectedLenderIds)
        }
    }


    const handleAddToCompareDesktop = (lender: LenderInfo) => {
        const lenderId = lender.id;
        const isAlreadyInComparison = data?.lenderComparisonArray.some(existingLender => existingLender.id === lenderId);


        if (!isAlreadyInComparison && data?.lenderComparisonArray.length < 2) {
            setSelectedLenderIds([...selectedLenderIds, lenderId]);
            data.setLenderComparisonArray([...data?.lenderComparisonArray, lender]);
            data.setLenderComparison(true);
        }
        else if (isAlreadyInComparison) {
            const updatedComparisonArray = data?.lenderComparisonArray.filter(existingLender => existingLender.id !== lenderId);
            const updatedSelectedLenderIds = selectedLenderIds.filter(id => id !== lenderId);

            data.setLenderComparisonArray(updatedComparisonArray);
            setSelectedLenderIds(updatedSelectedLenderIds)
        }

    }

    const compareLenders = () => {
        console.log('Comparing Lenders')
        data.setLenderComparison(true)
    }
    return (
        <div
            className="relative m-auto flex h-full w-full flex-col  items-center justify-start gap-6 lg:px-[134px]"
        >

            {
                data?.lenderComparisonArray.length > 0 && <div className='shadow-[0_2px_8px_rgba(0,0,0,0.25)] p-6 flex flex-col lg:hidden rounded-2xl w-[353px] bg-white gap-4 sticky top-[130px] left-0 z-10'>
                    <div className='flex items-center justify-around h-[29px]'>
                        <div className='description-text-24 font-bold text-center   '>
                            {data?.lenderComparisonArray?.[0]["bank_name"]}

                        </div>
                        <BrownLine height={true} />
                        <div className='description-text-24 font-bold text-center'>
                            {data?.lenderComparisonArray.length > 1 ? data?.lenderComparisonArray?.[1]["bank_name"] : <Image src='/PlusCircle.svg' width={18} height={18} alt="Add Button" className='rounded-full' />}
                        </div>
                    </div>
                    <button disabled={data?.lenderComparisonArray.length === 2 ? false : true} onClick={compareLenders} className={` p-4 rounded-32 border   w-full description-text-18 font-bold  ${data?.lenderComparisonArray.length === 2 ? 'border-light-gray text-light-gray' : 'border-gray-opacity-20 text-gray-opacity-20'}`}>
                        Compare
                    </button>
                </div>
            }

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

            {data?.lenderArray?.map((lender, index) => {
                return (
                    <SingleLenderInfo lender={lender} key={index} handleAddToCompare={handleAddToCompare} handleAddToCompareDesktop={handleAddToCompareDesktop} selectedLenderIds={selectedLenderIds} />
                )
            })}



        </div>
    )
}

const SingleLenderInfo = ({
    lender,
    handleAddToCompare,
    handleAddToCompareDesktop,
    selectedLenderIds
}: {
    lender: LenderInfo,
    handleAddToCompare: (lender: LenderInfo) => void,
    handleAddToCompareDesktop: (lender: LenderInfo) => void
    selectedLenderIds: string[]

}) => {

    const isSelected = selectedLenderIds.some(selectedId => selectedId === lender.id);

    return (
        <div className='p-6 bg-white  flex justify-between items-center gap-4 w-[353px] shadow-[0_2px_8px_rgba(0,0,0,0.25)] lg:w-full rounded-2xl lg:p-8 h-[152px] lg:h-full
    '>
            <div className='flex flex-col gap-4 w-full'>
                <div className='flex items-center  gap-1 lg:h-[58px] justify-between min-w-full'>
                    <div className='flex flex-row gap-3'>
                        <div className='relative lg:flex justify-center items-center hidden'>

                            <Image src={lender?.logo} alt='Bank logo' height={30} width={30} />
                        </div>
                        <div className='font-bold text-xl leading-[24px] lg:text-[30px] lg:leading-[58px] text-center '>
                            {lender?.bank_name}
                        </div>
                    </div>

                    <div className='hidden lg:flex gap-4 '>
                        <div className={`flex justify-center items-center gap-3 p-4 description-text-18 rounded-32 cursor-pointer ${isSelected ? 'bg-black text-white' : 'bg-gray-opacity-5 text-black'}  transition-all duration-400 ease-in-out  hover:scale-[102%] hover:shadow-[0_0_2px_2px_rgba(0,0,0,0.4)]`} onClick={() => handleAddToCompareDesktop(lender)}>
                            <Image src='/PlusCircle.svg' width={18} height={18} alt="Add Button" className={`rounded-full ${isSelected ? "text-white bg-white" : "text-black"}`} />
                            <div>Add to Compare</div>
                        </div>
                        <div className='bg-gray-opacity-5 flex justify-center items-center gap-3 p-4 description-text-18 rounded-32 cursor-pointer  transition-all duration-400 ease-in-out  hover:scale-[102%] hover:shadow-[0_0_2px_2px_rgba(0,0,0,0.4)]'>
                            <Image src='/connect.svg' width={18} height={18} alt="Connect Button" className='rounded-full' />

                            <div>Visit Lender Website</div>
                        </div>
                    </div>
                    <div className='flex gap-1 items-center lg:hidden'>

                        <div onClick={() => handleAddToCompare(lender)} className={`lg:hidden h-6 w-6 relative`}>
                            {isSelected ? <Image src='/minusFilled.svg' fill alt="Minus button" className={`rounded-full`} /> : <Image src='/PlusCircle.svg' fill alt="Add Button" className={`rounded-full`} />}
                        </div>
                        <div className='lg:hidden  h-6 w-6 relative'>

                            <Image src='/connect.svg' fill alt="Connect Button" className={`rounded-full`} />
                        </div>
                    </div>
                </div>
                <div className='lg:hidden w-full '>
                    <BrownLine />
                </div>

                <div className='flex gap-4 items-center justify-start lg:justify-between w-full'>
                    <div className='flex flex-col gap-1 '>
                        <div className='text-xs leading-[14.52px] lg:text-[18px] lg:leading-[29.05px] '>
                            {lender?.values?.[0]?.label_name}
                        </div>
                        <div className='text-sm font-bold leading-[16.94px]  lg:text-[18px] lg:leading-[38.73px]'>
                            {formatNumber(lender?.values?.[0]?.value, lender?.values?.[0]?.type)}
                        </div>
                    </div>
                    {/* <div className='flex flex-col gap-1 '>
                        <div className='text-xs leading-[14.52px] text-[#000000] lg:text-[18px] lg:leading-[29.05px] '>
                            Amount
                        </div>
                        <div className='text-sm font-bold leading-[16.94px] lg:text-[18px] lg:leading-[38.73px]'>
                            {lender?.amount}
                        </div>
                    </div> */}


                    <div className='hidden lg:flex flex-col gap-1 '>
                        <div className='text-xs leading-[14.52px] text-[#000000] lg:text-[18px] lg:leading-[29.05px] '>
                            {lender?.values?.[1]?.label_name}
                        </div>
                        <div className='text-sm font-bold leading-[16.94px] lg:text-[18px] lg:leading-[38.73px]'>
                            {formatNumber(lender?.values?.[1]?.value, lender?.values?.[1]?.type)}

                        </div>
                    </div>
                    <div className='hidden lg:flex flex-col gap-1 '>
                        <div className='text-xs leading-[14.52px] text-[#000000] lg:text-[18px] lg:leading-[29.05px] '>
                            {lender?.values?.[2]?.label_name}
                        </div>
                        <div className='text-sm font-bold leading-[16.94px] lg:text-[18px] lg:leading-[38.73px]'>
                            {formatNumber(lender?.values?.[2]?.value, lender?.values?.[2]?.type)}

                        </div>
                    </div>


                </div>
            </div>

            <div className='h-full lg:hidden'>

                <BrownLine height={true} />
            </div>

            <div className='flex min-w-[80px] flex-col gap-7 lg:hidden lg:w-full'>
                <div className='flex flex-col gap-1 '>
                    <div className='text-xs leading-[14.52px] text-[#000000]'>
                        {lender?.values?.[1]?.label_name}
                    </div>
                    <div className='text-sm font-bold leading-[16.94px]'>
                        {formatNumber(lender?.values?.[1]?.value, lender?.values?.[1]?.type)}

                    </div>
                </div>
                {/* <div ></div> */}
                <div className='flex flex-col gap-1 '>
                    <div className='text-xs leading-[14.52px] text-[#000000]'>
                        {lender?.values?.[2]?.label_name}                    </div>
                    <div className='text-sm font-bold leading-[16.94px]'>
                        {formatNumber(lender?.values?.[2]?.value, lender?.values?.[2]?.type)}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestedLenders