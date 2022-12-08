import { Button } from "@/components/Button";
import { useCheckoutContext } from "@/components/Checkout";
import { A, PageTitle } from "@/components/Typography";
import type { BookCopy } from "@/graphql/gql.gen";
import { useExchangeMutation } from "@/graphql/gql.gen";
import Link from "next/link";
import type { FC } from "react";
import { useMemo } from "react";
import toast from "react-hot-toast";

const CheckoutItem: FC<{ bookCopy: BookCopy }> = ({ bookCopy }) => {
  const credit = useMemo(() => {
    console.log(bookCopy);
    if (bookCopy.condition === "new")
      return (bookCopy.book.exchangeCredit || 0) * 1;
    if (bookCopy.condition === "like_new")
      return (bookCopy.book.exchangeCredit || 0) * 0.9;
    if (bookCopy.condition === "good")
      return (bookCopy.book.exchangeCredit || 0) * 0.8;
    if (bookCopy.condition === "acceptable")
      return (bookCopy.book.exchangeCredit || 0) * 0.7;
    return 0;
  }, [bookCopy]);

  return (
    <div className="flex overflow-hidden relative p-4 py-6 px-8 text-on-surface-variant bg-surface-variant rounded-lg">
      <div className="flex flex-1">
        <img
          src={bookCopy.book.imageUrl || "/images/book-default.svg"}
          alt={`Title: ${bookCopy.book.title}, Author: ${bookCopy.book.author?.name}`}
          className="object-cover mr-4 h-24 rounded-lg"
        />
        <div>
          <p className="font-medium leading-tight text-on-surface line-clamp-2">
            {bookCopy.book.title}
          </p>
          <p className="mt-1 mb-2 text-sm leading-tight text-on-surface-variant truncate">
            {bookCopy.book.author?.name}
          </p>
          <Link href={`/book/${bookCopy.book.id}`} passHref>
            <A className="text-sm font-bold">View Book</A>
          </Link>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-on-surface-variant">{bookCopy.condition}</p>
        <p className="text-lg font-bold" style={{ color: "#009688" }}>
          {credit}
        </p>
      </div>
    </div>
  );
};

const CheckoutPage: FC = () => {
  const { bookCopies, setBookCopies } = useCheckoutContext();

  const [, doExchange] = useExchangeMutation();

  const exchange = async () => {
    const result = await doExchange({
      bookCopyIds: bookCopies.map((bookCopy) => bookCopy.id),
    });
    if (!result.error) {
      toast.success("Purchase successful!");
      setBookCopies([]);
    }
  };

  return (
    <>
      <div className="container">
        <PageTitle>Checkout</PageTitle>
        <div className="mb-4 space-y-4">
          {bookCopies.map((bookCopy) => (
            <CheckoutItem key={bookCopy.id} bookCopy={bookCopy} />
          ))}
        </div>
        <Button onClick={exchange}>Purchase</Button>
      </div>
    </>
  );
};

export default CheckoutPage;
