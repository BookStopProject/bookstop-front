import { BookItem } from "@/components/Book";
import { Scroller } from "@/components/Scroller";
import { useBrowseBooksQuery } from "@/graphql/gql.gen";
import Link from "next/link";
import type { FC } from "react";

interface BookListSectionProps {
  title: string;
  browseId: string;
}

const BookListSection: FC<BookListSectionProps> = ({ title, browseId }) => {
  const [{ data }] = useBrowseBooksQuery({
    variables: {
      id: browseId,
    },
  });
  return (
    <section className="container mb-4">
      <h2 className="mb-2 font-serif text-2xl">{title}</h2>
      <Scroller classNameContent="gap-x-4">
        {data?.browseBooks.map((book) => (
          <Link key={book.id} href={`/book/${book.id}`}>
            <a className="w-32 md:w-48">
              <BookItem book={book} />
            </a>
          </Link>
        ))}
      </Scroller>
    </section>
  );
};

export default BookListSection;
