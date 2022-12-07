import { Avatar } from "@/components/Avatar";
import { BookItemImage } from "@/components/Book";
import type { UserBook } from "@/graphql/gql.gen";
import Link from "next/link";
import type { FC } from "react";

const BookInfo: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const book = userBook.book;
  if (!book || !userBook.user) return null;
  return (
    <div className="container flex flex-col py-4 px-2 mx-auto max-w-6xl">
      <div className="mx-auto w-48">
        <BookItemImage book={book} />
      </div>
      <header className="pt-4 text-center">
        <Link href={`/user/${userBook.userId}`}>
          <a className="flex justify-center items-center mb-2">
            <Avatar
              size={6}
              src={userBook.user.profilePicture}
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
            <h1 className="mb-1.5 text-2xl font-bold leading-tight">
              {book.title}
            </h1>
          </a>
        </Link>
        <div className="text-on-surface-variant">{book.author?.name}</div>
      </header>
    </div>
  );
};

export default BookInfo;
