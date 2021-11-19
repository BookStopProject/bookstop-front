import { Avatar } from "@/components/Avatar";
import { Modal } from "@/components/Modal";
import type { InventoryClaim } from "@/graphql/gql.gen";
import { useInventoryClaimTokenQuery } from "@/graphql/gql.gen";
import { IconLoader } from "@tabler/icons";
import type { FC } from "react";
import QRCode from "react-qr-code";

const ClaimModalContent: FC<{ claim: InventoryClaim }> = ({ claim }) => {
  const [{ data, fetching }] = useInventoryClaimTokenQuery({
    variables: {
      id: claim.id,
    },
    requestPolicy: "cache-and-network",
  });

  return (
    <div className="space-y-4 text-center">
      <div className="flex justify-center items-center mx-auto w-48 h-48">
        {fetching ? (
          <IconLoader className="animate-spin" />
        ) : data?.inventoryClaimToken ? (
          <QRCode
            width="100%"
            height="100%"
            size={48 * 4}
            value={data?.inventoryClaimToken}
          />
        ) : (
          <p className="text-danger">
            Could not load
            <br />
            Please try again
          </p>
        )}
      </div>
      <p className="text-sm leading-tight">
        Present this QR Code to BookStop representative at
      </p>
      <div className="text-lg leading-tight">
        {claim.inventory.location.parentName && (
          <p className="text-sm text-opacity-75 text-foreground">
            {claim.inventory.location.parentName}
          </p>
        )}
        <p className="mb-1 font-bold">{claim.inventory.location.name}</p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            claim.inventory.location.addressLine
          )}`}
          className="text-xs underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>{claim.inventory.location.addressLine}</p>
        </a>
      </div>
      <p className="text-sm">to receive your exchanged book</p>
      <p>
        <span className="font-serif">
          {claim.inventory.userBook.book.title}
        </span>{" "}
        <br /> <span className="text-sm">from</span> <br />{" "}
        <span className="inline-flex items-center">
          <Avatar
            size={4}
            src={claim.inventory.userBook.user.profileImageUrl}
            username={claim.inventory.userBook.user.name}
          />
          <span className="ml-1">{claim.inventory.userBook.user.name}</span>
        </span>
      </p>
    </div>
  );
};

const ClaimModal: FC<{ claim: InventoryClaim | undefined; onDismiss(): void }> =
  ({ claim, onDismiss }) => {
    const [{ data, fetching }] = useInventoryClaimTokenQuery({
      variables: {
        id: claim?.id || "",
      },
      pause: !claim,
      requestPolicy: "cache-and-network",
    });
    return (
      <Modal onDismiss={onDismiss} visible={!!claim} title="">
        {claim && <ClaimModalContent claim={claim} />}
      </Modal>
    );
  };

export default ClaimModal;
