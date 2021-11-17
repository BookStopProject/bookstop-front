import { useBrowsesQuery } from "@/graphql/gql.gen";
import type { FC } from "react";
import BookListSection from "./BookListSection";
import SectionSearch from "./SectionSearch";

const HomePage: FC = () => {
  const [{ data }] = useBrowsesQuery();

  return (
    <>
      <SectionSearch />
      {data?.browses.map((browse) => (
        <BookListSection
          key={browse.id}
          title={browse.name}
          browseId={browse.id}
        />
      ))}
    </>
  );
};

export default HomePage;
