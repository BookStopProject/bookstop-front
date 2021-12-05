import type { Location } from "@/graphql/gql.gen";
import type { FC } from "react";

interface LocationListItemProps {
  location: Location;
  className?: string;
}

const LocationListItem: FC<LocationListItemProps> = ({
  location,
  className,
}) => {
  return (
    <div className={className}>
      <p className="font-bold">
        {location.name}{" "}
        <span className="text-on-surface-variant">- {location.parentName}</span>
      </p>
      <p className="text-sm font-light truncate">{location.addressLine}</p>
    </div>
  );
};

export default LocationListItem;
