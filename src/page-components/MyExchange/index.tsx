import { AuthBanner } from "@/components/Auth";
import { PageTitle } from "@/components/Typography";
import type { InventoryClaim } from "@/graphql/gql.gen";
import { useMeQuery } from "@/graphql/gql.gen";
import { IconLoader } from "@tabler/icons";
import type { FC } from "react";
import { useState } from "react";
import ClaimList from "./ClaimList";
import ClaimModal from "./ClaimModal";

const MyExchangePage: FC<{ claimId?: string }> = () => {
  const [{ data, fetching }] = useMeQuery();
  const [claim, setClaim] = useState<undefined | InventoryClaim>();

  return (
    <>
      <div className="container">
        <PageTitle>My Exchanges</PageTitle>
        {fetching ? (
          <IconLoader className="mx-auto animate-spin" />
        ) : data?.me ? (
          <ClaimList onSelect={setClaim} />
        ) : (
          <AuthBanner title="Sign in to view your exchanges" />
        )}
      </div>
      <ClaimModal onDismiss={() => setClaim(undefined)} claim={claim} />
    </>
  );
};

export default MyExchangePage;
