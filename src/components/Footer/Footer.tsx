import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="min-h-[257px] p-10 relative">
            <div className="flex flex-col">

                <div className="flex">
                    <Image src="/logo.png" alt="logo" width={149} height={22} />
                </div>


                <div className="flex sm:hidden pt-9">
                    <div className="flex flex-col max-w-[152px]">
                        <p className="font-bold opacity-[50%] text-xs mb-4">Sniploan Pvt Ltd</p>
                        <p className="opacity-[50%] font-normal text-sm">
                            Lorem ipsum dolor sit amet consectetur. Nulla sodales nisl curabitur.
                        </p>
                        <p className="opacity-[50%] font-normal text-sm mt-2">
                            📞 +91 8383 093 497
                        </p>
                    </div>


                    <div className="absolute left-[92px] -top-8 ">
                        <Image src="/footer.png" alt="Footer Mobile View" width={512} height={317} className="sm:hidden " />
                    </div>
                </div>


                <div className="flex flex-wrap sm:flex-nowrap opacity-[50%] font-normal text-base gap-4 pt-9">
                    {[
                        "Education Loan Refinancing", 
                        "Credit Card Balance Transfer", 
                        "Personal Loan Consolidation", 
                        "Home Loan Balance Transfer", 
                        "Blogs", 
                        "Collaborate", 
                        "Follow Us", 
                        "Our Story"
                    ].map((text, index) => (
                        <p key={index} className="underline text-sm md:text-base hover:text-blue-600 transition-colors">
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
