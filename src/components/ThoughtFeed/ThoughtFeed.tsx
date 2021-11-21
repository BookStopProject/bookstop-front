/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Thought } from "@/graphql/gql.gen";
import { useThoughtsQuery } from "@/graphql/gql.gen";
import { format } from "@lukeed/ms";
import { IconLoader } from "@tabler/icons";
import Link from "next/link";
import type { FC } from "react";
import { useEffect, useMemo, useState } from "react";
import type { IntersectionOptions } from "react-intersection-observer";
import { useInView } from "react-intersection-observer";
import { Avatar } from "../Avatar";
import { BookItem } from "../Book";

function useInViewFallback(options?: IntersectionOptions) {
  const hookResult = useInView(options);

  if (
    typeof window === "undefined" ||
    typeof window.IntersectionObserver === "undefined"
  ) {
    // Unsupported, return no `ref` and default `inView` true value
    return [undefined, true];
  }

  return hookResult;
}

const LIMIT = 20;

const ThoughtItem: FC<{ thought: Thought }> = ({ thought }) => {
  const timeStr = useMemo(() => {
    return format(Date.now() - thought.createdAt.getTime()) + " ago";
  }, [thought]);
  return (
    <div className="flex py-2 px-3 bg-white bg-opacity-50 rounded-lg shadow-lg">
      <Avatar
        size={10}
        src={thought.user.profileImageUrl}
        username={thought.user.name}
      />
      <div className="flex-1 py-1 pl-3 min-w-0">
        <Link href={`/user/${thought.user.id}`}>
          <a className="font-serif text-lg leading-none">{thought.user.name}</a>
        </Link>
        <div className="text-sm text-opacity-50 text-foreground">{timeStr}</div>
        <p className="mt-1">{thought.text}</p>
        {thought.book && (
          <div className="flex pt-4 mt-1 border-t-2 border-highlight">
            <div className="w-12 shadow-lg">
              <BookItem book={thought.book} />
            </div>
            <div className="flex-1 py-2 pl-4 min-w-0">
              <div className="font-serif font-bold leading-tight">
                {thought.book.title}
              </div>
              <div className="text-sm text-opacity-75 text-foreground">
                {thought.book.authors.join(", ")}
              </div>
              <Link href={`/book/${thought.bookId}`}>
                <a className="text-sm font-bold opacity-75 text-success hover:opacity-100">
                  View Book
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ThoughtFeed: FC<{ userId?: string }> = ({ userId }) => {
  const [before, setBefore] = useState<undefined | number>(999999);
  const [{ data, fetching }] = useThoughtsQuery({
    variables: {
      userId,
      limit: LIMIT,
      before,
    },
  });
  const [ref, isInView] = useInViewFallback();
  useEffect(() => {
    if (!data?.thoughts.length || !isInView) return;
    setBefore(Number(data.thoughts[data.thoughts.length - 1].id));
  }, [isInView, data?.thoughts]);
  return (
    <div className="py-8 space-y-4">
      {data?.thoughts.map((t) => (
        <ThoughtItem key={t.id} thought={t} />
      ))}
      {fetching && <IconLoader className="mx-auto animate-spin" />}
      {/* @ts-ignore */}
      <div ref={ref} />
    </div>
  );
};

export default ThoughtFeed;
