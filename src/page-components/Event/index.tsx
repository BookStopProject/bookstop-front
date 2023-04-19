import { Card } from "@/components/Card";
import { PageTitle } from "@/components/Typography";
import type { Event } from "@/graphql/gql.gen";
import { useEventsQuery } from "@/graphql/gql.gen";
import { IconClock, IconLoader } from "@tabler/icons-react";
import type { FC } from "react";

const EventItem: FC<{ event: Event }> = ({ event }) => {
  return (
    <Card>
      <h2 className="text-xl font-black">{event.name}</h2>
      <p className="mb-6">{event.description}</p>
      <div className="flex justify-between text-sm">
        <div className="flex items-center space-x-1 text-on-surface-variant">
          <IconClock width={18} height={18} />
          <time>{event.startTime.toLocaleDateString()}</time>
          <span>-</span>
          <time>{event.endTime.toLocaleDateString()}</time>
        </div>
      </div>
    </Card>
  );
};

const EventsPage: FC = () => {
  const [{ data, fetching }] = useEventsQuery();

  return (
    <div className="container">
      <PageTitle>Events</PageTitle>
      {fetching ? (
        <span className="animate-spin">
          <IconLoader />
        </span>
      ) : (
        <div className="mx-auto max-w-3xl space-y-4">
          {data?.events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
