"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useNavbar } from '@/context/contextApi';

const FooterItemsLink: { [key: string]: string }[] = [
    { tab: "Home", link: "/" },
    { tab: "Debt Consolidation", link: "/debt-consolidation" },
    { tab: "Home Loan", link: "/home-loan" },
    { tab: "Credit Card Debt", link: "/creditcard-loan" },
    { tab: "Student Loan", link: "/student-loan" },
    { tab: "Blog", link: "/blog" },
    { tab: "About Us", link: "/about" },
    { tab: "Contact Us", link: "/contact" },
]

const Footer = () => {
    const { selectedTab, setSelectedTab } = useNavbar();
    return (
        <div className="min-h-[257px] p-10 relative">
            <div className="flex flex-col gap-6 lg:gap-8">

                <div className="flex">
                    <Image src="/theLogo.svg" alt="logo" width={149} height={22} />
                </div>

                <div className="flex flex-wrap sm:flex-nowrap opacity-[50%] font-normal text-base gap-4">
                    {FooterItemsLink.map((item, index) => (
                        <Link key={index} href={item.link} passHref onClick={() => setSelectedTab(item?.tab)}>
                            <p className="underline text-sm md:text-base hover:text-blue-600 transition-colors cursor-pointer">
                                {item.tab}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="flex">
                    <div className="flex flex-col max-w-[152px] gap-0">
                        <p className="font-bold opacity-[50%] text-sm mb-2">Sniploan Pvt Ltd</p>
                        <p className="opacity-[50%] font-normal text-sm">
                            Lorem ipsum dolor sit amet consectetur. Nulla sodales nisl curabitur.
                        </p>
                        <p className="opacity-[50%] font-normal text-sm mt-2">
                            📞 +91 8383 093 497
                        </p>
                    </div>


                    <div className="absolute left-[92px] -top-8 ">
                        {/* <Image src="/footer.svg" alt="Footer Mobile View" width={512} height={317} className="sm:hidden " /> */}
                    </div>
                </div>





                <div className='text-base font-normal opacity-[50%]'>
                    @Sniploan Pvt Ltd. 2024. All rights reserved. Built by Beyondt
                </div>
            </div>
        </div>
    );
};

export default Footer;
