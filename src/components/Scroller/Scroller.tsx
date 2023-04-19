import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";
import { useCallback, useRef, useState } from "react";

interface ScrollerProps {
  className?: string;
  classNameContent?: string;
  column?: boolean;
}

const ChevronButton: FC<{ position: "left" | "right"; onClick(): void }> = ({
  position,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        "absolute top-0 z-10 hidden h-full w-10 items-center justify-center hover:opacity-75 focus:opacity-80 md:flex",
        position === "left"
          ? "left-0 bg-gradient-to-l"
          : "right-0 bg-gradient-to-r"
      )}
      onClick={onClick}
      aria-label={`Scroll ${position}`}
    >
      {position === "left" ? <IconChevronLeft /> : <IconChevronRight />}
    </button>
  );
};

const Scroller: FC<PropsWithChildren<ScrollerProps>> = ({
  column,
  className,
  classNameContent,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [posState, setPosState] = useState<-1 | 0 | 1>(-1);
  const scroll = useCallback((toRight: boolean) => {
    const node = ref.current;
    if (!node) return;
    const offset = node.offsetWidth;
    const width = node.scrollWidth;
    const dest = Math.max(
      0,
      Math.min(width, node.scrollLeft + (toRight ? 1 : -1) * offset)
    );
    if (dest === 0) setPosState(-1);
    else if (dest === width) setPosState(1);
    else setPosState(0);
    return node.scroll({
      left: dest,
      behavior: "smooth",
    });
  }, []);
  const scrollLeft = useCallback(() => {
    scroll(false);
  }, [scroll]);
  const scrollRight = useCallback(() => {
    scroll(true);
  }, [scroll]);
  return (
    <div className={clsx("relative md:-mx-10 md:px-10", className)}>
      {posState !== -1 && (
        <ChevronButton position="left" onClick={scrollLeft} />
      )}
      {posState !== 1 && (
        <ChevronButton position="right" onClick={scrollRight} />
      )}
      <div
        className={clsx(
          "no-scrollbar flex",
          !column
            ? "overflow-x-auto overflow-y-hidden"
            : "overflow-y-auto overflow-x-hidden"
        )}
        ref={ref}
      >
        <div
          className={clsx(
            "flex min-h-0 min-w-0 shrink-0 items-stretch",
            column && "flex-col",
            classNameContent
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Scroller;
