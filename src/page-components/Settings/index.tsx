import { AuthBanner } from "@/components/Auth";
import { PageTitle } from "@/components/Typography";
import { useMeQuery } from "@/graphql/gql.gen";
import type { FC } from "react";
import UserForm from "./UserForm";

const SettingsPage: FC = () => {
  const [{ data }] = useMeQuery();

  return (
    <>
      <div className="container">
        <PageTitle>Settings</PageTitle>
        {data?.me ? <UserForm user={data.me} /> : <AuthBanner />}
      </div>
    </>
  );
};

export default SettingsPage;
