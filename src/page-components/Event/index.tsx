import { Card } from "@/components/Card";
import { A, PageTitle } from "@/components/Typography";
import type { Event } from "@/graphql/gql.gen";
import { useEventsQuery } from "@/graphql/gql.gen";
import { IconClock, IconLoader } from "@tabler/icons";
import Link from "next/link";
import type { FC } from "react";

const EventItem: FC<{ event: Event }> = ({ event }) => {
  return (
    <Card>
      <h2 className="text-xl font-black">{event.title}</h2>
      <p className="mb-2 text-on-surface-variant">
        Organized by{" "}
        <Link href={`/user/${event.user.id}`} passHref>
          <A>{event.user.name}</A>
        </Link>
      </p>
      <p className="mb-6">{event.description}</p>
      <div className="flex justify-between text-sm">
        <div className="flex items-center space-x-1 text-on-surface-variant">
          <IconClock width={18} height={18} />
          <time>{event.startedAt.toLocaleDateString()}</time>
          <span>-</span>
          <time>{event.endedAt.toLocaleDateString()}</time>
        </div>
        <A target="_blank" href={event.href} rel="noreferrer">
          See Detail
        </A>
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
        <div className="mx-auto space-y-4 max-w-3xl">
          {data?.events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
