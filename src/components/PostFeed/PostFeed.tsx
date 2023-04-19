/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Post } from "@/graphql/gql.gen";
import {
  useMeQuery,
  usePostDeleteMutation,
  usePostsQuery,
} from "@/graphql/gql.gen";
import { format } from "@lukeed/ms";
import { IconLoader, IconTrash } from "@tabler/icons-react";
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

const PostItem: FC<{ post: Post }> = ({ post }) => {
  const timeStr = useMemo(() => {
    return format(Date.now() - post.creationTime.getTime()) + " ago";
  }, [post]);
  const [{ data: dataMe }] = useMeQuery();
  const [{ fetching: fetchingDelete }, postDelete] = usePostDeleteMutation();
  const onDelete = useCallback(async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }
    const result = await postDelete({ id: post.id });
    if (!result.error) {
      toast.success("Post has been removed");
    }
  }, [post, postDelete]);

  return (
    <Card variant="filled" className="relative px-8 py-6">
      <div className="flex">
        <Avatar
          size={10}
          src={post.user.profilePicture}
          username={post.user.name}
        />
        <div className="pl-2">
          <Link
            href={`/user/${post.user.id}`}
            className="font-medium leading-none text-on-surface"
          >
            {post.user.name}
          </Link>
          <time
            dateTime={post.creationTime.toJSON()}
            className="block text-sm leading-none text-on-surface"
          >
            {timeStr}
          </time>
        </div>
      </div>
      <p className="mt-4 whitespace-pre-line">{post.text}</p>
      {post.book && (
        <div className="mt-3 flex">
          <div className="w-12">
            <BookItemImage book={post.book} />
          </div>
          <div className="min-w-0 flex-1 py-2 pl-4">
            <div className="font-bold leading-tight text-on-surface">
              {post.book.title}
            </div>
            <div className="mb-1 text-sm leading-tight text-on-surface-variant">
              {post.book.author?.name}
            </div>
            <Link href={`/book/${post.book.id}`} passHref legacyBehavior>
              <A className="text-sm font-bold">View Book</A>
            </Link>
          </div>
        </div>
      )}
      {dataMe?.me?.id === post.user.id && (
        <button
          disabled={fetchingDelete}
          onClick={onDelete}
          className="absolute right-2 top-2"
          aria-label={`Remove post: ${post.text}`}
        >
          <IconTrash width={18} height={18} />
        </button>
      )}
    </Card>
  );
};

const PostFeed: FC<{ userId?: string }> = ({ userId }) => {
  const [before, setBefore] = useState<undefined | number>(999999);
  const [{ data, fetching }] = usePostsQuery({
    variables: {
      userId,
      limit: LIMIT,
      before,
    },
  });
  const [ref, isInView] = useInViewFallback();
  useEffect(() => {
    if (!data?.posts.length || !isInView) return;
    setBefore(Number(data.posts[data.posts.length - 1].id));
  }, [isInView, data?.posts]);
  return (
    <div className="mx-auto max-w-3xl space-y-4 py-8">
      {data?.posts.map((t) => (
        <PostItem key={t.id} post={t} />
      ))}
      {fetching && <IconLoader className="mx-auto animate-spin" />}
      {/* @ts-ignore */}
      <div ref={ref} />
    </div>
  );
};

export default PostFeed;
