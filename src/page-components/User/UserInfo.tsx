import { Avatar } from "@/components/Avatar";
import type { User } from "@/graphql/gql.gen";
import type { FC } from "react";

const UserInfo: FC<{ user: User }> = ({ user }) => {
  return (
    <div className="container flex flex-col items-center py-8">
      <Avatar size={36} src={user.profilePicture} username={user.name} />
      <h1 className="mt-4 mb-2 text-2xl font-bold">{user.name}</h1>
      <p className="text-on-surface-variant">{user.bio}</p>
    </div>
  );
};

export default UserInfo;
