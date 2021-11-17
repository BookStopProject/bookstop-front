import SearchPage from "@/page-components/Search";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const SearchNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Search" />
      <SearchPage />
    </>
  );
};

export default SearchNextPage;
