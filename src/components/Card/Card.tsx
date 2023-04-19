import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

interface CardProps {
  variant?: "outline" | "filled";
  className?: string;
}

const Card: FC<PropsWithChildren<CardProps>> = ({
  variant = "outline",
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-lg p-4",
        variant === "outline" &&
          "border-1 border-outline bg-surface text-on-surface",
        variant === "filled" && "bg-surface-variant text-on-surface-variant",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
