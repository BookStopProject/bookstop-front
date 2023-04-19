import { BookItem } from "@/components/Book";
import { Button } from "@/components/Button";
import { useBookSearchQuery } from "@/graphql/gql.gen";
import { IconLoader } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useCallback, useState } from "react";

const LIMIT = 24;

const SearchResult: FC = () => {
  const router = useRouter();
  const query = (String(router.query.q) || "").trim();
  const [skip, setSkip] = useState(0);
  const loadMore = useCallback(() => setSkip((sk) => sk + LIMIT + 1), []);
  const [{ data, fetching }] = useBookSearchQuery({
    variables: { query, limit: LIMIT, skip },
    pause: !query,
  });
  return (
    <div className="container">
      {fetching && !data ? (
        <div className="flex animate-spin justify-center p-8">
          <IconLoader />
        </div>
      ) : data?.bookSearch.length ? (
        <>
          <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {data?.bookSearch.map((book) => (
              <Link
                key={book.id}
                href={`/book/${book.id}`}
                className="transition-opacity hover:opacity-75 focus:opacity-80 focus:outline-none"
              >
                <BookItem book={book} />
              </Link>
            ))}
          </div>
          <div className="py-4">
            <Button
              className="w-full"
              variant="tonal"
              onClick={loadMore}
              fetching={fetching}
            >
              Load more
            </Button>
          </div>
        </>
      ) : (
        <p className="p-8 text-center">No result</p>
      )}
    </div>
  );
};

export default SearchResult;
