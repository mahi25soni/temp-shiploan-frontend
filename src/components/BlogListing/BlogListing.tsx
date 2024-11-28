"use client";
import React, { useEffect, useState } from "react";
import MainHeading from "../atoms/MainHeading";
import { BlogSampleData } from "@/testdata/blog-data";
import Image from "next/image";
import Link from 'next/link';
import { useNavbar } from "@/context/contextApi";
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

// const data: BlogItemInterface[] = BlogSampleData;

const BlogItem = (props: BlogItemInterface) => {

  function sanitizeContent(content: string) {
    const sanitized = DOMPurify.sanitize(content, { FORBID_TAGS: ['img'] });
    return sanitized;
  }
  return (
    <div className="flex h-max min-w-[317px] flex-col gap-[15px] pb-3 ">
      <div className="relative min-h-[314px] w-full rounded-32 border-basic overflow-hidden">
        {/* Background Blur and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30 mix-blend-multiply z-10"></div>

        {/* Image */}
        <Image
          src={props.bannerImage}
          alt="Blog Item Background"
          fill
          className="object-cover rounded-32"
        />

        {/* Text */}
        <div className="absolute bottom-6 px-4 text-[30px] font-bold leading-[45px] text-white line-clamp-3 z-20">
          {props.title}
        </div>
      </div>

      <div className="line-clamp-2 overflow-hidden text-[18px] font-medium leading-[22px]  htmlBlogContent" dangerouslySetInnerHTML={{ __html: sanitizeContent(props?.content || '') }}>
      </div>
      <div className="text-sm font-normal leading-4">
        {props.author} {" . "} {props.createdAt.split("T")[0]}
      </div>
    </div>
  );
};

const BlogListing = () => {
  const { setSelectedTab } = useNavbar()
  const [blogDataArray, setBlogDataArray] = useState<BlogItemInterface[]>([]);




  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/blog/get-all`);
      setBlogDataArray(data?.data);
    })()
  }, [])



  return (

    <div className="lg:pl-[20px]">
      <MainHeading heading="Learn more ways to save" align="center" />
      <div className="mt-10 scrollbar-hidden flex flex-row w-full items-start justify-start gap-8 lg:gap-[50px] overflow-auto cursor-pointer pl-4 lg:pl-0">
        {blogDataArray?.map((blog, index) => {
          const slug = blog.title.toLowerCase().replace(/ /g, '-');

          return (
            <Link href={`/blog/${slug}`} key={index} onClick={() => setSelectedTab("Blog")}>
              <BlogItem
                title={blog.title}
                content={blog.content}
                author={blog.author}
                createdAt={blog.createdAt}
                bannerImage={blog.bannerImage}
                category={blog.category}
              />
            </Link>
          );
        })}
      </div>
    </div>

  );
};

export default BlogListing;
