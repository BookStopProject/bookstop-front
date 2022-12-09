import type { UserBook } from "@/graphql/gql.gen";
import type { FC } from "react";
import { useMemo } from "react";

const dtf = new Intl.DateTimeFormat();

const UserBookDates: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const startText = useMemo(() => {
    if (!userBook.startDate) return "Unstarted";
    return dtf.format(new Date(userBook.startDate));
  }, [userBook.startDate]);
  const endText = useMemo(() => {
    if (!userBook.endDate) return "Unfinished";
    return dtf.format(new Date(userBook.endDate));
  }, [userBook.endDate]);

  return (
    <div className="container py-4">
      <h2 className="mb-2 text-xl font-light text-center text-secondary">
        Read from
      </h2>
      <p className="text-lg text-center text-on-surface-variant">
        {startText} - {endText}
      </p>
    </div>
  );
};

export default UserBookDates;
