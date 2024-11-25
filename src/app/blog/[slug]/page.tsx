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

export default async function Blog({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const postData: BlogPost | undefined = BlogSlugSampleData[slug];

    if (!postData) {
        return <div>Post not found</div>;
    }

    const articleURL = `http://localhost:4000/blog/${slug}`;
    const linkedinShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleURL)}`;
    const twitterDMURL = `https://twitter.com/messages/compose`;
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleURL)}`;

    return (
        <div className='flex flex-col px-8 lg:px-[390px] w-full items-center gap-8 bg-white'>
            <div className="relative h-[400px] w-[303px] lg:h-[716px] lg:w-[526px]">
                <Image
                    src={postData.image}
                    layout="fill"
                    objectFit="fill"
                    alt={postData.blog_title}
                />
            </div>
            <div className='lg:min-w-[800px] flex flex-col w-full items-center'>
                <MainHeading align='left' heading={postData.blog_title} />
                <div className='h-[41px] border-y border-[#333333] border-opacity-15 w-full flex items-center'>
                    <div className="text-sm font-normal leading-4 text-black opacity-50">
                        {postData.author} {" . "} {postData.date}
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.blog_content }} />
            </div>
            <div className='flex gap-2'>
                <a href={linkedinShareURL} target="_blank" rel="noopener noreferrer">
                    <Image src={"/linkedin.png"} width={40} height={40} alt={"Share on LinkedIn"} />
                </a>
                <a href={twitterDMURL} target="_blank" rel="noopener noreferrer">
                    <Image src={"/twitter.png"} width={40} height={40} alt={"Share on Twitter DM"} />
                </a>
                <a href={facebookShareURL} target="_blank" rel="noopener noreferrer">
                    <Image src={"/facebook.png"} width={40} height={40} alt={"Share on Facebook"} />
                </a>
            </div>
        </div>
    );
};

// export default Blog;
