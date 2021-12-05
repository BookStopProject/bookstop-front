import { AuthBanner } from "@/components/Auth";
import { PageTitle } from "@/components/Typography";
import { useMeQuery } from "@/graphql/gql.gen";
import { IconLoader } from "@tabler/icons";
import type { FC } from "react";
import UserBookList from "./UserBookList";

const MyLibraryPage: FC = () => {
  const [{ data, fetching }] = useMeQuery();
  return (
    <div className="container">
      <PageTitle>My Library</PageTitle>
      {fetching ? (
        <IconLoader className="mx-auto animate-spin" />
      ) : data?.me ? (
        <UserBookList />
      ) : (
        <AuthBanner title="Sign in to manage your library" />
      )}
    </div>
  );
};

export default MyLibraryPage;
