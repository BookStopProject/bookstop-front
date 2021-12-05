import clsx from "clsx";
import type { HTMLProps } from "react";
import { forwardRef } from "react";

const A = forwardRef<HTMLAnchorElement, HTMLProps<HTMLAnchorElement>>(
  function A({ children, className, ...props }, ref) {
    return (
      <a
        className={clsx(
          "text-primary hover:text-opacity-75 focus:text-opacity-75",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    );
  }
);

export default A;
