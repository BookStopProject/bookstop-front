import type { Book } from "@/graphql/gql.gen";
import {
  useBookQuery,
  useMeQuery,
  useUserBookAddMutation,
  useUserBooksQuery,
} from "@/graphql/gql.gen";
import { IconLoader } from "@tabler/icons";
import type { FC } from "react";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../Button";
import UserBookEditorDate from "./UserBookEditorDate";

const UserBookEditorAdder: FC<{ bookId: Book["id"]; onDismiss(): void }> = ({
  bookId,
  onDismiss,
}) => {
  const [{ fetching: fetchingGet, data: dataGet }] = useBookQuery({
    variables: {
      id: String(bookId),
    },
  });

  const [{ data: dataMe }] = useMeQuery();

  const [{ data: dataUserBooks, fetching: fetchingUserBooks }] =
    useUserBooksQuery({
      variables: { userId: dataMe?.me?.id },
      pause: !dataMe?.me?.id,
    });

  const [{ fetching }, userBookAdd] = useUserBookAddMutation();

  const [start, setStart] = useState<string | undefined>(
    () => new Date().toISOString().split("T")[0]
  );
  const [end, setEnd] = useState<string | undefined>(undefined);

  const onSubmit = useCallback(async () => {
    if (
      dataUserBooks?.userBooks.some(
        (userBook) => userBook.bookId === Number(bookId)
      )
    ) {
      if (
        window.confirm(
          "You've already added this book. Do you want to add it again?"
        ) === false
      ) {
        return;
      }
    }

    const result = await userBookAdd({
      bookId,
      startDate: start || null,
      endDate: end || null,
    });
    if (!result.error) {
      toast.success("Added to My library");
      onDismiss();
    }
  }, [dataUserBooks, userBookAdd, bookId, start, end, onDismiss]);

  if (fetchingGet) {
    return <IconLoader className="mx-auto animate-spin" />;
  }

  if (!dataGet?.book) {
    return (
      <div>
        <p>Error: Cannot find book</p>
      </div>
    );
  }

  return (
    <div>
      <UserBookEditorDate
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        bookName={dataGet.book.title}
      />
      <Button
        onClick={onSubmit}
        fetching={fetching || fetchingUserBooks}
        variant="filled"
        className="mt-4 w-full"
      >
        Add to my library
      </Button>
    </div>
  );
};

export default UserBookEditorAdder;
