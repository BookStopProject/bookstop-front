import { Button } from "@/components/Button";
import { useModal } from "@/components/Modal";
import { useUserBookEditor } from "@/components/UserBookEditor";
import type { UserBook } from "@/graphql/gql.gen";
import type { FC } from "react";
import UserBookInfoModal from "./UserBookInfoModal";

const UserBookActions: FC<{ userBook: UserBook }> = ({ userBook }) => {
  const setUserBookEditor = useUserBookEditor();
  const [visible, present, dismiss] = useModal();

  return (
    <>
      <div className="flex justify-center pb-4 space-x-2">
        <Button
          onClick={() =>
            setUserBookEditor({
              editingId: userBook.id,
            })
          }
          variant="tonal"
        >
          Edit
        </Button>
        <Button onClick={present} variant="tonal">
          Trade in
        </Button>
      </div>
      <UserBookInfoModal
        visible={visible}
        onDismiss={dismiss}
        userBook={userBook}
      />
    </>
  );
};

export default UserBookActions;
