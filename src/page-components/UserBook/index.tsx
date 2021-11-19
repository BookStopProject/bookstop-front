import type { UserBook } from "@/graphql/gql.gen";
import { useMeQuery } from "@/graphql/gql.gen";
import type { FC } from "react";
import UserBookActions from "./Actions";
import BookInfo from "./BookInfo";
import UserBookDates from "./UserBookDates";
import UserBookTimeline from "./UserBookTimeline";

const UserBookPage: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const [{ data: dataMe }] = useMeQuery();
  return (
    <>
      <BookInfo userBook={userBook} />
      {dataMe?.me?.id === userBook.userId && (
        <UserBookActions userBook={userBook} />
      )}
      <UserBookDates userBook={userBook} />
      <UserBookTimeline userBook={userBook} />
    </>
  );
};

export default UserBookPage;
