import type { UserBook } from "@/graphql/gql.gen";
import { IconClock } from "@tabler/icons";
import type { FC } from "react";
import { useMemo } from "react";
import { Avatar } from "../Avatar";
import { BookItemImage } from "../Book";
import { Card } from "../Card";

const dtf = new Intl.DateTimeFormat();

const UserBookItem: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const book = userBook.book;
  const startText = useMemo(() => {
    if (!userBook.startedAt) return "Unstarted";
    return dtf.format(new Date(userBook.startedAt));
  }, [userBook.startedAt]);
  const endText = useMemo(() => {
    if (!userBook.endedAt) return "Unfinshed";
    return dtf.format(new Date(userBook.endedAt));
  }, [userBook.endedAt]);
  return (
    <Card variant="filled" className="flex p-2 bg-surface-1">
      <div className="mr-2 w-36">
        <BookItemImage book={book} />
      </div>
      <div className="flex-1 p-2">
        <div className="flex items-center mb-1">
          <Avatar
            size={6}
            src={userBook.user.profileImageUrl}
            username={userBook.user.name}
          />
          <span className="ml-1 text-sm">
            {userBook.user.name}
            <span className="opacity-75">{"'s"}</span>
          </span>
        </div>
        <h3 className="text-xl font-medium">{book.title}</h3>
        <p className="mb-2 text-on-surface-variant">
          {book.authors.join(", ")}
        </p>
        <div>
          <span className="text-sm text-on-surface-variant">Read from</span>
          <div className="flex items-center text-sm text-on-surface-variant">
            <IconClock className="mr-1" width={18} />
            <div>
              {startText} - {endText}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserBookItem;
