import MainHeading from '@/components/atoms/MainHeading'
import { BlogSlugSampleData } from '@/testdata/blog-slug-data'
import Image from 'next/image'
import React from 'react'
interface BlogPost {
    image: string;
    blog_title: string;
    blog_content: string;
    author: string;
    date: string;
}
type Params = Promise<{ slug: string }>;

const Blog = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    const postData: BlogPost = BlogSlugSampleData[slug]

    if (!postData) {
        return <div>Post not found</div>
    }

    return (
        <div className='flex flex-col px-8 lg:px-[390px] w-full items-center gap-8 bg-white'>
            <div className="relative h-[400px] w-[303px] lg:h-[716px] lg:w-[526px]">
                <Image
                    src={postData?.image}
                    layout="fill"
                    objectFit="fill"
                    alt={postData.blog_title}
                />
            </div>
            <MainHeading align='left' heading={postData?.blog_title} />

            <div className='h-[41px]  border-y border-[#333333] border-opacity-15 w-full flex items-center'>
                <div className="text-sm font-normal leading-4 text-black opacity-50">
                    {postData.author} {" . "} {postData.date}
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.blog_content }} />
        </div>
    )
}

export default Blog