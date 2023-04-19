import { IconLoader } from "@tabler/icons-react";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

interface ButtonProps {
  variant?: "filled" | "tonal";
  onClick?(): void;
  className?: string;
  fetching?: boolean;
  disabled?: boolean;
  left?: ReactNode;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "filled",
    children,
    className,
    onClick,
    fetching,
    disabled,
    left,
  },
  ref
) {
  disabled = disabled || fetching;
  return (
    <button
      ref={ref}
      className={clsx(
        `relative flex h-10 items-center justify-center space-x-2 overflow-hidden rounded-full px-6 focus:outline-none focus-visible:ring-2`,
        variant === "filled" &&
          !disabled &&
          "bg-primary text-on-primary after:bg-on-primary",
        variant === "tonal" &&
          !disabled &&
          "bg-secondary-container text-on-secondary-container after:bg-on-secondary-container",
        "after:pointer-events-none after:absolute after:inset-0 after:bg-opacity-0 hover:after:bg-opacity-8 focus:after:bg-opacity-12",
        disabled &&
          "bg-on-surface bg-opacity-12 text-on-surface text-opacity-40",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {fetching ? (
        <span className="animate-spin">
          <IconLoader />
        </span>
      ) : (
        left
      )}
      <span className="whitespace-nowrap text-sm font-medium">{children}</span>
    </button>
  );
});

export default Button;
