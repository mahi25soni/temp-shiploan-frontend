"use client"
import { BlogSampleData } from '@/testdata/blog-data';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import axios from "../../../axios"
import DOMPurify from 'dompurify';
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


    useEffect(() => {
        (async () => {
            const { data } = await axios.get("/blog/get-all");
            setBlogList(data?.data);
        })()
    }, [])

    function sanitizeContent(content: string) {
        const sanitized = DOMPurify.sanitize(content, { FORBID_TAGS: ['img'] });
        return sanitized;
    }
    return (
        <div className='flex flex-col mt-[125px] px-8  items-center gap-8 bg-white '>
            {blogList?.map((blog, index) => {
                const slug = blog.title.toLowerCase().replace(/ /g, '-');
                return <Link href={`/blog/${slug}`} key={index}>
                    <div className='h-max py-0 lg:py-5 w-full rounded-32 border-basic flex flex-col lg:flex-row gap-5 items-center lg:items-start cursor-pointer lg:w-[800px] ' key={index}>
                        <div className='min-h-[200px] min-w-[220px] relative'>
                            <Image
                                src={blog?.bannerImage}
                                alt="Blog Item Background"
                                fill
                                className="rounded-xl"
                            ></Image>
                        </div>
                        <div className='flex flex-col gap-4 text-center lg:text-left h-[200px]'>
                            <div className="bottom-6 text-[30px] font-bold lg:leading-[45px] leading-[34px]  line-clamp-3">
                                {blog?.title}
                            </div>

                            <div className="line-clamp-3 text-[18px]  break-words font-normal leading-[22px] overflow-hidden " dangerouslySetInnerHTML={{ __html: sanitizeContent(blog?.content || '') }}>
                            </div>
                            <div className="text-sm font-normal leading-4">
                                {blog?.author} {" . "} {blog?.createdAt}
                            </div>

                        </div>
                    </div>
                </Link>
            })}

        </div>
    )
}

export default BlogBase