import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Articles from "@/components/Articles";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Blog",
  description: "...",
};

export default function Home() {
  return (
    <>
      <Banner />
      <Feature />
      <Articles />
      <Feature />
      <Newsletter />
    </>
  );
}
