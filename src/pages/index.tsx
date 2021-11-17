import HomePage from "@/page-components/Home";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const HomeNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <HomePage />
    </>
  );
};

export default HomeNextPage;
