import { BookItem } from "@/components/Book";
import { Scroller } from "@/components/Scroller";
import type { Browse } from "@/graphql/gql.gen";
import Link from "next/link";
import type { FC } from "react";
import { useMemo } from "react";

interface BookListSectionProps {
  browse: Browse;
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

const BookListSection: FC<BookListSectionProps> = ({ browse }) => {
  const resortedBooks = useMemo(
    () => shuffleArray(browse.books || []),
    [browse.books]
  );
  return (
    <section className="container">
      <h2 className="text-xl font-medium">{browse.name}</h2>
      <p className="mb-4 text-on-surface-variant">{browse.description}</p>
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
