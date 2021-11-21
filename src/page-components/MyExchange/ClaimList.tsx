import { BookItem } from "@/components/Book";
import type { InventoryClaim } from "@/graphql/gql.gen";
import { useInventoryClaimsMineQuery } from "@/graphql/gql.gen";
import { IconCheck, IconLoader, IconPoint } from "@tabler/icons";
import type { FC } from "react";
import { useMemo } from "react";

const InventoryClaimItem: FC<{
  claim: InventoryClaim;
  onSelect(inventoryClaim: InventoryClaim): void;
}> = ({ claim, onSelect }) => {
  const onClick = useMemo(
    () => (!claim.inventory.removed ? () => onSelect(claim) : undefined),
    [claim, onSelect]
  );
  return (
    <button
      onClick={onClick}
      className="flex p-1 text-left bg-transparent rounded hover:bg-highlight"
    >
      <div className="w-20">
        <BookItem book={claim.inventory.userBook.book} />
      </div>
      <div className="flex-1 py-2 pl-4 min-w-0">
        <div className="font-bold">{claim.inventory.userBook.book.title}</div>
        <div className="text-sm text-opacity-75 text-foreground">
          {claim.inventory.userBook.book.authors.join(", ")}
        </div>
        <div className="my-1 text-sm">
          <span>Exchanged at</span>{" "}
          <span className="font-bold text-primary-dark">
            {claim.inventory.location.name}
          </span>
        </div>
        <div className="text-sm">
          {claim.inventory.removed ? (
            <span className="flex items-center text-opacity-50 text-foreground">
              <IconCheck /> Received
            </span>
          ) : (
            <span className="flex items-center text-success">
              <IconPoint className="animate-pulse" /> Ready for pick-up
            </span>
          )}
        </div>
      </div>
    </button>
  );
};

const ClaimList: FC<{ onSelect(inventoryClaim: InventoryClaim): void }> = ({
  onSelect,
}) => {
  const [{ data, fetching }] = useInventoryClaimsMineQuery();
  if (fetching) {
    return <IconLoader className="mx-auto animate-spin" />;
  }
  if (!data?.inventoryClaimsMine.length) {
    return (
      <p className="text-center text-opacity-75 text-foreground">
        No exchanges found
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.inventoryClaimsMine.map((claim) => (
        <InventoryClaimItem key={claim.id} claim={claim} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default ClaimList;
