import { BookItemImage } from "@/components/Book";
import { Modal, useModal } from "@/components/Modal";
import type { Book } from "@/graphql/gql.gen";
import type { FC } from "react";
import ReactMarkdown from "react-markdown";
import BookActions from "./BookActions";

const BookDescription: FC<{ book: Book }> = ({ book }) => {
  const [visible, present, dismiss] = useModal();
  return (
    <>
      <div className="relative max-h-48 overflow-hidden">
        <ReactMarkdown className="leading-relaxed text-on-surface-variant">
          {book.description || "No description"}
        </ReactMarkdown>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-background via-background to-transparent py-4 text-center">
          <button
            onClick={present}
            className="rounded-full bg-surface-1 px-4 text-sm font-medium hover:bg-surface-2 focus:bg-surface-2"
          >
            Read more
          </button>
        </div>
      </div>
      <Modal visible={visible} title={book.title} onDismiss={dismiss}>
        <ReactMarkdown className="leading-relaxed">
          {book.description || "No description"}
        </ReactMarkdown>
      </Modal>
    </>
  );
};

const BookHead: FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col px-2 py-4 md:flex-row">
      <div className="mx-auto w-48 md:mx-24 md:w-72">
        <BookItemImage book={book} />
      </div>
      <div className="px-4 md:flex-1 md:px-0">
        <header className="mb-4 py-4 text-center md:text-left">
          <h1 className="mb-1.5 text-2xl font-bold leading-tight">
            {book.title}
          </h1>
          <div className="text-on-surface-variant">{book.author?.name}</div>
        </header>
        <BookDescription book={book} />
        <BookActions book={book} />
      </div>
    </div>
  );
};

export default BookHead;
