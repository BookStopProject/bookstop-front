import { useMeQuery } from "@/graphql/gql.gen";
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { createContext, useCallback, useContext, useState } from "react";
import { AuthBanner } from "../Auth";
import { Modal } from "../Modal";
import UserBookEditorAdder from "./UserBookEditorAdder";
import UserBookEditorUpdate from "./UserBookEditorUpdate";

type IUserBookEditorContext =
  | {
      addingBookId: string;
    }
  | { editingId: string }
  | null;

const Context = createContext(
  undefined as unknown as Dispatch<SetStateAction<IUserBookEditorContext>>
);

export const UserBookEditorWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<IUserBookEditorContext>(null);
  const onDismiss = useCallback(() => setValue(null), []);
  const [{ data: dataMe }] = useMeQuery();

  return (
    <Context.Provider value={setValue}>
      {children}
      <Modal
        title={
          value
            ? "addingBookId" in value
              ? "Add to my library"
              : "Edit my book"
            : ""
        }
        visible={!!value}
        onDismiss={onDismiss}
      >
        {dataMe?.me ? (
          <>
            {!!value && "addingBookId" in value && (
              <UserBookEditorAdder
                bookId={value.addingBookId}
                onDismiss={onDismiss}
              />
            )}
            {!!value && "editingId" in value && (
              <UserBookEditorUpdate
                editingId={value.editingId}
                onDismiss={onDismiss}
              />
            )}
          </>
        ) : (
          <AuthBanner title="Sign in to add to your library" />
        )}
      </Modal>
    </Context.Provider>
  );
};

export const useUserBookEditor = () => useContext(Context);
