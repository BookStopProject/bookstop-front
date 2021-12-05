import { BookItemImage, BookItemMeta } from "@/components/Book";
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
      className="flex p-2 text-left bg-surface-1 hover:bg-surface-variant focus:bg-surface-variant rounded-lg"
    >
      <div className="w-20">
        <BookItemImage book={claim.inventory.userBook.book} />
      </div>
      <div className="flex-1 py-2 pl-4 min-w-0">
        <BookItemMeta book={claim.inventory.userBook.book} />
        <div className="mt-2 mb-1 text-sm">
          <span>Exchanged at</span>{" "}
          <span className="font-medium text-secondary">
            {claim.inventory.location.name}
          </span>
        </div>
        <div className="text-sm">
          {claim.inventory.removed ? (
            <span className="flex items-center text-on-surface-variant">
              <IconCheck /> Received
            </span>
          ) : (
            <span className="flex items-center font-medium text-primary animate-pulse">
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
      <p className="text-center text-on-surface-variant">No exchanges found</p>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.inventoryClaimsMine.map((claim) => (
        <InventoryClaimItem key={claim.id} claim={claim} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default ClaimList;
