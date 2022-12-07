import {
  useUserBookDeleteMutation,
  useUserBookEditMutation,
  useUserBookQuery,
} from "@/graphql/gql.gen";
import { IconLoader } from "@tabler/icons";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../Button";
import UserBookEditorDate from "./UserBookEditorDate";

const UserBookEditorUpdate: FC<{ editingId: string; onDismiss(): void }> = ({
  editingId,
  onDismiss,
}) => {
  const [{ fetching: fetchingGet, data: dataGet }] = useUserBookQuery({
    variables: {
      id: editingId,
    },
  });

  const [{ fetching: fetchingEdit }, userBookEdit] = useUserBookEditMutation();
  const [{ fetching: fetchingDelete }, userBookDelete] =
    useUserBookDeleteMutation();

  const [start, setStart] = useState<string | undefined>(undefined);
  const [end, setEnd] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!dataGet?.userBook) return;
    setStart(dataGet.userBook.startDate || undefined);
    setEnd(dataGet.userBook.endDate || undefined);
  }, [dataGet]);

  const onSubmit = useCallback(async () => {
    const result = await userBookEdit({
      id: editingId,
      startDate: start || null,
      endDate: end || null,
    });
    if (!result.error) {
      toast.success("Library book updated");
      onDismiss();
    }
  }, [userBookEdit, editingId, start, end, onDismiss]);

  const router = useRouter();
  const onDelete = useCallback(async () => {
    const result = await userBookDelete({
      id: editingId,
    });
    if (!result.error) {
      toast.success("Library book removed");
      onDismiss();
      router.replace("/my-library");
    }
  }, [router, userBookDelete, editingId, onDismiss]);

  if (fetchingGet) {
    return (
      <div>
        <IconLoader className="animate-spin" />
      </div>
    );
  }

  if (!dataGet?.userBook) {
    return (
      <div>
        <p>Error: Cannot find user book</p>
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
        bookName={dataGet.userBook.book?.title || ""}
      />
      <Button
        onClick={onSubmit}
        fetching={fetchingEdit}
        variant="filled"
        className="mt-4 w-full"
      >
        Save
      </Button>
      <Button
        onClick={onDelete}
        fetching={fetchingDelete}
        variant="tonal"
        className="mt-2 w-full"
      >
        Remove
      </Button>
    </div>
  );
};

export default UserBookEditorUpdate;
