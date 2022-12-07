import CONFIG from "@/config";
import type { User } from "@/graphql/gql.gen";
import { UserDocument, useUserQuery } from "@/graphql/gql.gen";
import UserPage from "@/page-components/User";
import { print } from "graphql/language/printer";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

interface PageProps {
  user?: User;
}

const UserNextPage: NextPage<PageProps> = (props) => {
  const router = useRouter();
  const [{ data }] = useUserQuery({
    variables: { id: router.query.userId as string },
    pause: !router.query.userId,
  });
  const user = data?.user || props.user;
  if (!user) return null;
  return (
    <>
      <NextSeo
        canonical={`${CONFIG.APP_URI}/book/${user.id}`}
        title={user.name}
        description={user.bio || undefined}
        openGraph={{
          type: "profile",
          images: user.profilePicture
            ? [{ url: user.profilePicture, alt: user.name }]
            : undefined,
        }}
      />
      <UserPage user={user} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  PageProps,
  { userId: string }
> = async (context) => {
  const userId = context.params?.userId;
  const response = await fetch(`${CONFIG.API_URI}/graphql`, {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      query: print(UserDocument),
      variables: { id: userId },
    }),
  }).then((r) => r.json());
  const user = response.data.user;
  if (!user)
    return {
      notFound: true,
      revalidate: true,
    };
  return {
    props: { user },
    revalidate: 60 * 60 * 6,
  };
};

export default UserNextPage;
