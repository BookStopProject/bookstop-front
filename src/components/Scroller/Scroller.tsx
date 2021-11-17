import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import clsx from "clsx";
import type { FC } from "react";
import { useRef, useState } from "react";

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
        "hidden md:flex justify-center items-center w-12 h-full absolute top-0 text-foreground",
        position === "left" ? "left-0" : "right-0"
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
  const scroll = (toRight: boolean) => {
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
  };
  return (
    <div className={clsx("relative md:px-12", className)}>
      {posState !== -1 && (
        <ChevronButton position="left" onClick={() => scroll(false)} />
      )}
      {posState !== 1 && (
        <ChevronButton position="right" onClick={() => scroll(true)} />
      )}
      <div
        className={clsx(
          "flex no-scrollbar",
          !column
            ? "overflow-x-auto overflow-y-hidden"
            : "overflow-y-auto overflow-x-hidden"
        )}
        ref={ref}
      >
        <div
          className={clsx(
            "flex flex-shrink-0 min-w-0 min-h-0 items-stretch",
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
