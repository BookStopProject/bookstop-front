import { Button } from "@/components/Button";
import { useUserBookEditor } from "@/components/UserBookEditor";
import type { UserBook } from "@/graphql/gql.gen";
import type { FC } from "react";

const UserBookActions: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const setUserBookEditor = useUserBookEditor();
  return (
    <>
      <div className="flex justify-center pb-4 space-x-2">
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
      </div>
    </>
  );
};

export default UserBookActions;
