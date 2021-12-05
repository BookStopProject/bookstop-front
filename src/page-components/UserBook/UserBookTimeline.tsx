import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/Card";
import type { Exchange, User, UserBook } from "@/graphql/gql.gen";
import { useExchangesQuery } from "@/graphql/gql.gen";
import { IconArrowNarrowRight, IconLoader } from "@tabler/icons";
import type { FC } from "react";

const ExchangeBlockUser: FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex items-center">
      <Avatar size={8} src={user.profileImageUrl} username={user.name} />
      <span className="ml-1 text-sm">{user.name}</span>
    </div>
  );
};

const ExchangeBlock: FC<{ exchange: Exchange }> = ({ exchange }) => {
  return (
    <Card variant="filled">
      <div className="flex items-center space-x-4">
        <ExchangeBlockUser user={exchange.userBookOld.user} />
        <IconArrowNarrowRight className="text-secondary" />
        <ExchangeBlockUser user={exchange.userBookNew.user} />
      </div>
      <div className="mt-2 text-sm text-on-surface-variant">
        Exchanged on{" "}
        <time className="font-medium text-on-surface">
          {exchange.exchangedAt.toLocaleDateString()}
        </time>
      </div>
    </Card>
  );
};

const UserBookTimeline: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const [{ data, fetching }] = useExchangesQuery({
    variables: {
      userBookId: userBook.originalUserBookId || userBook.id,
    },
  });
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-xl font-light text-center text-secondary">
        Timeline
      </h2>
      {fetching ? (
        <IconLoader className="mx-auto animate-spin" />
      ) : data?.exchanges.length ? (
        <div className="mx-auto space-y-4 max-w-md">
          {data.exchanges.map((exchange) => (
            <ExchangeBlock key={exchange.id} exchange={exchange} />
          ))}
        </div>
      ) : (
        <p className="text-center text-on-surface-variant">No exchanges</p>
      )}
    </div>
  );
};

export default UserBookTimeline;
