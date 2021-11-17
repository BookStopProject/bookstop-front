import { Modal } from "@/components/Modal";
import type { Book } from "@/graphql/gql.gen";
import type { FC } from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import BookActions from "./Actions";

const BookDescription: FC<{ book: Book }> = ({ book }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="overflow-hidden relative max-h-48">
        <div className="font-serif text-opacity-75 text-foreground">
          <ReactMarkdown>{book.description}</ReactMarkdown>
        </div>
        <div className="absolute bottom-0 py-4 w-full text-center bg-gradient-to-t to-transparent from-background via-background">
          <button onClick={() => setExpanded(true)} className="hover:underline">
            Read more
          </button>
        </div>
      </div>
      <Modal
        visible={expanded}
        title={book.title}
        onDismiss={() => setExpanded(false)}
      >
        <ReactMarkdown className="font-serif">{book.description}</ReactMarkdown>
      </Modal>
    </>
  );
};

const BookHead: FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="flex flex-col py-4 px-2 mx-auto max-w-6xl md:flex-row">
      <div className="mx-auto w-48 md:w-72 md:mx-24">
        <div className="overflow-hidden rounded bg-background-secondary aspect-regular">
          <img
            src={book.imageUrl || "/images/book-default.svg"}
            alt={`Title: ${book.title}, Author: ${book.authors.join(", ")}`}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="px-4 md:flex-1 md:px-0">
        <header className="py-4 mb-4 text-center md:text-left">
          <h1 className="font-serif text-3xl mb-1.5">{book.title}</h1>
          <div className="text-primary-dark">{book.authors.join(", ")}</div>
        </header>
        <BookDescription book={book} />
        <BookActions book={book} />
      </div>
    </div>
  );
};

export default BookHead;
