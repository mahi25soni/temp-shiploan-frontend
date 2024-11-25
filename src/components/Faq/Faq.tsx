"use client";
import { faqItems } from '@/testdata/faq-data';
import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

interface QuestionItem {
    question: string;
    answer: string;
}

interface FaqCategory {
    [key: string]: QuestionItem[];
}

const Faq = ({ category }: { category: string }) => {

    console.log("the category", category)
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [filteredQuestions, setFilteredQuestions] = useState<QuestionItem[]>([]);


    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        setFilteredQuestions(faqItems[category]);
    }, [])



    console.log("set filtered questions", filteredQuestions)



    return (
        <div className="flex flex-col items-center justify-center py-[100px]">
            <div className="px-15 text-center">
                <div className="mx-auto flex flex-col items-center">
                    <p className="font-youth font-medium text-[24px] md:text-[32px] leading-[28.8px] md:leading-[38.4px]">Frequently Asked Questions</p>
                </div>
            </div>

            <div className="w-[350px] lg:w-[870px] mt-6 lg:gap-3 gap-4 text-left flex flex-col items-center ">
                {filteredQuestions?.map((item, index) => (
                    <div
                        key={index}
                        className={`w-[350px] lg:w-[869px] lg:rounded-2xl rounded-xl transition-all duration-300 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] border-basic border 
                            }`}
                    >
                        <button
                            className="flex justify-between items-center p-3 lg:p-4 rounded-2xl w-full cursor-pointer focus:outline-none"
                            onClick={() => toggleOpen(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <h2 className="text-left text-[16px] lg:text-[20px] leading-[17.92px] lg:leading-[22px] font-medium ">{item.question}</h2>
                            {openIndex === index ? (
                                <FaMinus className="text-gray-500  w-4 h-4" />
                            ) : (
                                <FaPlus className="text-gray-500  w-4 h-4" />
                            )}
                        </button>

                        {openIndex === index && (
                            <div
                                id={`faq-answer-${index}`}
                                className="p-3 pt-0 lg:p-4 lg:pt-0 transition-opacity duration-300 ease-in-out"
                            >
                                <p className="text-gray-600 text-[14px] lg:text-[16px] leading-[15.68px] lg:leading-[17.92px]">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq