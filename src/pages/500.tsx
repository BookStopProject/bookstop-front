import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const ErrorNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Error" noindex />
      <div className="container pt-24">
        <h1 className="text-center">
          <span className="block text-6xl font-bold">500</span>
          <span className="opacity-75">Something is broken!</span>
        </h1>
      </div>
    </>
  );
};

export default ErrorNextPage;
