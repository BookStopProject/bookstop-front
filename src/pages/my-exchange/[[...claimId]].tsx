import MyExchangePage from "@/page-components/MyExchange";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const MyExchangeNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="My Exchanges" />
      <MyExchangePage />
    </>
  );
};

export default MyExchangeNextPage;
