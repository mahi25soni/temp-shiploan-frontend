import React from "react";

interface HeadingProps {
  heading: string;
  align?: "left" | "center" | "right";
}
const MainHeading = (data: HeadingProps) => {
  return (
    <div
      className="m-auto max-w-[350px] text-center text-[32px] font-bold leading-[48px] lg:m-0 lg:max-w-full lg:text-left lg:text-[48px] lg:leading-[72px]"
      style={{
        textAlign: data?.align,
      }}
    >
      {data?.heading}
    </div>
  );
};

export default MainHeading;
