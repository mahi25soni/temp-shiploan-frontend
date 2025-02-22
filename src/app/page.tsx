import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./home/page"));

export default function Home() {
  return <HomePage />;
}
