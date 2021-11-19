import { Button } from "@/components/Button";
import { useUserBookEditor } from "@/components/UserBookEditor";
import type { Book } from "@/graphql/gql.gen";
import type { FC } from "react";
import { useState } from "react";
import BookExchanger from "./BookExchanger";

const BookActions: FC<{ book: Book }> = ({ book }) => {
  const setUserBookEditor = useUserBookEditor();
  const [showExchange, setShowExchange] = useState(false);
  return (
    <>
      <div className="flex justify-center py-4 space-x-2 md:justify-start">
        <Button variant="filled" onClick={() => setShowExchange(true)}>
          Exchange
        </Button>
        <Button
          onClick={() =>
            setUserBookEditor({
              addingBookId: book.id,
            })
          }
          variant="ghost"
        >
          Add to my library
        </Button>
      </div>
      <BookExchanger
        visible={showExchange}
        onDismiss={() => setShowExchange(false)}
        book={book}
      />
    </>
  );
};

export default BookActions;
