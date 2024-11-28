"use client"
import { BlogSampleData } from '@/testdata/blog-data';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import axios from "../../../axios"
import DOMPurify from 'dompurify';
import { useRouter, useSearchParams } from 'next/navigation';
import slugify from 'slugify';

const CategoryOptions = [
    { label: "Home Loan", value: "Home Loan" },
    { label: "Credit Card Loan", value: "Credit Card Loan" },
    { label: "Personal Loan", value: "Personal Loan" },
    { label: "Debt Consolidation ", value: "Debt Consolidation " },
    { label: "Student Loan ", value: "Student Loan" },
];
interface BlogItemInterface {
    category: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    bannerImage: string
}


const BlogBase = () => {

    const [blogList, setBlogList] = useState<BlogItemInterface[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const router = useRouter();

    const searchParams = useSearchParams()
    const category = searchParams.get('category')

    useEffect(() => {
        (async () => {
            const queryParam = category ? `?category=${category}` : '';
            const { data } = await axios.get(`/blog/get-all${queryParam}`);
            setBlogList(data?.data);
        })()
    }, [category])

    function sanitizeContent(content: string) {
        const sanitized = DOMPurify.sanitize(content, { FORBID_TAGS: ['img'] });
        return sanitized;
    }

    const handleCategoryClick = (newCategory: string) => {
        const url = newCategory ? `/blog?category=${newCategory}` : '/blog';
        router.push(url);
    }
    return (

        <div className='relative flex flex-col lg:flex-row gap-10 justify-center  items-center lg:items-start mt-[125px] px-8 bg-white'>

            {blogList?.length === 0 && <div className='text-3xl font-bold'>No Blogs Found</div>}

            <div className='flex flex-col  items-start lg:items-center gap-8  '>
                {blogList?.map((blog, index) => {
                    const slug = slugify(blog.title, { replacement: '-', lower: true });
                    return <Link href={`/blog/${slug}`} key={index}>
                        <div className='h-max py-0 lg:py-5 w-full rounded-32 border-basic flex flex-row gap-2 lg:gap-5 items-start  cursor-pointer lg:w-[800px]' key={index}>
                            <div className='lg:min-h-[200px] lg:min-w-[220px] min-w-20 min-h-20 relative'>
                                <Image
                                    src={blog?.bannerImage}
                                    alt="Blog Item Background"
                                    fill
                                    className="rounded-xl"
                                ></Image>
                            </div>
                            <div className='flex flex-col gap-2 lg:gap-4 text-left lg:text-left h-max lg:h-[200px]'>
                                <div className="bottom-6 line-clamp-1  text-base font-bold lg:text-[30px] lg:leading-[45px] leading-[16.91px]  lg:line-clamp-3">
                                    {blog?.title}
                                </div>

                                <div className="line-clamp-2 lg:line-clamp-3 lg:text-[18px]  text-xs leading-[14px] break-words font-normal lg:leading-[22px] overflow-hidden " dangerouslySetInnerHTML={{ __html: sanitizeContent(blog?.content || '') }}>
                                </div>
                                <div className="lg:text-sm font-normal lg:leading-4 text-xs">
                                    {blog?.author} {" . "} {blog?.createdAt.split('T')[0]}
                                </div>

                            </div>
                        </div>
                    </Link>
                })}

            </div>

            <div className='sticky top-[125px] flex flex-col gap-10 '>
                <div className='flex flex-col gap-8'>
                    <div className='font-bold text-3xl'>Browse more categories</div>

                    <div className='flex flex-col gap-2'>
                        {CategoryOptions.map((categoryItem, index) => {
                            return <div key={index} className={`text-base  cursor-pointer hover:text-red-600 ${categoryItem?.label === category ? "font-bold" : "font-normal"}`} onClick={() => handleCategoryClick(categoryItem?.label)}>{categoryItem.label}</div>
                        })}


                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default BlogBase