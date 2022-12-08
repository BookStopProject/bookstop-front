import CheckoutPage from "@/page-components/checkout";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const CheckoutNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Check out" />
      <CheckoutPage />
    </>
  );
};

export default CheckoutNextPage;
