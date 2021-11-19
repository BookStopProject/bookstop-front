import MyExchangePage from "@/page-components/MyExchange";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const MyExchangeNextPage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo title="My Exchanges" />
      <MyExchangePage claimId={router.query.claimId?.[0]} />
    </>
  );
};

export default MyExchangeNextPage;
