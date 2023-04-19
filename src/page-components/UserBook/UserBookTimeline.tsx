import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/Card";
import type { User, UserBook } from "@/graphql/gql.gen";
import type { FC } from "react";

const ExchangeBlockUser: FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex items-center">
      <Avatar size={8} src={user.profilePicture} username={user.name} />
      <span className="ml-1 text-sm">{user.name}</span>
    </div>
  );
};

const ExchangeBlock: FC<{ user: User }> = ({ user }) => {
  return (
    <Card variant="filled">
      <div className="flex items-center space-x-4">
        <ExchangeBlockUser user={user} />
      </div>
    </Card>
  );
};

const UserBookTimeline: FC<{ userBook: UserBook }> = ({ userBook }) => {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center text-xl font-light text-secondary">
        All Owners
      </h2>
      <div className="mx-auto max-w-md space-y-4">
        {userBook.owners.map((user) => (
          <ExchangeBlock key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserBookTimeline;
