import { UserBookItem } from "@/components/UserBook";
import { useUserBooksQuery } from "@/graphql/gql.gen";
import { IconLoader } from "@tabler/icons";
import Link from "next/link";
import type { FC } from "react";

const UserBookList: FC<{ userId: string }> = ({ userId }) => {
  const [{ data, fetching }] = useUserBooksQuery({
    variables: {
      userId,
    },
  });

  if (fetching) return <IconLoader className="mx-auto animate-spin" />;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {data?.userBooks.map((userBook) => (
        <Link
          href={`/user/${userBook.userId}/book/${userBook.id}`}
          key={userBook.id}
        >
          <a className="rounded-lg focus:ring-2 ring-surface-variant hover:opacity-75 transition focus:outline-none">
            <UserBookItem userBook={userBook} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default UserBookList;
