import MyTradeinsPage from "@/page-components/MyTradeins";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const MyTradeinsNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="My Tradeins" />
      <MyTradeinsPage />
    </>
  );
};

export default MyTradeinsNextPage;
