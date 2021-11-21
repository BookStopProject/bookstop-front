import type { Book } from "@/graphql/gql.gen";
import type { FC } from "react";
import BookHead from "./BookHead";

const BookPage: FC<{ book: Book }> = ({ book }) => {
  return (
    <>
      <BookHead book={book} />
    </>
  );
};

export default BookPage;
