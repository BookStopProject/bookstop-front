import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import clsx from "clsx";
import type { FC } from "react";
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
        "hidden md:flex absolute top-0 z-10 justify-center items-center w-10 h-full hover:opacity-75 focus:opacity-80",
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

const Scroller: FC<ScrollerProps> = ({
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
    <div className={clsx("relative md:px-10 md:-mx-10", className)}>
      {posState !== -1 && (
        <ChevronButton position="left" onClick={scrollLeft} />
      )}
      {posState !== 1 && (
        <ChevronButton position="right" onClick={scrollRight} />
      )}
      <div
        className={clsx(
          "flex no-scrollbar",
          !column
            ? "overflow-x-auto overflow-y-hidden"
            : "overflow-x-hidden overflow-y-auto"
        )}
        ref={ref}
      >
        <div
          className={clsx(
            "flex flex-shrink-0 items-stretch min-w-0 min-h-0",
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
