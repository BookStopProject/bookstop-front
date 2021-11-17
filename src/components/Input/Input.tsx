import clsx from "clsx";
import type {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";
import { forwardRef } from "react";

interface InputProps {
  placeholder?: string;
  left?: ReactNode;
  right?: ReactNode;
  label?: string;
  rounded?: boolean;
  className?: string;
  htmlType?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  min?: string;
  max?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    left,
    right,
    rounded,
    placeholder,
    label,
    className,
    htmlType,
    onChange,
    value,
    min,
    max,
  },
  ref
) {
  return (
    <label className={className}>
      {label && <span>{label}</span>}
      <div
        className={clsx(
          "flex items-center px-3 space-x-2 h-10 bg-control",
          rounded ? "rounded-full" : "rounded"
        )}
      >
        {left && <span>{left}</span>}
        <input
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          type={htmlType}
          ref={ref}
          placeholder={placeholder}
          className="placeholder-[#B4ADA9] flex-1 h-full bg-transparent focus:outline-none"
        />
        {right && <span>{right}</span>}
      </div>
    </label>
  );
});

export default Input;
