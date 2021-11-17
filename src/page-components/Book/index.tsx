import type { Book } from "@/graphql/gql.gen";
import type { FC } from "react";
import BookHead from "./Head";

const BookPage: FC<{ book: Book }> = ({ book }) => {
  return (
    <>
      <BookHead book={book} />
    </>
  );
};

export default BookPage;
