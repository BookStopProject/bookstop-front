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
      <div className="overflow-hidden relative max-h-48">
        <ReactMarkdown className="leading-relaxed text-on-surface-variant">
          {book.description || "No description"}
        </ReactMarkdown>
        <div className="absolute bottom-0 py-4 w-full text-center bg-gradient-to-t from-background via-background to-transparent">
          <button
            onClick={present}
            className="px-4 text-sm font-medium bg-surface-1 hover:bg-surface-2 focus:bg-surface-2 rounded-full"
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
    <div className="flex flex-col md:flex-row py-4 px-2 mx-auto max-w-6xl">
      <div className="mx-auto md:mx-24 w-48 md:w-72">
        <BookItemImage book={book} />
      </div>
      <div className="md:flex-1 px-4 md:px-0">
        <header className="py-4 mb-4 text-center md:text-left">
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
