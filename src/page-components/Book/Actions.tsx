import { Button } from "@/components/Button";
import { useUserBookEditor } from "@/components/UserBookEditor";
import type { Book } from "@/graphql/gql.gen";
import type { FC } from "react";

const BookActions: FC<{ book: Book }> = ({ book }) => {
  const setUserBookEditor = useUserBookEditor();
  return (
    <div className="flex justify-center py-4 space-x-2 md:justify-start">
      <Button variant="filled">Exchange</Button>
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
  );
};

export default BookActions;
