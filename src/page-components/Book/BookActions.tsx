import { Button } from "@/components/Button";
import { useUserBookEditor } from "@/components/UserBookEditor";
import type { Book } from "@/graphql/gql.gen";
import type { FC } from "react";

const BookActions: FC<{ book: Book }> = ({ book }) => {
  const setUserBookEditor = useUserBookEditor();
  return (
    <>
      <div className="flex justify-center md:justify-start py-4 space-x-2">
        <Button variant="filled">Exchange</Button>
        <Button
          onClick={() =>
            setUserBookEditor({
              addingBookId: book.id,
            })
          }
          variant="tonal"
        >
          Add to my library
        </Button>
      </div>
    </>
  );
};

export default BookActions;
