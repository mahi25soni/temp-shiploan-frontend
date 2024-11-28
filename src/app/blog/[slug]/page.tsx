"use client"
import MainHeading from '@/components/atoms/MainHeading'
import { BlogSlugSampleData } from '@/testdata/blog-slug-data'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import axios from "../../../../axios"
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

const CategoryOptions = [
    { label: "Home Loan", value: "Home Loan" },
    { label: "Credit Card Loan", value: "Credit Card Loan" },
    { label: "Personal Loan", value: "Personal Loan" },
    { label: "Debt Consolidation ", value: "Debt Consolidation " },
    { label: "Student Loan ", value: "Student Loan" },
];

interface BlogPost {
    category: string;
    bannerImage: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;

}

export default function Blog() {
    //const { slug } = params;
    //const router = useRouter();
    const { slug } = useParams();
    console.log('slug', slug)
    const router = useRouter();

    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (slug) {
            // Only trigger the fetch when the slug is available
            const fetchBlogPost = async () => {
                try {
                    // Fetch blog post data by slug
                    const { data } = await axios.get(`/blog/get-one/${slug}`);
                    setPost(data?.data);
                    setLoading(false);
                } catch (err) {
                    setError('Blog not found');
                    setLoading(false);
                }
            };

            fetchBlogPost();
        }
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    const articleURL = `http://localhost:4000/blog/${slug}`;
    const linkedinShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleURL)}`;
    const twitterDMURL = `https://twitter.com/messages/compose`;
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleURL)}`;



    const handleCategoryClick = (newCategory: string) => {
        const url = newCategory ? `/blog?category=${newCategory}` : '/blog';
        router.push(url);
    }

    return (

        <div className='flex flex-row gap-10 justify-center items-start mt-[125px] px-8 bg-white'>
            <div className='flex flex-col px-8  items-center gap-8 bg-white'>
                <div className="relative h-[400px] w-[303px] lg:h-[516px] lg:w-[526px]">
                    <Image
                        src={post?.bannerImage}
                        layout="fill"
                        objectFit="fill"
                        alt={post?.title}
                    />
                </div>
                <div className='lg:w-[800px] flex flex-col w-full items-center'>
                    <MainHeading align='left' heading={post?.title} />
                    <div className='h-[41px] border-y border-[#333333] border-opacity-15 w-full flex items-center justify-between'>
                        <div className="text-sm font-normal leading-4 text-black opacity-50">
                            {post?.author} {" . "} {post?.createdAt.split('T')[0]}
                        </div>
                        <div className="text-sm font-normal leading-4 text-black opacity-50 ">
                            {post?.category}
                        </div>
                    </div>
                    <div className='text-left' dangerouslySetInnerHTML={{ __html: post?.content }} />
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

            <div className='flex flex-col gap-10 '>
                <div className='flex flex-col gap-8'>
                    <div className='font-bold text-3xl'>Browse more categories</div>

                    <div className='flex flex-col gap-2'>
                        {CategoryOptions.map((categoryItem, index) => {
                            return <div key={index} className={`text-base  cursor-pointer hover:text-red-600`} onClick={() => handleCategoryClick(categoryItem?.label)}>{categoryItem.label}</div>
                        })}


                    </div>
                </div>

                <div >

                </div>
            </div>
        </div>

    );
};

// export default Blog;
