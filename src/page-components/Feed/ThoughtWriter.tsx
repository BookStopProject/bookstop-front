import { AuthBanner } from "@/components/Auth";
import { Button } from "@/components/Button";
import { TextArea } from "@/components/Input";
import { Modal } from "@/components/Modal";
import type { User } from "@/graphql/gql.gen";
import {
  useMeQuery,
  useThoughtCreateMutation,
  useUserBooksQuery,
} from "@/graphql/gql.gen";
import type { FC, FormEventHandler } from "react";
import { useCallback, useRef } from "react";
import toast from "react-hot-toast";

const ThoughtWriterContent: FC<{ onDismiss(): void; me: User }> = ({
  onDismiss,
  me,
}) => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const bookIdRef = useRef<HTMLSelectElement>(null);
  const [{ data: dataUserBooks }] = useUserBooksQuery({
    variables: { mine: true },
  });
  const [{ fetching }, thoughtCreate] = useThoughtCreateMutation();

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (ev) => {
      ev.preventDefault();
      if (fetching) return;
      const text = textRef.current?.value.trim();
      if (!text) return;
      const result = await thoughtCreate({
        text,
        bookId: bookIdRef.current?.value || null,
      });
      if (!result.error) {
        toast.success("Thought has been published");
        onDismiss();
      }
    },
    [onDismiss, thoughtCreate, fetching]
  );
  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <TextArea
        ref={textRef}
        placeholder={`What are you thinking, ${me.name}?`}
        rows={4}
        maxLength={2000}
      />
      <select
        ref={bookIdRef}
        className="p-2 w-full"
        aria-label="Select a book to mention (optional)"
      >
        <option className="text-on-surface-variant" value="">
          Mention a book
        </option>
        {dataUserBooks?.userBooks.map((userBook) => (
          <option key={userBook.id} value={userBook.bookId}>
            {userBook.book.title} - {userBook.book.authors.join(", ")}
          </option>
        ))}
      </select>
      <Button fetching={fetching} className="w-full">
        Post
      </Button>
    </form>
  );
};

const ThoughtWriter: FC<{ visible: boolean; onDismiss(): void }> = ({
  visible,
  onDismiss,
}) => {
  const [{ data: dataMe }] = useMeQuery();
  return (
    <Modal title="Add a thought" visible={visible} onDismiss={onDismiss}>
      {dataMe?.me ? (
        <ThoughtWriterContent onDismiss={onDismiss} me={dataMe.me} />
      ) : (
        <AuthBanner title="Sign in to add a thought" />
      )}
    </Modal>
  );
};

export default ThoughtWriter;
