import { PageTitle } from "@/components/Typography";
import type { Event } from "@/graphql/gql.gen";
import { useEventsQuery } from "@/graphql/gql.gen";
import { IconClock, IconLoader } from "@tabler/icons";
import Link from "next/link";
import type { FC } from "react";

const EventItem: FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h2 className="text-xl font-black">{event.title}</h2>
      <p className="mb-2 text-opacity-75 text-foreground">
        Organized by{" "}
        <Link href={`/user/${event.user.id}`}>
          <a className="text-primary hover:text-primary-dark">
            {event.user.name}
          </a>
        </Link>
      </p>
      <p className="mb-2">{event.description}</p>
      <div className="flex justify-between text-sm">
        <div className="flex items-center space-x-1 text-opacity-75 text-foreground">
          <IconClock width={18} height={18} />
          <time>{event.startedAt.toLocaleDateString()}</time>
          <span>-</span>
          <time>{event.endedAt.toLocaleDateString()}</time>
        </div>
        <a
          target="_blank"
          className="text-primary hover:text-primary-dark"
          href={event.href}
          rel="noreferrer"
        >
          See Detail
        </a>
      </div>
    </div>
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
        <div className="space-y-2">
          {data?.events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
