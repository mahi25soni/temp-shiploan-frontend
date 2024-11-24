"use client"
import { BlogSampleData } from '@/testdata/blog-data';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'


interface BlogItemInterface {
    blog_title: string;
    blog_content: string;
    author: string;
    date: string;
}

const data: BlogItemInterface[] = BlogSampleData;

const BlogBase = () => {

    const [blogList, setBlogList] = useState<BlogItemInterface[]>(data);
    return (
        <div className='flex flex-col mt-[125px] px-8  items-center gap-8 bg-white '>
            {blogList?.map((blog, index) => {
                const slug = blog.blog_title.toLowerCase().replace(/ /g, '-');
                return <Link href={`/blog/${slug}`} key={index}>
                    <div className='h-max py-0 lg:py-5 w-full rounded-32 border-basic flex flex-col lg:flex-row gap-5 items-center lg:items-start cursor-pointer lg:w-[800px] ' key={index}>
                        <div className='min-h-[200px] min-w-[220px] relative'>
                            <Image
                                src="/blogbg1.svg"
                                alt="Blog Item Background"
                                fill
                                className=""
                            ></Image>
                        </div>
                        <div className='flex flex-col gap-4 text-center lg:text-left'>
                            <div className="bottom-6 text-[30px] font-bold lg:leading-[45px] leading-[34px]  line-clamp-3">
                                {blog?.blog_title}
                            </div>

                            <div className="line-clamp-3 text-[18px] font-medium leading-[22px]">
                                {blog?.blog_content}
                            </div>
                            <div className="text-sm font-normal leading-4">
                                {blog?.author} {" . "} {blog?.date}
                            </div>

                        </div>
                    </div>
                </Link>
            })}

        </div>
    )
}

export default BlogBase