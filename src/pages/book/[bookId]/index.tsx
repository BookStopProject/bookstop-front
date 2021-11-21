import CONFIG from "@/config";
import type { Book } from "@/graphql/gql.gen";
import { BookDocument } from "@/graphql/gql.gen";
import BookPage from "@/page-components/Book";
import { print } from "graphql/language/printer";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

interface PageProps {
  book?: Book;
}

const BookNextPage: NextPage<PageProps> = ({ book }) => {
  if (!book) return null;
  return (
    <>
      <NextSeo
        canonical={`${CONFIG.APP_URI}/book/${book.id}`}
        title={`${book.title} - ${book.authors.join(", ")}`}
        openGraph={{
          type: "book",
          book: {
            authors: book.authors,
            isbn: book.isbn || undefined,
            releaseDate: book.publishedYear.toString(),
          },
          images: book.imageUrl
            ? [{ url: book.imageUrl, alt: book.title }]
            : undefined,
        }}
      />
      <BookPage book={book} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PageProps, { bookId: string }> =
  async (context) => {
    const bookId = context.params?.bookId;
    const response = await fetch(`${CONFIG.API_URI}/graphql`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        query: print(BookDocument),
        variables: { id: bookId },
      }),
    }).then((r) => r.json());
    const book = response.data.book;
    if (!book)
      return {
        notFound: true,
        revalidate: true,
      };
    return {
      props: { book },
      revalidate: false,
    };
  };

export default BookNextPage;
