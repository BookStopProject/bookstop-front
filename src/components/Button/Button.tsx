import { IconLoader } from "@tabler/icons";
import clsx from "clsx";
import type { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "filled" | "ghost";
  circled?: boolean;
  onClick?(): void;
  className?: string;
  fetching?: boolean;
  disabled?: boolean;
  color?: "primary" | "danger";
  left?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "filled",
  children,
  circled,
  className,
  onClick,
  fetching,
  disabled,
  color = "primary",
  left,
}) => {
  return (
    <button
      className={clsx(
        `flex justify-center items-center px-4 space-x-2 h-10 transition-colors`,
        variant === "filled" &&
          clsx(
            color === "primary" && "text-primary-text bg-primary",
            !fetching && color === "primary" && "hover:bg-primary-dark",
            color === "danger" && "text-danger-text bg-danger",
            !fetching && color === "danger" && "hover:bg-danger-dark"
          ),
        variant === "ghost" &&
          clsx(
            "bg-opacity-10",
            !fetching && "hover:bg-opacity-25",
            color === "primary" && "bg-primary text-primary-dark",
            color === "danger" && "bg-danger text-danger"
          ),
        fetching && "opacity-75",
        circled ? "rounded-full" : "rounded-lg",
        className
      )}
      onClick={onClick}
      disabled={fetching || disabled}
    >
      {fetching ? (
        <span className="animate-spin">
          <IconLoader />
        </span>
      ) : (
        left
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
