import { Avatar } from "@/components/Avatar";
import type { UserBook } from "@/graphql/gql.gen";
import Link from "next/link";
import type { FC } from "react";

const BookInfo: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const book = userBook.book;
  return (
    <div className="container flex flex-col py-4 px-2 mx-auto max-w-6xl">
      <div className="mx-auto w-48">
        <div className="overflow-hidden rounded bg-background-secondary aspect-regular">
          <img
            src={book.imageUrl || "/images/book-default.svg"}
            alt={`Title: ${book.title}, Author: ${book.authors.join(", ")}`}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <header className="pt-4 text-center">
        <Link href={`/user/${userBook.userId}`}>
          <a className="flex justify-center items-center">
            <Avatar
              size={6}
              src={userBook.user.profileImageUrl}
              username={userBook.user.name}
            />
            <span className="ml-1">
              {userBook.user.name}
              <span className="opacity-75">{"'s"}</span>
            </span>
          </a>
        </Link>
        <Link href={`/book/${book.id}`}>
          <a>
            <h1 className="font-serif text-3xl mb-1.5">{book.title}</h1>
          </a>
        </Link>
        <div className="text-opacity-75 text-foreground">
          {book.authors.join(", ")}
        </div>
      </header>
    </div>
  );
};

export default BookInfo;
