import { PageTitle } from "@/components/Typography";
import { useMeInvoicesQuery } from "@/graphql/gql.gen";

const MyInvoicesPage = () => {
  const [{ data }] = useMeInvoicesQuery();
  return (
    <>
      <div className="container">
        <PageTitle>My invoices</PageTitle>
      </div>
    </>
  );
};

export default MyInvoicesPage;
