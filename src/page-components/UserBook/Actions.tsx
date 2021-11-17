import { Button } from "@/components/Button";
import { useUserBookEditor } from "@/components/UserBookEditor";
import type { UserBook } from "@/graphql/gql.gen";
import { useMeQuery } from "@/graphql/gql.gen";
import { useRouter } from "next/router";
import type { FC } from "react";

const UserBookActions: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const setUserBookEditor = useUserBookEditor();
  const router = useRouter();
  const [{ data: dataMe }] = useMeQuery();
  return (
    <div className="flex justify-center pb-4 space-x-2">
      <Button
        onClick={() => router.push(`/book/${userBook.bookId}`)}
        variant="filled"
      >
        View Book
      </Button>
      {dataMe?.me?.id === userBook.userId && (
        <Button
          onClick={() =>
            setUserBookEditor({
              editingId: userBook.id,
            })
          }
          variant="ghost"
        >
          Edit
        </Button>
      )}
    </div>
  );
};

export default UserBookActions;
