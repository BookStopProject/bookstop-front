import { BookItem } from "@/components/Book";
import { Scroller } from "@/components/Scroller";
import { useBrowseBooksQuery } from "@/graphql/gql.gen";
import Link from "next/link";
import type { FC } from "react";
import { useMemo } from "react";

interface BookListSectionProps {
  title: string;
  description?: string | null;
  browseId: string;
}

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const BookListSection: FC<BookListSectionProps> = ({
  title,
  description,
  browseId,
}) => {
  const [{ data }] = useBrowseBooksQuery({
    variables: {
      id: browseId,
    },
  });
  const resortedBooks = useMemo(
    () => shuffleArray(data?.browseBooks || []),
    [data?.browseBooks]
  );
  return (
    <section className="container">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="mb-4 text-on-surface-variant">{description}</p>
      <Scroller classNameContent="gap-x-4">
        {resortedBooks.map((book) => (
          <Link key={book.id} href={`/book/${book.id}`}>
            <a className="w-32 md:w-48 hover:opacity-75 focus:opacity-80 transition-opacity focus:outline-none">
              <BookItem book={book} />
            </a>
          </Link>
        ))}
      </Scroller>
    </section>
  );
};

export default BookListSection;
