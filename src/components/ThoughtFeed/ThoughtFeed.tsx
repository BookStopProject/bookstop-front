/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Thought } from "@/graphql/gql.gen";
import {
  useMeQuery,
  useThoughtDeleteMutation,
  useThoughtsQuery,
} from "@/graphql/gql.gen";
import { format } from "@lukeed/ms";
import { IconLoader, IconTrash } from "@tabler/icons";
import Link from "next/link";
import type { FC } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import type { IntersectionOptions } from "react-intersection-observer";
import { useInView } from "react-intersection-observer";
import { Avatar } from "../Avatar";
import { BookItemImage } from "../Book";
import { Card } from "../Card";
import { A } from "../Typography";

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
  const [{ data: dataMe }] = useMeQuery();
  const [{ fetching: fetchingDelete }, thoughtDelete] =
    useThoughtDeleteMutation();
  const onDelete = useCallback(async () => {
    if (!window.confirm("Are you sure you want to delete this thought?")) {
      return;
    }
    const result = await thoughtDelete({ id: thought.id });
    if (!result.error) {
      toast.success("Thought has been removed");
    }
  }, [thought, thoughtDelete]);

  return (
    <Card variant="filled" className="relative py-6 px-8">
      <div className="flex">
        <Avatar
          size={10}
          src={thought.user.profileImageUrl}
          username={thought.user.name}
        />
        <div className="pl-2">
          <Link href={`/user/${thought.user.id}`}>
            <a className="font-medium leading-none text-on-surface">
              {thought.user.name}
            </a>
          </Link>
          <time
            dateTime={thought.createdAt.toJSON()}
            className="block text-sm leading-none text-on-surface"
          >
            {timeStr}
          </time>
        </div>
      </div>
      <p className="mt-4 whitespace-pre-line">{thought.text}</p>
      {thought.book && (
        <div className="flex mt-3">
          <div className="w-12">
            <BookItemImage book={thought.book} />
          </div>
          <div className="flex-1 py-2 pl-4 min-w-0">
            <div className="font-bold leading-tight text-on-surface">
              {thought.book.title}
            </div>
            <div className="mb-1 text-sm leading-tight text-on-surface-variant">
              {thought.book.authors.join(", ")}
            </div>
            <Link href={`/book/${thought.bookId}`} passHref>
              <A className="text-sm font-bold">View Book</A>
            </Link>
          </div>
        </div>
      )}
      {dataMe?.me?.id === thought.userId && (
        <button
          disabled={fetchingDelete}
          onClick={onDelete}
          className="absolute top-2 right-2"
          aria-label={`Remove post: ${thought.text}`}
        >
          <IconTrash width={18} height={18} />
        </button>
      )}
    </Card>
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
    <div className="py-8 mx-auto space-y-4 max-w-3xl">
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
