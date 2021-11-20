import CONFIG from "@/config";
import type { UserBook } from "@/graphql/gql.gen";
import { UserBookDocument, useUserBookQuery } from "@/graphql/gql.gen";
import UserBookPage from "@/page-components/UserBook";
import { print } from "graphql/language/printer";
import type { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

interface PageProps {
  userBook?: UserBook;
}

const UserBookNextPage: NextPage<PageProps> = (props) => {
  const router = useRouter();
  const [{ data }] = useUserBookQuery({
    variables: { id: router.query.userBookId as string },
    pause: !router.query.userBookId,
  });
  const userBook = data?.userBook || props.userBook;
  if (!userBook) return null;
  return (
    <>
      <NextSeo
        canonical={`${CONFIG.APP_URI}/user/${userBook.userId}/book/${userBook.id}`}
        title={`${userBook.user.name}'s ${userBook.book.title}`}
      />
      <UserBookPage userBook={userBook} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  PageProps,
  { userBookId: string; userId: string }
> = async (context) => {
  const userId = context.params?.userId as string;
  const userBookId = context.params?.userBookId as string;
  const response = await fetch(`${CONFIG.API_URI}/graphql`, {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      query: print(UserBookDocument),
      variables: { id: userBookId },
    }),
  }).then((response) => response.json());
  const userBook: UserBook | null = response.data.userBook;
  if (!userBook)
    return {
      notFound: true,
    };
  if (userBook.userId !== userId) {
    return {
      redirect: {
        destination: `${CONFIG.APP_URI}/user/${userBook.userId}/book/${userBook.id}`,
        permanent: true,
      },
    };
  }
  return {
    props: { userBook },
  };
};

export default UserBookNextPage;
