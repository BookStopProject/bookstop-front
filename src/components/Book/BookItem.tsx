import type { Book } from "@/graphql/gql.gen";
import clsx from "clsx";
import type { FC } from "react";

interface BookItemProps {
  book: Book;
}

export const BookItemImage: FC<{ book: Book; short?: boolean }> = ({
  book,
  short,
}) => (
  <div
    className={clsx(
      "overflow-hidden bg-surface-2 rounded-lg",
      short ? "aspect-regular-short" : "aspect-regular"
    )}
  >
    <img
      src={book.imageUrl || "/images/book-default.svg"}
      alt={`Title: ${book.title}, Author: ${book.authors.join(", ")}`}
      className="object-cover"
    />
  </div>
);

export const BookItemMeta: FC<{ book: Book; className?: string }> = ({
  book,
  className,
}) => {
  return (
    <div className={className}>
      <p className="font-medium leading-tight text-on-surface line-clamp-2">
        {book.title}
      </p>
      <p className="mt-1 text-sm leading-tight text-on-surface-variant truncate">
        {book.authors.join(", ")}
      </p>
    </div>
  );
};

const BookItem: FC<BookItemProps> = ({ book }) => {
  return (
    <div className="relative">
      <BookItemImage book={book} short />
      <BookItemMeta book={book} className="mt-3 h-16" />
    </div>
  );
};

export default BookItem;
