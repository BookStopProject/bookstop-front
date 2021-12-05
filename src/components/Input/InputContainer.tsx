import clsx from "clsx";
import type { FC } from "react";

export interface InputContainerProps {
  label?: string;
  className?: string;
  variant?: "outlined" | "filled";
}

export const InputContainer: FC<InputContainerProps & { focused: boolean }> = ({
  label,
  className,
  children,
  variant = "outlined",
  focused,
}) => {
  return (
    <label className={className}>
      {label && (
        <span
          className={clsx(
            "font-medium",
            focused ? "text-primary" : "text-on-surface-variant"
          )}
        >
          {label}
        </span>
      )}
      <div
        className={clsx(
          "flex items-center py-2 px-3 space-x-2 rounded-lg transition-colors",
          variant === "outlined" && "border-2 border-outline",
          variant === "outlined" && focused && "border-2 border-primary"
        )}
      >
        {children}
      </div>
    </label>
  );
};
