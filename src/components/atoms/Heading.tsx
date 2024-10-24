import React from "react";

interface HeadingProps {
  heading: string;
  align?: "left" | "center" | "right";
}
const Heading = (data: HeadingProps) => {
  return (
    <div
      className="xl:leading[72px] text-center text-[32px] font-bold leading-[48px] xl:text-left xl:text-[48px]"
      style={{
        textAlign: data?.align,
      }}
    >
      {data?.heading}
    </div>
  );
};

export default Heading;
