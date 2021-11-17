import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const NotFoundNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Not Found" noindex />
      <div className="container pt-24">
        <h1 className="text-center">
          <span className="block text-6xl font-bold">404</span>
          <span className="opacity-75">Sorry, this page cannot be found.</span>
        </h1>
      </div>
    </>
  );
};

export default NotFoundNextPage;
