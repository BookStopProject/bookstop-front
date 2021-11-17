import type { UserBook } from "@/graphql/gql.gen";
import type { FC } from "react";

const UserBookTimeline: FC<{ userBook: UserBook }> = () => {
  return (
    <div className="container py-4">
      <h2 className="text-xl font-light text-center text-secondary">
        Timeline
      </h2>
    </div>
  );
};

export default UserBookTimeline;
