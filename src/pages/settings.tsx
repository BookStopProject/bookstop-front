import SettingsPage from "@/page-components/Settings";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const SettingsNextPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Settings" />
      <SettingsPage />
    </>
  );
};

export default SettingsNextPage;
