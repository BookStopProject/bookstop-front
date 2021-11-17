import { PageTitle } from "@/components/Typography";
import type { FC } from "react";

const EventsPage: FC = () => {
  return (
    <div className="container">
      <PageTitle>Events</PageTitle>
      <p className="text-center">Cannot find any events</p>
    </div>
  );
};

export default EventsPage;
