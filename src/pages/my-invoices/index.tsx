import MyInvoicesPage from "@/page-components/MyInvoices";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const MyInvoicesNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="My Invoices" />
      <MyInvoicesPage />
    </>
  );
};

export default MyInvoicesNextPage;
