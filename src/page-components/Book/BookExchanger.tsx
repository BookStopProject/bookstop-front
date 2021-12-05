import { AuthBanner } from "@/components/Auth";
import { Button } from "@/components/Button";
import { LocationListItem } from "@/components/Location";
import { Modal } from "@/components/Modal";
import type { Book, Inventory } from "@/graphql/gql.gen";
import {
  useInventoriesQuery,
  useInventoryClaimDoMutation,
  useMeQuery,
} from "@/graphql/gql.gen";
import { IconLoader } from "@tabler/icons";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useCallback } from "react";
import toast from "react-hot-toast";

interface BookExchangerProps {
  visible: boolean;
  onDismiss(): void;
  book: Book;
}

const BookExchangerList: FC<
  Pick<BookExchangerProps, "book"> & {
    onExchange(inventory: Inventory): void;
  }
> = ({ book, onExchange }) => {
  const [{ data, fetching }] = useInventoriesQuery({
    variables: {
      bookId: book.id,
    },
    requestPolicy: "cache-and-network",
  });
  return (
    <div className="space-y-2">
      {fetching ? (
        <IconLoader className="mx-auto animate-spin" />
      ) : data?.inventories.length ? (
        data?.inventories.map((inventory) => (
          <div
            className="flex items-center p-1 space-x-2 rounded-lg"
            key={inventory.id}
          >
            <LocationListItem
              className="flex-1 min-w-0"
              location={inventory.location}
            />
            <Button variant="tonal" onClick={() => onExchange(inventory)}>
              Exchange
            </Button>
          </div>
        ))
      ) : (
        <p className="text-center text-on-surface-variant">
          No exchanges available
        </p>
      )}
    </div>
  );
};

const BookExchangerContent: FC<Pick<BookExchangerProps, "book" | "onDismiss">> =
  ({ book, onDismiss }) => {
    const [{ fetching }, claimDo] = useInventoryClaimDoMutation();
    const router = useRouter();
    const onExchange = useCallback(
      async (inventory: Inventory) => {
        if (!window.confirm("Spend 1 credit to exchange this book?")) {
          return;
        }
        const result = await claimDo({ id: inventory.id });
        if (!result.error) {
          toast.success(
            `Successully exchanged ${inventory.userBook.book.title} at ${inventory.location.name}`
          );
          onDismiss();
          router.push(`/my-exchange/${result.data?.inventoryClaimDo.id}`);
        }
      },
      [onDismiss, claimDo, router]
    );
    return (
      <>
        <BookExchangerList book={book} onExchange={onExchange} />
        <Modal visible={fetching} title="">
          Processing your exchange... Please do not close this window.
        </Modal>
      </>
    );
  };

const BookExchanger: FC<BookExchangerProps> = ({
  visible,
  onDismiss,
  book,
}) => {
  const [{ data: dataMe }] = useMeQuery();
  return (
    <>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        title={`Exchange "${book.title}"`}
      >
        {dataMe?.me ? (
          <BookExchangerContent book={book} onDismiss={onDismiss} />
        ) : (
          <AuthBanner title="Sign in to start exchanging books" />
        )}
      </Modal>
    </>
  );
};

export default BookExchanger;
