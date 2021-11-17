import type { UserBook } from "@/graphql/gql.gen";
import type { FC } from "react";
import UserBookActions from "./Actions";
import BookInfo from "./BookInfo";
import UserBookDates from "./UserBookDates";
import UserBookTimeline from "./UserBookTimeline";

const UserBookPage: FC<{ userBook: UserBook }> = ({ userBook }) => {
  return (
    <>
      <BookInfo userBook={userBook} />
      <UserBookActions userBook={userBook} />
      <UserBookDates userBook={userBook} />
      <UserBookTimeline userBook={userBook} />
    </>
  );
};

export default UserBookPage;
