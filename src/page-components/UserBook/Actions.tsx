import { Button } from "@/components/Button";
import { useUserBookEditor } from "@/components/UserBookEditor";
import type { UserBook } from "@/graphql/gql.gen";
import type { FC } from "react";
import { useState } from "react";
import UserBookInfoModal from "./UserBookInfoModal";

const UserBookActions: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const setUserBookEditor = useUserBookEditor();
  const [visible, setVisible] = useState(false);
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
        <Button onClick={() => setVisible(true)} variant="ghost">
          Check in
        </Button>
      </div>
      <UserBookInfoModal
        visible={visible}
        onDismiss={() => setVisible(false)}
        userBook={userBook}
      />
    </>
  );
};

export default UserBookActions;
