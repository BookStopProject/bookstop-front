import FeedPage from "@/page-components/Feed";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const FeedNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Feed" />
      <FeedPage />
    </>
  );
};

export default FeedNextPage;
