import { AuthBanner } from "@/components/Auth";
import { Button } from "@/components/Button";
import { TextArea } from "@/components/Input";
import { Modal } from "@/components/Modal";
import type { User } from "@/graphql/gql.gen";
import {
  useMeQuery,
  usePostCreateMutation,
  useUserBooksQuery,
} from "@/graphql/gql.gen";
import type { FC, FormEventHandler } from "react";
import { useCallback, useRef } from "react";
import toast from "react-hot-toast";

const PostWriterContent: FC<{ onDismiss(): void; me: User }> = ({
  onDismiss,
  me,
}) => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const bookIdRef = useRef<HTMLSelectElement>(null);
  const [{ data: dataUserBooks }] = useUserBooksQuery({
    variables: { userId: me.id },
  });
  const [{ fetching }, postCreate] = usePostCreateMutation();

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (ev) => {
      ev.preventDefault();
      if (fetching) return;
      const text = textRef.current?.value.trim();
      if (!text || !bookIdRef.current?.value) return;
      const result = await postCreate({
        text,
        bookId: bookIdRef.current?.value,
        isRecommending: true,
      });
      if (!result.error) {
        toast.success("Post has been published");
        onDismiss();
      }
    },
    [onDismiss, postCreate, fetching]
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
        aria-label="Select a book to mention"
      >
        <option className="text-on-surface-variant" value="">
          Mention a book
        </option>
        {dataUserBooks?.userBooks.map((userBook) => (
          <option key={userBook.id} value={userBook.book?.id}>
            {userBook.book?.title} - {userBook.book?.author?.name}
          </option>
        ))}
      </select>
      <Button fetching={fetching} className="w-full">
        Post
      </Button>
    </form>
  );
};

const PostWriter: FC<{ visible: boolean; onDismiss(): void }> = ({
  visible,
  onDismiss,
}) => {
  const [{ data: dataMe }] = useMeQuery();
  return (
    <Modal title="Add a post" visible={visible} onDismiss={onDismiss}>
      {dataMe?.me ? (
        <PostWriterContent onDismiss={onDismiss} me={dataMe.me} />
      ) : (
        <AuthBanner title="Sign in to add a post" />
      )}
    </Modal>
  );
};

export default PostWriter;
