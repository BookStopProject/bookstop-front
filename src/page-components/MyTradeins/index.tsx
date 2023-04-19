import { A, PageTitle } from "@/components/Typography";
import type { TradeIn } from "@/graphql/gql.gen";
import { useMeTradeInsQuery } from "@/graphql/gql.gen";
import { IconLoader } from "@tabler/icons-react";
import Link from "next/link";
import type { FC } from "react";

const TradeInCard: FC<{ tradeIn: TradeIn }> = ({ tradeIn }) => {
  return (
    <div className="relative flex overflow-hidden rounded-lg bg-surface-variant p-4 px-8 py-6 text-on-surface-variant">
      <div className="flex flex-1">
        <img
          src={tradeIn.book.imageUrl || "/images/book-default.svg"}
          alt={`Title: ${tradeIn.book.title}, Author: ${tradeIn.book.author?.name}`}
          className="mr-4 h-24 rounded-lg object-cover"
        />
        <div>
          <p className="line-clamp-2 font-medium leading-tight text-on-surface">
            {tradeIn.book.title}
          </p>
          <p className="mb-2 mt-1 truncate text-sm leading-tight text-on-surface-variant">
            {tradeIn.book.author?.name}
          </p>
          <Link href={`/book/${tradeIn.book.id}`} passHref legacyBehavior>
            <A className="text-sm font-bold">View Book</A>
          </Link>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-on-surface-variant">
          {tradeIn.creationTime.toLocaleString()}
        </p>
        <p className="text-lg font-bold" style={{ color: "#009688" }}>
          +{tradeIn.credit}
        </p>
      </div>
    </div>
  );
};

const MyTradeinsPage = () => {
  const [{ data, fetching }] = useMeTradeInsQuery();
  return (
    <>
      <div className="container pb-16">
        <PageTitle>My tradeins</PageTitle>
        {fetching && <IconLoader className="mx-auto animate-spin" />}
        <div className="space-y-4">
          {data?.meTradeIns?.map((tradeIn) => (
            <TradeInCard key={tradeIn.id} tradeIn={tradeIn} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyTradeinsPage;
