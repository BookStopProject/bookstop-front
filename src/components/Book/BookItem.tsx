import type { Book } from "@/graphql/gql.gen";
import type { FC } from "react";

interface BookItemProps {
  book: Book;
}

const BookItem: FC<BookItemProps> = ({ book }) => {
  return (
    <div className="relative">
      <div
        hidden={!!book.imageUrl}
        className="absolute bottom-0 left-0 z-10 w-full py-1 text-center"
      >
        <p className="font-bold text-foreground">{book.title}</p>
        <p className="text-sm text-opacity-75 text-foreground">
          {book.authors.join(", ")}
        </p>
      </div>
      <div className="overflow-hidden rounded bg-background-secondary aspect-regular">
        <img
          src={book.imageUrl || "/images/book-default.svg"}
          alt={`Title: ${book.title}, Author: ${book.authors.join(", ")}`}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default BookItem;
