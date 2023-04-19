import { AuthBanner } from "@/components/Auth";
import { Button } from "@/components/Button";
import { useCheckoutContext } from "@/components/Checkout";
import { LocationListItem } from "@/components/Location";
import { Modal } from "@/components/Modal";
import type { Book, BookCopy } from "@/graphql/gql.gen";
import { useBookCopiesAvailableQuery, useMeQuery } from "@/graphql/gql.gen";
import { IconLoader } from "@tabler/icons-react";
import type { FC } from "react";
import toast from "react-hot-toast";

interface BookExchangerProps {
  visible: boolean;
  onDismiss(): void;
  book: Book;
}

const BookExchangerList: FC<
  Pick<BookExchangerProps, "book"> & {
    onExchange(bookCopy: BookCopy): void;
  }
> = ({ book, onExchange }) => {
  const [{ data, fetching }] = useBookCopiesAvailableQuery({
    variables: {
      bookId: book.id,
    },
    requestPolicy: "cache-and-network",
  });
  return (
    <div className="space-y-2">
      {fetching ? (
        <IconLoader className="mx-auto animate-spin" />
      ) : data?.bookCopiesAvailable.length ? (
        data?.bookCopiesAvailable.map((bookCopy) => (
          <div
            className="flex items-center space-x-2 rounded-lg p-1"
            key={bookCopy.id}
          >
            {bookCopy.location && (
              <LocationListItem
                className="min-w-0 flex-1"
                location={bookCopy.location}
              />
            )}
            <div className="flex h-10 items-center rounded-full bg-surface-variant px-4 capitalize text-secondary">
              {bookCopy.condition}
            </div>
            <Button
              variant="tonal"
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onExchange(bookCopy);
              }}
            >
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

const BookExchangerContent: FC<
  Pick<BookExchangerProps, "book" | "onDismiss">
> = ({ book, onDismiss }) => {
  const { setBookCopies } = useCheckoutContext();
  const onExchange = (bookCopy: BookCopy) => {
    console.log(bookCopy);
    onDismiss();
    toast.success("Added to cart");
    setBookCopies((bookCopies) => {
      if (bookCopies.some((oldBookCopy) => oldBookCopy.id === bookCopy.id)) {
        return bookCopies;
      }
      return [...bookCopies, bookCopy];
    });
  };
  return (
    <>
      <BookExchangerList book={book} onExchange={onExchange} />
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
