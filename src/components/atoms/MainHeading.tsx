import React from "react";

interface HeadingProps {
  heading: string;
  align?: "left" | "center" | "right";
}
const MainHeading = (data: HeadingProps) => {
  return (
<div
  className="lg:leading-[72px] text-center text-[32px] font-bold leading-[48px] lg:text-left lg:text-[48px] max-w-[300px] m-auto lg:m-0 lg:max-w-full"
  style={{
    textAlign: data?.align,
  }}
>
  {data?.heading}
</div>
  );
};

export default MainHeading;
