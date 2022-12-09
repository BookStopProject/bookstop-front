import type { BookCopy } from "@/graphql/gql.gen";
import type { Dispatch, FC, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";

interface CheckoutContextValue {
  bookCopies: BookCopy[];
  setBookCopies: Dispatch<SetStateAction<BookCopy[]>>;
}

const CheckoutContext = createContext<CheckoutContextValue>(
  {} as CheckoutContextValue
);

export const CheckoutContextProvider: FC = ({ children }) => {
  const [bookCopies, setBookCopies] = useState<BookCopy[]>([]);

  return (
    <CheckoutContext.Provider value={{ bookCopies, setBookCopies }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () => {
  return useContext(CheckoutContext);
};
