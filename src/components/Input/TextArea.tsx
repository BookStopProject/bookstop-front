import clsx from "clsx";
import type { ChangeEventHandler, ReactNode } from "react";
import { forwardRef } from "react";

interface TextAreaProps {
  placeholder?: string;
  left?: ReactNode;
  right?: ReactNode;
  label?: string;
  rounded?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  maxLength?: number;
  rows: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function Input(
  {
    left,
    right,
    rounded,
    placeholder,
    label,
    className,
    onChange,
    value,
    maxLength,
    rows,
  },
  ref
) {
  return (
    <label className={className}>
      {label && <span>{label}</span>}
      <div
        className={clsx(
          "flex items-center py-2 px-3 space-x-2 bg-control",
          rounded ? "rounded-full" : "rounded"
        )}
      >
        {left && <span>{left}</span>}
        <textarea
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          ref={ref}
          placeholder={placeholder}
          className="placeholder-[#B4ADA9] flex-1 h-full bg-transparent focus:outline-none"
          rows={rows}
        />
        {right && <span>{right}</span>}
      </div>
    </label>
  );
});

export default TextArea;
