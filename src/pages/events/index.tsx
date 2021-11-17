import CONFIG from "@/config";
import EventsPage from "@/page-components/Event";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const EventsNextPage: NextPage = () => {
  return (
    <>
      <NextSeo canonical={`${CONFIG.APP_URI}/events`} title="Events" />
      <EventsPage />
    </>
  );
};

export default EventsNextPage;
