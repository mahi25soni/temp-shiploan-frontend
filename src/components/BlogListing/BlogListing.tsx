"use client";
import React, { useEffect, useState } from "react";
import MainHeading from "../atoms/MainHeading";
import { BlogSampleData } from "@/testdata/blog-data";
import Image from "next/image";
import Link from 'next/link';
import { useNavbar } from "@/context/contextApi";

interface BlogItemInterface {
  blog_title: string;
  blog_content: string;
  author: string;
  date: string;
}

const data: BlogItemInterface[] = BlogSampleData;

const BlogItem = (props: BlogItemInterface) => {
  return (
    <div className="flex h-[423px] min-w-[317px] flex-col gap-[25px]">
      <div className="relative h-[314px] w-full rounded-32 border-basic">
        <Image
          src="/blogbg1.svg"
          alt="Blog Item Background"
          fill
          className="object-fill"
        ></Image>
        <div className="absolute bottom-6 pl-6 text-5xl font-bold leading-[45px] text-white line-clamp-3 pr-1">
          {props.blog_title}
        </div>
      </div>
      <div className="line-clamp-2 text-[18px] font-bold leading-[22px]">
        {props.blog_content}
      </div>
      <div className="text-sm font-normal leading-4">
        {props.author} {" . "} {props.date}
      </div>
    </div>
  );
};

const BlogListing = () => {
  const {setSelectedTab} = useNavbar()
  const [blogDataArray, setBlogDataArray] = useState<BlogItemInterface[]>(data);

  useEffect(() => {
    setBlogDataArray(data);
  }, []);
  return (

    <div className="lg:pl-[152px]">
      <MainHeading heading="Learn more ways to save" />
      <div className="mt-10 pl-8 scrollbar-hidden flex flex-row w-full items-center justify-start gap-8 lg:gap-[90px] overflow-auto lg:pl-0 cursor-pointer">
        {blogDataArray?.map((blog, index) => {
          const slug = blog.blog_title.toLowerCase().replace(/ /g, '-');

          return (
            <Link href={`/blog/${slug}`} key={index} onClick={() => setSelectedTab("Blog")}>
              <BlogItem
                blog_title={blog.blog_title}
                blog_content={blog.blog_content}
                author={blog.author}
                date={blog.date}
              />
            </Link>
          );
        })}
      </div>
    </div>

  );
};

export default BlogListing;
