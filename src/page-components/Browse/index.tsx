import { useBrowsesQuery } from "@/graphql/gql.gen";
import type { FC } from "react";
import BookListSection from "./BookListSection";
import SectionSearch from "./SectionSearch";

const BrowsePage: FC = () => {
  const [{ data }] = useBrowsesQuery();

  return (
    <>
      <SectionSearch />
      <div className="mb-4 space-y-10">
        {data?.browses.map((browse) => (
          <BookListSection
            key={browse.id}
            title={browse.name}
            description={browse.description}
            browseId={browse.id}
          />
        ))}
      </div>
    </>
  );
};

export default BrowsePage;
