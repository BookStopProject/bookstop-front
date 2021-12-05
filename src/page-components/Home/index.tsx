import { useBrowsesQuery } from "@/graphql/gql.gen";
import type { FC } from "react";
import BookListSection from "./BookListSection";
import SectionSearch from "./SectionSearch";

const HomePage: FC = () => {
  const [{ data }] = useBrowsesQuery();

  return (
    <>
      <SectionSearch />
      <div className="space-y-10">
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

export default HomePage;
