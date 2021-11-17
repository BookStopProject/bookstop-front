import MyLibraryPage from "@/page-components/MyLibrary";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const MyLibraryNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="My Library" />
      <MyLibraryPage />
    </>
  );
};

export default MyLibraryNextPage;
