import type { UserBook } from "@/graphql/gql.gen";
import type { FC } from "react";
import { useMemo } from "react";

const dtf = new Intl.DateTimeFormat();

const UserBookDates: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const startText = useMemo(() => {
    if (!userBook.startedAt) return "?";
    return dtf.format(new Date(userBook.startedAt));
  }, [userBook.startedAt]);
  const endText = useMemo(() => {
    if (!userBook.endedAt) return "?";
    return dtf.format(new Date(userBook.endedAt));
  }, [userBook.endedAt]);

  return (
    <div className="container py-4">
      <h2 className="text-xl font-light text-center text-secondary">
        Read from
      </h2>
      <p className="text-lg font-light text-center">
        {startText} - {endText}
      </p>
    </div>
  );
};

export default UserBookDates;
