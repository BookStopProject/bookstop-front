import type { UserBook } from "@/graphql/gql.gen";
import { IconClock } from "@tabler/icons";
import type { FC } from "react";
import { useMemo } from "react";

const dtf = new Intl.DateTimeFormat();

const UserBookItem: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const book = userBook.book;
  const startText = useMemo(() => {
    if (!userBook.startedAt) return "?";
    return dtf.format(new Date(userBook.startedAt));
  }, [userBook.startedAt]);
  const endText = useMemo(() => {
    if (!userBook.endedAt) return "?";
    return dtf.format(new Date(userBook.endedAt));
  }, [userBook.endedAt]);
  return (
    <div className="flex">
      <img
        className="w-36"
        src={book.imageUrl || "/images/book-default.svg"}
        alt={`Title: ${book.title}, Author: ${book.authors.join(", ")}`}
      />
      <div className="flex-1 p-2">
        <h3 className="font-serif text-2xl">{book.title}</h3>
        <p className="mb-2 text-opacity-75 text-foreground">
          {book.authors.join(", ")}
        </p>
        <div>
          <span className="text-sm text-opacity-50 text-foreground">
            Read from
          </span>
          <div className="flex items-center text-sm text-opacity-75 text-foreground">
            <IconClock className="mr-1" width={18} />
            <div>
              {startText} - {endText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookItem;
