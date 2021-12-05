import clsx from "clsx";
import type { FC } from "react";

interface CardProps {
  variant?: "outline" | "filled";
  className?: string;
}

const Card: FC<CardProps> = ({ variant = "outline", className, children }) => {
  return (
    <div
      className={clsx(
        "overflow-hidden p-4 rounded-lg",
        variant === "outline" &&
          "text-on-surface bg-surface border-1 border-outline",
        variant === "filled" && "text-on-surface-variant bg-surface-variant",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
